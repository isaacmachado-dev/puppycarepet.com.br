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
import { RotasParadasService } from './rotas-paradas.service';
import { CreateRotasParadaDto } from './dto/create-rotas-parada.dto';
import { UpdateRotasParadaDto } from './dto/update-rotas-parada.dto';

@ApiTags('rotas-paradas')
@Controller('rotas-paradas')
export class RotasParadasController {
  constructor(private readonly rotasParadasService: RotasParadasService) {}

  @Post()
  @ApiOperation({ summary: 'Criar uma nova parada de rota' })
  @ApiResponse({
    status: 201,
    description: 'Parada de rota criada com sucesso.',
  })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  create(@Body() createRotasParadaDto: CreateRotasParadaDto) {
    return this.rotasParadasService.create(createRotasParadaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as paradas de rota' })
  @ApiResponse({
    status: 200,
    description: 'Lista de paradas de rota retornada com sucesso.',
  })
  findAll() {
    return this.rotasParadasService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar uma parada de rota por ID' })
  @ApiParam({ name: 'id', description: 'ID da parada de rota' })
  @ApiResponse({ status: 200, description: 'Parada de rota encontrada.' })
  @ApiResponse({ status: 404, description: 'Parada de rota não encontrada.' })
  findOne(@Param('id') id: string) {
    return this.rotasParadasService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar uma parada de rota' })
  @ApiParam({ name: 'id', description: 'ID da parada de rota' })
  @ApiResponse({
    status: 200,
    description: 'Parada de rota atualizada com sucesso.',
  })
  @ApiResponse({ status: 404, description: 'Parada de rota não encontrada.' })
  update(
    @Param('id') id: string,
    @Body() updateRotasParadaDto: UpdateRotasParadaDto,
  ) {
    return this.rotasParadasService.update(id, updateRotasParadaDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover uma parada de rota' })
  @ApiParam({ name: 'id', description: 'ID da parada de rota' })
  @ApiResponse({
    status: 200,
    description: 'Parada de rota removida com sucesso.',
  })
  @ApiResponse({ status: 404, description: 'Parada de rota não encontrada.' })
  remove(@Param('id') id: string) {
    return this.rotasParadasService.remove(id);
  }
}
