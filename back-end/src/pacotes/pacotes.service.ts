import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePacoteDto } from './dto/create-pacote.dto';
import { UpdatePacoteDto } from './dto/update-pacote.dto';

@Injectable()
export class PacotesService {
  constructor(private prisma: PrismaService) {}

  async create(createPacoteDto: CreatePacoteDto) {
    return this.prisma.pACOTES.create({
      data: {
        ID_CLIENTE: createPacoteDto.ID_CLIENTE,
        ID_SERVICO: createPacoteDto.ID_SERVICO,
        QTD_BANHOS: createPacoteDto.QTD_BANHOS ?? 0,
      },
    });
  }

  async findAll() {
    return this.prisma.pACOTES.findMany({
      include: {
        CLIENTE: true,
        SERVICO: true,
      },
    });
  }

  async findOne(id: number) {
    const pacote = await this.prisma.pACOTES.findUnique({
      where: { ID_ASSINATURA: id },
      include: {
        CLIENTE: true,
        SERVICO: true,
      },
    });

    if (!pacote) {
      throw new NotFoundException(`Pacote com ID ${id} não encontrado`);
    }

    return pacote;
  }

  async update(id: number, updatePacoteDto: UpdatePacoteDto) {
    await this.findOne(id);
    return this.prisma.pACOTES.update({
      where: { ID_ASSINATURA: id },
      data: {
        ID_CLIENTE: (updatePacoteDto as any).ID_CLIENTE ?? undefined,
        ID_SERVICO: (updatePacoteDto as any).ID_SERVICO ?? undefined,
        QTD_BANHOS: (updatePacoteDto as any).QTD_BANHOS ?? undefined,
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.pACOTES.delete({
      where: { ID_ASSINATURA: id },
    });
  }
}


            
