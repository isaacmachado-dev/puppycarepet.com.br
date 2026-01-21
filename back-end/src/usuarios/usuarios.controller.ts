import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
  ParseIntPipe,
  HttpStatus,
  HttpException,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import * as path from 'path';
import * as fs from 'fs-extra';
import { v4 as uuidv4 } from 'uuid';
import { ApiTags, ApiOperation, ApiParam, ApiConsumes } from '@nestjs/swagger';

import { UsuariosService } from './usuarios.service';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { LoginDto } from './dto/create-usuario.dto';

@ApiTags('usuarios')
@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) { }

  @Post()
  @ApiOperation({ summary: 'Criar usuário' })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('FOTO'))
  async create(
    @Body('NOME') nome: string,
    @Body('EMAIL') email: string,
    @Body('SENHA') senha: string,
    @Body('TIPOS') tiposRaw: string,
    @UploadedFile() file: any,
  ) {
    try {
      // ✅ CORRIGIDO: Trata array ou string única
      let tipos: string[] = [];
      if (tiposRaw) {
        try {
          tipos = JSON.parse(tiposRaw);
          if (!Array.isArray(tipos)) tipos = [tiposRaw];
        } catch {
          tipos = [tiposRaw]; // ← "condutor" vira ["condutor"]
        }
      }

      const existing = await this.usuariosService.findByEmail(email);
      if (existing) {
        throw new HttpException('Email já cadastrado', HttpStatus.CONFLICT);
      }

      let fotoUrl: string | null = null;
      if (file) {
        console.log('📸 Upload:', file.originalname, file.size);
        const fileName = `${uuidv4()}.${file.originalname?.split('.').pop() || 'jpg'}`;
        const uploadPath = path.join(process.cwd(), 'uploads', fileName);

        await fs.ensureDir(path.dirname(uploadPath));
        await fs.writeFile(uploadPath, file.buffer);

        fotoUrl = `http://localhost:4000/uploads/${fileName}`;
        console.log('✅ Foto salva:', fotoUrl);
      }

      const usuario = await this.usuariosService.create({
        NOME: nome,
        EMAIL: email,
        SENHA: senha,
        TIPOS: tipos,  // ✅ Sempre array
        FOTO: fotoUrl,
        TELEFONE: '',
        DESCRICAO: '',
      });

      return usuario;
    } catch (error) {
      console.error('Erro create:', error);
      throw new HttpException('Erro interno', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('login')
  @ApiOperation({ summary: 'Autenticar usuário' })
  async login(@Body() body: LoginDto) {
    return this.usuariosService.login(body.email, body.senha);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os usuários' })
  async findAll() {
    return this.usuariosService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter usuário por ID' })
  @ApiParam({ name: 'id', description: 'ID_USUARIO' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usuariosService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar usuário' })
  @ApiConsumes('multipart/form-data')  // ✅ FormData
  @ApiParam({ name: 'id', description: 'ID_USUARIO' })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body('NOME') nome: string,
    @Body('EMAIL') email: string,
    @Body('TIPOS') tiposRaw: string,
  ) {
    console.log('PATCH fields:', { nome, email, tiposRaw });

    // Parse TIPOS igual POST
    let tipos: string[] = [];
    if (tiposRaw) {
      try {
        tipos = JSON.parse(tiposRaw);
      } catch {
        tipos = [tiposRaw];
      }
    }

    return this.usuariosService.update(id, { NOME: nome, EMAIL: email, TIPOS: tipos });
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar usuário' })
  @ApiParam({ name: 'id', description: 'ID_USUARIO' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.usuariosService.remove(id);
  }
}
