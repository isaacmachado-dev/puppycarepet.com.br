import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePlanoDto } from './dto/create-plano.dto';
import { UpdatePlanoDto } from './dto/update-plano.dto';

@Injectable()
export class PlanosService {
  constructor(private prisma: PrismaService) {}

  async create(createPlanoDto: CreatePlanoDto) {
    return this.prisma.planos.create({
      data: createPlanoDto,
    });
  }

  async findAll() {
    return this.prisma.planos.findMany({
      include: {
        pacotes: true,
      },
    });
  }

  async findOne(id: string) {
    const plano = await this.prisma.planos.findUnique({
      where: { id },
      include: {
        pacotes: {
          include: {
            cliente: true,
          },
        },
      },
    });

    if (!plano) {
      throw new NotFoundException(`Plano com ID ${id} não encontrado`);
    }

    return plano;
  }

  async update(id: string, updatePlanoDto: UpdatePlanoDto) {
    await this.findOne(id); // Check if exists
    return this.prisma.planos.update({
      where: { id },
      data: updatePlanoDto,
    });
  }

  async remove(id: string) {
    await this.findOne(id); // Check if exists
    return this.prisma.planos.delete({
      where: { id },
    });
  }
}
