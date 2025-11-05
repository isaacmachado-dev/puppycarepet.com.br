import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePacoteDto } from './dto/create-pacote.dto';
import { UpdatePacoteDto } from './dto/update-pacote.dto';

@Injectable()
export class PacotesService {
  constructor(private prisma: PrismaService) {}

  async create(createPacoteDto: CreatePacoteDto) {
    return this.prisma.pacotes.create({
      data: {
        ...createPacoteDto,
        datainicio: new Date(createPacoteDto.datainicio),
        datafim: new Date(createPacoteDto.datafim),
      },
    });
  }

  async findAll() {
    return this.prisma.pacotes.findMany({
      include: {
        cliente: true,
        plano: true,
      },
    });
  }

  async findOne(id: string) {
    const pacote = await this.prisma.pacotes.findUnique({
      where: { id },
      include: {
        cliente: true,
        plano: true,
      },
    });

    if (!pacote) {
      throw new NotFoundException(`Pacote com ID ${id} não encontrado`);
    }

    return pacote;
  }

  async update(id: string, updatePacoteDto: UpdatePacoteDto) {
    await this.findOne(id); // Check if exists
    return this.prisma.pacotes.update({
      where: { id },
      data: {
        ...updatePacoteDto,
        datainicio: updatePacoteDto.datainicio
          ? new Date(updatePacoteDto.datainicio)
          : undefined,
        datafim: updatePacoteDto.datafim
          ? new Date(updatePacoteDto.datafim)
          : undefined,
      },
    });
  }

  async remove(id: string) {
    await this.findOne(id); // Check if exists
    return this.prisma.pacotes.delete({
      where: { id },
    });
  }
}


            
