import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRotaDto } from './dto/create-rota.dto';
import { UpdateRotaDto } from './dto/update-rota.dto';

@Injectable()
export class RotasService {
  constructor(private prisma: PrismaService) {}

  async create(createRotaDto: CreateRotaDto) {
    return this.prisma.rotas.create({
      data: {
        ...createRotaDto,
        data: new Date(createRotaDto.data),
      },
    });
  }

  async findAll() {
    return this.prisma.rotas.findMany({
      include: {
        paradas: {
          include: {
            ordem: true,
          },
        },
      },
    });
  }

  async findOne(id: string) {
    const rota = await this.prisma.rotas.findUnique({
      where: { id },
      include: {
        paradas: {
          include: {
            ordem: true,
          },
        },
      },
    });

    if (!rota) {
      throw new NotFoundException(`Rota com ID ${id} não encontrada`);
    }

    return rota;
  }

  async update(id: string, updateRotaDto: UpdateRotaDto) {
    await this.findOne(id);
    return this.prisma.rotas.update({
      where: { id },
      data: {
        ...updateRotaDto,
        data: updateRotaDto.data ? new Date(updateRotaDto.data) : undefined,
      },
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.rotas.delete({
      where: { id },
    });
  }
}

