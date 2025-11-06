import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';

@Injectable()
export class PetsService {
  constructor(private prisma: PrismaService) {}

  async create(createPetDto: CreatePetDto) {
    return this.prisma.pETS.create({
      data: {
        ID_CLIENTE: createPetDto.ID_CLIENTE,
        NOME: createPetDto.NOME,
        RACA: createPetDto.RACA ?? undefined,
        DATA_NASC: createPetDto.DATA_NASC ? new Date(createPetDto.DATA_NASC) : undefined,
      },
    });
  }

  async findAll() {
    return this.prisma.pETS.findMany({
      include: {
        CLIENTE: true,
        ATENDIMENTOS: true,
      },
    });
  }

  async findOne(id: number) {
    const pet = await this.prisma.pETS.findUnique({
      where: { ID_PET: id },
      include: {
        CLIENTE: true,
        ATENDIMENTOS: true,
      },
    });

    if (!pet) {
      throw new NotFoundException(`Pet com ID ${id} não encontrado`);
    }

    return pet;
  }

  async update(id: number, updatePetDto: UpdatePetDto) {
    await this.findOne(id);
    return this.prisma.pETS.update({
      where: { ID_PET: id },
      data: {
        ID_CLIENTE: (updatePetDto as any).ID_CLIENTE ?? undefined,
        NOME: (updatePetDto as any).NOME ?? undefined,
        RACA: (updatePetDto as any).RACA ?? undefined,
        DATA_NASC: (updatePetDto as any).DATA_NASC ? new Date((updatePetDto as any).DATA_NASC) : undefined,
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.pETS.delete({
      where: { ID_PET: id },
    });
  }
}

