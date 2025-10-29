// src/funcionarios/funcionarios.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';

@Injectable()
export class FuncionariosService {
  constructor(private prisma: PrismaService) {}

  async create(createFuncionarioDto: CreateFuncionarioDto) {
    return this.prisma.funcionarios.create({
      data: createFuncionarioDto,
    });
  }

  async findAll() {
    return this.prisma.funcionarios.findMany();
  }

  async findOne(id: string) {
    const funcionario = await this.prisma.funcionarios.findUnique({
      where: { id },
    });
    
    if (!funcionario) {
      throw new NotFoundException(`ID do funcionario ${id} não encontrada`);
    }
    
    return funcionario;
  }

  async update(id: string, updateFuncionarioDto: UpdateFuncionarioDto) {
    await this.findOne(id);
    return this.prisma.funcionarios.update({
      where: { id },
      data: updateFuncionarioDto,
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.funcionarios.delete({
      where: { id },
    });
  }
}
