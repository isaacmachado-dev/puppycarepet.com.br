import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuariosService {
  constructor(private prisma: PrismaService) {}

  // LOGIN DE USUÁRIO (FUNCIONAL)
  async login(email: string, senha: string) {
    const usuario = await this.prisma.uSUARIOS.findUnique({
      where: { EMAIL: email },
    });
    if (!usuario) throw new NotFoundException('Usuário não encontrado');

    const senhaValida = await bcrypt.compare(senha, usuario.SENHA_HASH);
    if (!senhaValida) throw new NotFoundException('Senha inválida');

    const token = jwt.sign(
      { id: usuario.ID_USUARIO, nome: usuario.NOME, email: usuario.EMAIL },
      process.env.JWT_SECRET || 'secret',
      { expiresIn: '1d' },
    );
    return { token };
  }

  // LISTAR TODOS OS USUÁRIOS
  async findAll() {
    return this.prisma.uSUARIOS.findMany();
  }

  // BUSCAR UM USUÁRIO POR ID
  async findOne(id: number) {
    const usuario = await this.prisma.uSUARIOS.findUnique({
      where: { ID_USUARIO: id },
    });

    if (!usuario) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado`);
    }

    return usuario;
  }

  // ATUALIZAR DADOS DO USUÁRIO
  async update(id: number, dto: UpdateUsuarioDto) {
  await this.findOne(id);

  return this.prisma.uSUARIOS.update({
    where: { ID_USUARIO: id },
    data: {
      NOME: dto.NOME,
      EMAIL: dto.EMAIL,
      DESCRICAO: dto.DESCRICAO,
      TIPOS: dto.TIPOS, // <- aqui passa a escrever no array o tipo
    },
  });
}


  // ATUALIZAR FOTO DO USUÁRIO
  async updateFoto(id: number, foto: string | null) {
    await this.findOne(id);
    return this.prisma.uSUARIOS.update({
      where: { ID_USUARIO: id },
      data: { FOTO: foto },
    });
  }

  // DELETAR USUÁRIO POR ID
  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.uSUARIOS.delete({
      where: { ID_USUARIO: id },
    });
  }
}
