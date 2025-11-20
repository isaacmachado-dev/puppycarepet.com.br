<<<<<<< HEAD
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { UsuarioSyncBatchRequestDto } from './dto/usuario-sync.dto';
=======
import { Controller, Post, Body, Get, Param, Query, Patch, Delete, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { UsuariosService } from './usuarios.service';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { LoginDto } from './dto/create-usuario.dto';

// Local DTO used for batch sync requests to avoid missing module import.
// Adjust the shape below to match the real payload expected by the service.
interface UsuarioSyncBatchRequestDto {
  items: any[];
  source?: string;
  timestamp?: string;
}
>>>>>>> d165a07e03a0486fb1efa111bf3012d780ea0dfe

@ApiTags('usuarios')
@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

<<<<<<< HEAD
  @Post()
  @ApiOperation({ summary: 'Criar um novo usuário' })
  @ApiResponse({ status: 201, description: 'Usuário criado com sucesso.' })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuariosService.create(createUsuarioDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os usuários' })
  @ApiResponse({
    status: 200,
    description: 'Lista de usuários retornada com sucesso.',
  })
  findAll() {
    return this.usuariosService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar um usuário por ID' })
  @ApiParam({ name: 'id', description: 'ID do usuário' })
  @ApiResponse({ status: 200, description: 'Usuário encontrado.' })
  @ApiResponse({ status: 404, description: 'Usuário não encontrado.' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usuariosService.findOne(id);
  }
=======
  @Post('login')
  @ApiOperation({ summary: 'Autenticar usuário e retornar JWT por EMAIL' })
  @ApiResponse({ status: 200, description: 'Login realizado com sucesso.' })
  @ApiResponse({ status: 401, description: 'Credenciais inválidas.' })
  async login(@Body() body: LoginDto) {
    return this.usuariosService.login(body.email, body.senha);
  }

@Get()
@ApiOperation({ summary: 'Listar todos os usuários' })
@ApiResponse({
  status: 200,
  description: 'Lista de usuários retornada com sucesso.',
})
findAll() {
  return this.usuariosService.findAll();
}
>>>>>>> d165a07e03a0486fb1efa111bf3012d780ea0dfe

  // --- Offline-first sync endpoints ---
  @Get('changes')
  @ApiOperation({ summary: 'Listar alterações de usuários desde um timestamp' })
  @ApiResponse({ status: 200, description: 'Mudanças retornadas com sucesso.' })
  getChanges(@Query('since') since?: string) {
    return this.usuariosService.getChanges(since);
  }

  @Post('batch')
  @ApiOperation({ summary: 'Aplicar lote de alterações de usuários (upsert por PUBLIC_ID)' })
  @ApiResponse({ status: 200, description: 'Resultados do processamento do lote.' })
  batch(@Body() body: UsuarioSyncBatchRequestDto) {
    return this.usuariosService.batchUpsert(body);
  }

<<<<<<< HEAD
  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar um usuário' })
  @ApiParam({ name: 'id', description: 'ID do usuário' })
  @ApiResponse({ status: 200, description: 'Usuário atualizado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Usuário não encontrado.' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUsuarioDto: UpdateUsuarioDto,
  ) {
    return this.usuariosService.update(id, updateUsuarioDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover um usuário' })
  @ApiParam({ name: 'id', description: 'ID do usuário' })
  @ApiResponse({ status: 200, description: 'Usuário removido com sucesso.' })
  @ApiResponse({ status: 404, description: 'Usuário não encontrado.' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.usuariosService.remove(id);
  }
=======

>>>>>>> d165a07e03a0486fb1efa111bf3012d780ea0dfe

  @Delete('public/:publicId')
  @ApiOperation({ summary: 'Soft delete por PUBLIC_ID (marca DELETED_AT)' })
  @ApiParam({ name: 'publicId', description: 'PUBLIC_ID do usuário' })
  softDeleteByPublicId(@Param('publicId') publicId: string) {
    return this.usuariosService.softDeleteByPublicId(publicId);
  }
}
<<<<<<< HEAD
=======

>>>>>>> d165a07e03a0486fb1efa111bf3012d780ea0dfe
