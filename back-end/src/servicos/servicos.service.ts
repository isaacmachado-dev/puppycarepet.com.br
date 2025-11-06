import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateServicoDto } from './dto/create-servico.dto';
import { UpdateServicoDto } from './dto/update-servico.dto';

@Injectable()
export class ServicosService {
  constructor(private prisma: PrismaService) {}

  async create(createServicoDto: CreateServicoDto) {
    return this.prisma.sERVICOS.create({
      data: createServicoDto,
    });
  }

  async findAll() {
    return this.prisma.sERVICOS.findMany({
      include: {
        ATENDIMENTOS: true,
        PACOTES: true,
      },
    });
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

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.sERVICOS.delete({
      where: { ID_SERVICO: id },
    });
  }
}
