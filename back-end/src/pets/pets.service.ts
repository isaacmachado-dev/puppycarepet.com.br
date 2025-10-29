import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';

@Injectable()
export class PetsService {
  constructor(private prisma: PrismaService) {}

  async create(createPetDto: CreatePetDto) {
    return this.prisma.pets.create({
      data: {
        ...createPetDto,
        nascimento: createPetDto.nascimento ? new Date(createPetDto.nascimento) : undefined,
      },
    });
  }

  async findAll() {
    return this.prisma.pets.findMany({
      include: {
        cliente: true,
        ordens: true,
      },
    });
  }

  async findOne(id: string) {
    const pet = await this.prisma.pets.findUnique({
      where: { id },
      include: {
        cliente: true,
        ordens: true,
      },
    });

    if (!pet) {
      throw new NotFoundException(`Pet com ID ${id} não encontrado`);
    }

    return pet;
  }

  async update(id: string, updatePetDto: UpdatePetDto) {
    await this.findOne(id);
    return this.prisma.pets.update({
      where: { id },
      data: {
        ...updatePetDto,
        nascimento: updatePetDto.nascimento ? new Date(updatePetDto.nascimento) : undefined,
      },
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.pets.delete({
      where: { id },
    });
  }
}

