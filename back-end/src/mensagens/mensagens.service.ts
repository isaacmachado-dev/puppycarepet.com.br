import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMensagemDto } from './dto/create-mensagem.dto';
import { UpdateMensagemDto } from './dto/update-mensagem.dto';

@Injectable()
export class MensagensService {
  constructor(private prisma: PrismaService) {}

  async create(createMensagemDto: CreateMensagemDto) {
    return this.prisma.mensagens.create({
      data: createMensagemDto,
    });
  }

  async findAll() {
    return this.prisma.mensagens.findMany({
      include: {
        clientes: true,
      },
    });
  }

  async findOne(id: string) {
    const mensagem = await this.prisma.mensagens.findUnique({
      where: { id },
      include: {
        clientes: true,
      },
    });
    
    if (!mensagem) {
      throw new NotFoundException(`Mensagem com ID ${id} não encontrada`);
    }
    
    return mensagem;
  }

  async update(id: string, updateMensagemDto: UpdateMensagemDto) {
    await this.findOne(id);
    return this.prisma.mensagens.update({
      where: { id },
      data: updateMensagemDto,
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.mensagens.delete({
      where: { id },
    });
  }
}

