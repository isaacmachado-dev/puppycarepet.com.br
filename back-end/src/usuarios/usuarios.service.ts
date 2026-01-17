import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { CreateUsuarioDto } from './dto/create-usuario.dto';

// Corrige strings possivelmente em latin1 (ex.: "JoÃ£o" -> "João")
function decodeMaybeLatin1(value?: string | null): string | null | undefined {
  if (!value) return value;
  try {
    const buf = Buffer.from(value, 'binary');
    return buf.toString('utf8');
  } catch {
    return value;
  }
}

@Injectable()
export class UsuariosService {
  constructor(private prisma: PrismaService) { }

  // CRIAR USUÁRIO
  async create(dto: CreateUsuarioDto) {
    const senhaHash = await bcrypt.hash(dto.SENHA, 10);

    const nome = decodeMaybeLatin1(dto.NOME) ?? dto.NOME;
    const descricao = decodeMaybeLatin1(dto.DESCRICAO ?? undefined) ?? dto.DESCRICAO;

    return this.prisma.uSUARIOS.create({
      data: {
        NOME: nome,
        EMAIL: dto.EMAIL,
        TELEFONE: dto.TELEFONE,
        DESCRICAO: descricao,
        FOTO: dto.FOTO,
        SENHA_HASH: senhaHash,
        TIPOS: dto.TIPOS ?? [],
      },
    });
  }

  // LOGIN DE USUÁRIO (FUNCIONAL)
  async login(email: string, senha: string) {
    const usuario = await this.prisma.uSUARIOS.findUnique({
      where: { EMAIL: email },
    });
    if (!usuario) throw new NotFoundException('Usuário não encontrado');

    const senhaValida = await bcrypt.compare(senha, usuario.SENHA_HASH);
    if (!senhaValida) throw new NotFoundException('Senha inválida');

    // ← AQUI (SUBSTITUI a linha do jwt.sign atual)
    console.log('🔍 RAW DB:', usuario.NOME);
    console.log('🔍 RAW bytes:', Array.from(new TextEncoder().encode(usuario.NOME)));
    console.log('🔍 Buffer latin1→utf8:', Buffer.from(usuario.NOME, 'latin1').toString('utf8'));
    console.log('🔍 Buffer utf8→utf8:', Buffer.from(usuario.NOME, 'utf8').toString('utf8'));

    const token = jwt.sign(
      {
        id: usuario.ID_USUARIO,
        nome: usuario.NOME,  // ← DIRETO, sem Buffer!
        email: usuario.EMAIL
      },
      process.env.JWT_SECRET || 'secret',
      { expiresIn: '1d' }
    );
    return { token };
  }

  // LISTAR TODOS OS USUÁRIOS
  async findAll() {
    const usuarios = await this.prisma.uSUARIOS.findMany();

    // LOG CRU pra debug
    console.log('RAW DB:', usuarios[0].NOME);
    console.log('RAW typeof:', typeof usuarios[0].NOME);

    return usuarios;
  }

  // BUSCAR UM USUÁRIO POR ID
  async findOne(id: number) {
    const usuario = await this.prisma.uSUARIOS.findUnique({
      where: { ID_USUARIO: id },
    });

    if (!usuario) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado`);
    }

    return usuario;
  }

  // ATUALIZAR DADOS DO USUÁRIO
  async update(id: number, dto: UpdateUsuarioDto) {
    await this.findOne(id);

    // const nome = decodeMaybeLatin1(dto.NOME ?? undefined) ?? dto.NOME;
    //  const descricao = decodeMaybeLatin1(dto.DESCRICAO ?? undefined) ?? dto.DESCRICAO;

    return this.prisma.uSUARIOS.update({
      where: { ID_USUARIO: id },
      data: {
        NOME: dto.NOME,
        EMAIL: dto.EMAIL,
        DESCRICAO: dto.DESCRICAO,
        TIPOS: dto.TIPOS, // <- aqui passa a escrever no array o tipo
      },
    });
  }


  // ATUALIZAR FOTO DO USUÁRIO
  async updateFoto(id: number, foto: string | null) {
    await this.findOne(id);
    return this.prisma.uSUARIOS.update({
      where: { ID_USUARIO: id },
      data: { FOTO: foto },
    });
  }

  // DELETAR USUÁRIO POR ID
  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.uSUARIOS.delete({
      where: { ID_USUARIO: id },
    });
  }
}
