import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuariosService {
  constructor(private prisma: PrismaService) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    return this.prisma.uSUARIOS.create({
      data: createUsuarioDto,
    });
  }

  async findAll() {
    return this.prisma.uSUARIOS.findMany();
  }

  async findOne(id: number) {
    const usuario = await this.prisma.uSUARIOS.findUnique({
      where: { ID_USUARIO: id },
    });

    if (!usuario) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado`);
    }

    return usuario;
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    await this.findOne(id);
    return this.prisma.uSUARIOS.update({
      where: { ID_USUARIO: id },
      data: updateUsuarioDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.uSUARIOS.delete({
      where: { ID_USUARIO: id },
    });
  }
}
