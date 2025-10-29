import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRotasParadaDto } from './dto/create-rotas-parada.dto';
import { UpdateRotasParadaDto } from './dto/update-rotas-parada.dto';

@Injectable()
export class RotasParadasService {
  constructor(private prisma: PrismaService) {}

  async create(createRotasParadaDto: CreateRotasParadaDto) {
    return this.prisma.rotasParadas.create({
      data: createRotasParadaDto,
    });
  }

  async findAll() {
    return this.prisma.rotasParadas.findMany({
      include: {
        rota: true,
        ordem: true,
      },
    });
  }

  async findOne(id: string) {
    const parada = await this.prisma.rotasParadas.findUnique({
      where: { id },
      include: {
        rota: true,
        ordem: true,
      },
    });

    if (!parada) {
      throw new NotFoundException(`Parada com ID ${id} não encontrada`);
    }

    return parada;
  }

  async update(id: string, updateRotasParadaDto: UpdateRotasParadaDto) {
    await this.findOne(id);
    return this.prisma.rotasParadas.update({
      where: { id },
      data: updateRotasParadaDto,
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.rotasParadas.delete({
      where: { id },
    });
  }
}

