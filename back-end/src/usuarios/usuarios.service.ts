import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { CreateUsuarioDto } from './dto/create-usuario.dto';



@Injectable()
export class UsuariosService {
  constructor(private prisma: PrismaService) { }

  // ✅ NOVO: Verifica email único
  async findByEmail(email: string) {
    return this.prisma.uSUARIOS.findUnique({
      where: { EMAIL: email }
    });
  }

  async create(dto: CreateUsuarioDto) {
    const senhaHash = await bcrypt.hash(dto.SENHA, 10);


    // ✅ CORRIGIDO: Normaliza TIPOS
    let tipos: string[] | string = [];
    if (dto.TIPOS) {
      if (Array.isArray(dto.TIPOS)) {
        tipos = dto.TIPOS.flat(); // [["condutor"]] → ["condutor"]
      } else {
        tipos = dto.TIPOS;
      }
    }

    return this.prisma.uSUARIOS.create({
      data: {
        NOME: dto.NOME,
        EMAIL: dto.EMAIL,
        TELEFONE: dto.TELEFONE || '',
        DESCRICAO: dto.DESCRICAO,
        FOTO: dto.FOTO,
        SENHA_HASH: senhaHash,
        TIPOS: tipos,  // ✅ Array plano ou string
      },
    });
  }


  async login(email: string, senha: string) {
    const usuario = await this.prisma.uSUARIOS.findUnique({
      where: { EMAIL: email },
    });
    if (!usuario) throw new NotFoundException('Usuário não encontrado');

    const senhaValida = await bcrypt.compare(senha, usuario.SENHA_HASH);
    if (!senhaValida) throw new NotFoundException('Senha inválida');

    const token = jwt.sign(
      {
        id: usuario.ID_USUARIO,
        nome: usuario.NOME,
        email: usuario.EMAIL
      },
      process.env.JWT_SECRET || 'secret',
      { expiresIn: '1d' }
    );
    return { token };
  }

  async findAll() {
    const usuarios = await this.prisma.uSUARIOS.findMany({
      orderBy: [
        { ID_USUARIO: 'asc' }  // ✅ ORDEM ESTÁVEL por ID
      ]
    });
    return usuarios.map(u => ({
      ...u,
      FOTO_URL: u.FOTO ? `http://localhost:4000/${u.FOTO}` : null
    }));
  }

  async findOne(id: number) {
    const usuario = await this.prisma.uSUARIOS.findUnique({
      where: { ID_USUARIO: id },
    });
    if (!usuario) throw new NotFoundException(`Usuário ${id} não encontrado`);
    return usuario;
  }

  async update(id: number, dto: UpdateUsuarioDto) {
    await this.findOne(id);
    return this.prisma.uSUARIOS.update({
      where: { ID_USUARIO: id },
      data: {
        NOME: dto.NOME,
        EMAIL: dto.EMAIL,
        DESCRICAO: dto.DESCRICAO,
        TIPOS: dto.TIPOS,
      },
    });
  }

  async updateFoto(id: number, foto: string | null) {
    await this.findOne(id);
    return this.prisma.uSUARIOS.update({
      where: { ID_USUARIO: id },
      data: { FOTO: foto },
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.uSUARIOS.delete({
      where: { ID_USUARIO: id },
    });
  }
}
