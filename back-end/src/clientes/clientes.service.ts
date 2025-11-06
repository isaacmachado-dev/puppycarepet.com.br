import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Injectable()
export class ClientesService {
  constructor(private prisma: PrismaService) {}

  async create(createClienteDto: CreateClienteDto) {
    return this.prisma.cLIENTES.create({
      data: createClienteDto,
    });
  }

  async findAll() {
    return this.prisma.cLIENTES.findMany({
      include: {
        PETS: true,
        PACOTES: true,
        ATENDIMENTOS: true,
      },
    });
  }

  async findOne(id: number) {
    const cliente = await this.prisma.cLIENTES.findUnique({
      where: { ID_CLIENTE: id },
      include: {
        PETS: true,
        PACOTES: true,
        ATENDIMENTOS: true,
      },
    });

    if (!cliente) {
      throw new NotFoundException(`Cliente com ID ${id} não encontrado`);
    }

    return cliente;
  }

  async update(id: number, updateClienteDto: UpdateClienteDto) {
    await this.findOne(id); // Check if exists
    return this.prisma.cLIENTES.update({
      where: { ID_CLIENTE: id },
      data: updateClienteDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id); // Check if exists
    return this.prisma.cLIENTES.delete({
      where: { ID_CLIENTE: id },
    });
  }
}

