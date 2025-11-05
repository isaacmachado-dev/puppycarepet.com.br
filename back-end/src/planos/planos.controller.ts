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
import { PlanosService } from './planos.service';
import { CreatePlanoDto } from './dto/create-plano.dto';
import { UpdatePlanoDto } from './dto/update-plano.dto';

@ApiTags('planos')
@Controller('planos')
export class PlanosController {
  constructor(private readonly planosService: PlanosService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um novo plano' })
  @ApiResponse({ status: 201, description: 'Plano criado com sucesso.' })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  create(@Body() createPlanoDto: CreatePlanoDto) {
    return this.planosService.create(createPlanoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os planos' })
  @ApiResponse({
    status: 200,
    description: 'Lista de planos retornada com sucesso.',
  })
  findAll() {
    return this.planosService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar um plano por ID' })
  @ApiParam({ name: 'id', description: 'ID do plano' })
  @ApiResponse({ status: 200, description: 'Plano encontrado.' })
  @ApiResponse({ status: 404, description: 'Plano não encontrado.' })
  findOne(@Param('id') id: string) {
    return this.planosService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar um plano' })
  @ApiParam({ name: 'id', description: 'ID do plano' })
  @ApiResponse({ status: 200, description: 'Plano atualizado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Plano não encontrado.' })
  update(@Param('id') id: string, @Body() updatePlanoDto: UpdatePlanoDto) {
    return this.planosService.update(id, updatePlanoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover um plano' })
  @ApiParam({ name: 'id', description: 'ID do plano' })
  @ApiResponse({ status: 200, description: 'Plano removido com sucesso.' })
  @ApiResponse({ status: 404, description: 'Plano não encontrado.' })
  remove(@Param('id') id: string) {
    return this.planosService.remove(id);
  }
}
