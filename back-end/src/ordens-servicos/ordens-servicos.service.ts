import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrdensServicoDto } from './dto/create-ordens-servico.dto';
import { UpdateOrdensServicoDto } from './dto/update-ordens-servico.dto';

@Injectable()
export class OrdensServicosService {
  constructor(private prisma: PrismaService) {}

  async create(createOrdensServicoDto: CreateOrdensServicoDto) {
    return this.prisma.ordensServicos.create({
      data: {
        ...createOrdensServicoDto,
        data_agendada: new Date(createOrdensServicoDto.data_agendada),
      },
    });
  }

  async findAll() {
    return this.prisma.ordensServicos.findMany({
      include: {
        clientes: true,
        pet: true,
        paradas: true,
        statuses: true,
      },
    });
  }

  async findOne(id: string) {
    const ordem = await this.prisma.ordensServicos.findUnique({
      where: { id },
      include: {
        clientes: true,
        pet: true,
        paradas: true,
        statuses: true,
      },
    });

    if (!ordem) {
      throw new NotFoundException(`Ordem de serviço com ID ${id} não encontrada`);
    }

    return ordem;
  }

  async update(id: string, updateOrdensServicoDto: UpdateOrdensServicoDto) {
    await this.findOne(id);
    return this.prisma.ordensServicos.update({
      where: { id },
      data: {
        ...updateOrdensServicoDto,
        data_agendada: updateOrdensServicoDto.data_agendada 
          ? new Date(updateOrdensServicoDto.data_agendada) 
          : undefined,
      },
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.ordensServicos.delete({
      where: { id },
    });
  }
}

