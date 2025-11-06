import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAtendimentoImagemDto } from './dto/create-atendimento-imagem.dto';
import { UpdateAtendimentoImagemDto } from './dto/update-atendimento-imagem.dto';

@Injectable()
export class AtendimentoImagensService {
  constructor(private prisma: PrismaService) {}

  async create(createAtendimentoImagemDto: CreateAtendimentoImagemDto) {
    return this.prisma.aTENDIMENTO_IMAGENS.create({
      data: createAtendimentoImagemDto,
    });
  }

  async findAll() {
    return this.prisma.aTENDIMENTO_IMAGENS.findMany({
      include: {
        ATENDIMENTO: true,
      },
    });
  }

  async findOne(id: number) {
    const imagem = await this.prisma.aTENDIMENTO_IMAGENS.findUnique({
      where: { ID_IMAGEM: id },
      include: {
        ATENDIMENTO: true,
      },
    });

    if (!imagem) {
      throw new NotFoundException(`Imagem com ID ${id} não encontrada`);
    }

    return imagem;
  }

  async update(
    id: number,
    updateAtendimentoImagemDto: UpdateAtendimentoImagemDto,
  ) {
    await this.findOne(id);
    return this.prisma.aTENDIMENTO_IMAGENS.update({
      where: { ID_IMAGEM: id },
      data: updateAtendimentoImagemDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.aTENDIMENTO_IMAGENS.delete({
      where: { ID_IMAGEM: id },
    });
  }
}
