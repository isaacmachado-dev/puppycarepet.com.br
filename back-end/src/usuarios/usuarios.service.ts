import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateServicoDto } from '../servicos/dto/create-servico.dto';
import { UpdateServicoDto } from '../servicos/dto/update-servico.dto';
import {
  ServicoSyncBatchRequestDto,
  ServicoSyncItemDto,
} from '../servicos/dto/servico-sync.dto';
import { Prisma } from '@prisma/client';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class UsuariosService {
  constructor(private prisma: PrismaService) { }

  // LOGIN DE USUÁRIO (FUNCIONAL)
  async login(email: string, senha: string) {
    const usuario = await this.prisma.uSUARIOS.findUnique({
      where: { EMAIL: email },
    });
    if (!usuario) throw new NotFoundException('Usuário não encontrado');

    const senhaValida = await bcrypt.compare(senha, usuario.SENHA_HASH);
    if (!senhaValida) throw new NotFoundException('Senha inválida');

    const token = jwt.sign(
      { id: usuario.ID_USUARIO, nome: usuario.NOME, email: usuario.EMAIL },
      process.env.JWT_SECRET || 'secret',
      { expiresIn: '1d' },
    );
    return { token };
  }

  async create(createServicoDto: CreateServicoDto) {
    return this.prisma.sERVICOS.create({
      data: createServicoDto,
    });
  }

  async findAll() {
    return this.prisma.uSUARIOS.findMany();

  }

  async findOne(id: number) {
    const servico = await this.prisma.sERVICOS.findUnique({
      where: { ID_SERVICO: id },
      include: {
        ATENDIMENTOS: true,
        PACOTES: true,
      },
    });

    if (!servico) {
      throw new NotFoundException(`Serviço com ID ${id} não encontrado`);
    }

    return servico;
  }

  async update(id: number, updateServicoDto: UpdateServicoDto) {
    await this.findOne(id);
    return this.prisma.sERVICOS.update({
      where: { ID_SERVICO: id },
      data: updateServicoDto,
    });
  }

  async updateFoto(id: number, foto: string | null) {
    await this.findOne(id);
    return this.prisma.uSUARIOS.update({
      where: { ID_USUARIO: id },
      data: { FOTO_USUARIO: foto },
    });
  }


  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.sERVICOS.delete({
      where: { ID_SERVICO: id },
    });
  }

  // --- Offline-first sync logic ---
  async getChanges(since?: string) {
    const sinceDate = since ? new Date(since) : new Date(0);
    return this.prisma.sERVICOS.findMany({
      where: {
        OR: [
          { UPDATED_AT: { gt: sinceDate } },
          { DELETED_AT: { gte: sinceDate } },
        ],
      },
      orderBy: { UPDATED_AT: 'asc' },
    });
  }

  async batchUpsert(body: ServicoSyncBatchRequestDto) {
    const results = [] as Array<{
      publicId: string;
      status: 'applied' | 'conflict' | 'skipped';
      server?: any;
    }>;

    for (const item of body.items) {
      const res = await this.applyOne(item);
      results.push(res);
    }

    return { results };
  }

  private async applyOne(
    item: ServicoSyncItemDto,
  ): Promise<{
    publicId: string;
    status: 'applied' | 'conflict' | 'skipped';
    server?: any;
  }> {
    const {
      PUBLIC_ID,
      UPDATED_AT,
      VERSION,
      DELETED_AT,
      NOME,
      DESCRICAO,
      VALOR,
    } = item;

    if (!PUBLIC_ID) {
      const created = await this.prisma.sERVICOS.create({
        data: {
          NOME: NOME ?? 'Serviço',
          DESCRICAO: DESCRICAO ?? null,
          VALOR: VALOR
            ? new Prisma.Decimal(VALOR.toString())
            : new Prisma.Decimal(0),
          DELETED_AT: DELETED_AT ? new Date(DELETED_AT) : null,
        },
      });
      return { publicId: created.PUBLIC_ID, status: 'applied' };
    }

    const existing = await this.prisma.sERVICOS.findUnique({
      where: { PUBLIC_ID },
    });
    if (!existing) {
      const created = await this.prisma.sERVICOS.create({
        data: {
          PUBLIC_ID,
          NOME: NOME ?? 'Serviço',
          DESCRICAO: DESCRICAO ?? null,
          VALOR: VALOR
            ? new Prisma.Decimal(VALOR.toString())
            : new Prisma.Decimal(0),
          DELETED_AT: DELETED_AT ? new Date(DELETED_AT) : null,
        },
      });
      return { publicId: created.PUBLIC_ID, status: 'applied' };
    }

    const incomingUpdated = UPDATED_AT ? new Date(UPDATED_AT) : undefined;
    if (incomingUpdated && incomingUpdated > existing.UPDATED_AT) {
      const updated = await this.prisma.sERVICOS.update({
        where: { PUBLIC_ID },
        data: {
          NOME: NOME ?? existing.NOME,
          DESCRICAO:
            typeof DESCRICAO !== 'undefined' ? DESCRICAO : existing.DESCRICAO,
          VALOR:
            typeof VALOR !== 'undefined'
              ? new Prisma.Decimal(VALOR.toString())
              : existing.VALOR,
          DELETED_AT:
            typeof DELETED_AT !== 'undefined'
              ? DELETED_AT
                ? new Date(DELETED_AT)
                : null
              : existing.DELETED_AT,
          VERSION: { increment: 1 },
        },
      });
      return { publicId: updated.PUBLIC_ID, status: 'applied' };
    }

    if (
      !incomingUpdated &&
      (NOME !== undefined ||
        typeof DESCRICAO !== 'undefined' ||
        typeof VALOR !== 'undefined' ||
        typeof DELETED_AT !== 'undefined')
    ) {
      const updated = await this.prisma.sERVICOS.update({
        where: { PUBLIC_ID },
        data: {
          NOME: NOME ?? existing.NOME,
          DESCRICAO:
            typeof DESCRICAO !== 'undefined' ? DESCRICAO : existing.DESCRICAO,
          VALOR:
            typeof VALOR !== 'undefined'
              ? new Prisma.Decimal(VALOR.toString())
              : existing.VALOR,
          DELETED_AT:
            typeof DELETED_AT !== 'undefined'
              ? DELETED_AT
                ? new Date(DELETED_AT)
                : null
              : existing.DELETED_AT,
          VERSION: { increment: 1 },
        },
      });
      return { publicId: existing.PUBLIC_ID, status: 'applied' };
    }

    return {
      publicId: existing.PUBLIC_ID,
      status: 'conflict',
      server: existing,
    };
  }

  async softDeleteByPublicId(publicId: string) {
    const existing = await this.prisma.sERVICOS.findUnique({
      where: { PUBLIC_ID: publicId },
    });
    if (!existing)
      throw new NotFoundException(
        `Serviço com PUBLIC_ID ${publicId} não encontrado`,
      );
    return this.prisma.sERVICOS.update({
      where: { PUBLIC_ID: publicId },
      data: { DELETED_AT: new Date(), VERSION: { increment: 1 } },
    });
  }
}

