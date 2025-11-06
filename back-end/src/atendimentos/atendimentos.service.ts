import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAtendimentoDto } from './dto/create-atendimento.dto';
import { UpdateAtendimentoDto } from './dto/update-atendimento.dto';

@Injectable()
export class AtendimentosService {
  constructor(private prisma: PrismaService) {}

  async create(createAtendimentoDto: CreateAtendimentoDto) {
    return this.prisma.aTENDIMENTOS.create({
      data: createAtendimentoDto,
    });
  }

  async findAll() {
    return this.prisma.aTENDIMENTOS.findMany({
      include: {
        CLIENTE: true,
        PET: true,
        SERVICO: true,
        IMAGENS: true,
      },
    });
  }

  async findOne(id: number) {
    const atendimento = await this.prisma.aTENDIMENTOS.findUnique({
      where: { ID_ATENDIMENTO: id },
      include: {
        CLIENTE: true,
        PET: true,
        SERVICO: true,
        IMAGENS: true,
      },
    });

    if (!atendimento) {
      throw new NotFoundException(`Atendimento com ID ${id} não encontrado`);
    }

    return atendimento;
  }

  async update(id: number, updateAtendimentoDto: UpdateAtendimentoDto) {
    await this.findOne(id);
    return this.prisma.aTENDIMENTOS.update({
      where: { ID_ATENDIMENTO: id },
      data: updateAtendimentoDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.aTENDIMENTOS.delete({
      where: { ID_ATENDIMENTO: id },
    });
  }
}
