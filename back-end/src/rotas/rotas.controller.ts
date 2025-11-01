import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { RotasService } from './rotas.service';
import { CreateRotaDto } from './dto/create-rota.dto';
import { UpdateRotaDto } from './dto/update-rota.dto';

@ApiTags('rotas')
@Controller('rotas')
export class RotasController {
  constructor(private readonly rotasService: RotasService) {}

  @Post()
  @ApiOperation({ summary: 'Criar uma nova rota' })
  @ApiResponse({ status: 201, description: 'Rota criada com sucesso.' })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  create(@Body() createRotaDto: CreateRotaDto) {
    return this.rotasService.create(createRotaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as rotas' })
  @ApiResponse({
    status: 200,
    description: 'Lista de rotas retornada com sucesso.',
  })
  findAll() {
    return this.rotasService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar uma rota por ID' })
  @ApiParam({ name: 'id', description: 'ID da rota' })
  @ApiResponse({ status: 200, description: 'Rota encontrada.' })
  @ApiResponse({ status: 404, description: 'Rota não encontrada.' })
  findOne(@Param('id') id: string) {
    return this.rotasService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar uma rota' })
  @ApiParam({ name: 'id', description: 'ID da rota' })
  @ApiResponse({ status: 200, description: 'Rota atualizada com sucesso.' })
  @ApiResponse({ status: 404, description: 'Rota não encontrada.' })
  update(@Param('id') id: string, @Body() updateRotaDto: UpdateRotaDto) {
    return this.rotasService.update(id, updateRotaDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover uma rota' })
  @ApiParam({ name: 'id', description: 'ID da rota' })
  @ApiResponse({ status: 200, description: 'Rota removida com sucesso.' })
  @ApiResponse({ status: 404, description: 'Rota não encontrada.' })
  remove(@Param('id') id: string) {
    return this.rotasService.remove(id);
  }
}
