import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Injectable()
export class ClientesService {
  constructor(private prisma: PrismaService) {}

  async create(createClienteDto: CreateClienteDto) {
    return this.prisma.clientes.create({
      data: createClienteDto,
    });
  }

  async findAll() {
    return this.prisma.clientes.findMany({
      include: {
        pets: true,
        ordens: true,
      },
    });
  }

  async findOne(id: string) {
    const cliente = await this.prisma.clientes.findUnique({
      where: { id },
      include: {
        pets: true,
        ordens: true,
        mensagens: true,
      },
    });

    if (!cliente) {
      throw new NotFoundException(`Cliente com ID ${id} não encontrado`);
    }

    return cliente;
  }

  async update(id: string, updateClienteDto: UpdateClienteDto) {
    await this.findOne(id); // Check if exists
    return this.prisma.clientes.update({
      where: { id },
      data: updateClienteDto,
    });
  }

  async remove(id: string) {
    await this.findOne(id); // Check if exists
    return this.prisma.clientes.delete({
      where: { id },
    });
  }
}

