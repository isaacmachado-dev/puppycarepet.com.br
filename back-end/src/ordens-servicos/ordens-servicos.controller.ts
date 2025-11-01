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
import { OrdensServicosService } from './ordens-servicos.service';
import { CreateOrdensServicoDto } from './dto/create-ordens-servico.dto';
import { UpdateOrdensServicoDto } from './dto/update-ordens-servico.dto';

@ApiTags('ordens-servicos')
@Controller('ordens-servicos')
export class OrdensServicosController {
  constructor(private readonly ordensServicosService: OrdensServicosService) {}

  @Post()
  @ApiOperation({ summary: 'Criar uma nova ordem de serviço' })
  @ApiResponse({
    status: 201,
    description: 'Ordem de serviço criada com sucesso.',
  })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  create(@Body() createOrdensServicoDto: CreateOrdensServicoDto) {
    return this.ordensServicosService.create(createOrdensServicoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as ordens de serviço' })
  @ApiResponse({
    status: 200,
    description: 'Lista de ordens de serviço retornada com sucesso.',
  })
  findAll() {
    return this.ordensServicosService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar uma ordem de serviço por ID' })
  @ApiParam({ name: 'id', description: 'ID da ordem de serviço' })
  @ApiResponse({ status: 200, description: 'Ordem de serviço encontrada.' })
  @ApiResponse({ status: 404, description: 'Ordem de serviço não encontrada.' })
  findOne(@Param('id') id: string) {
    return this.ordensServicosService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar uma ordem de serviço' })
  @ApiParam({ name: 'id', description: 'ID da ordem de serviço' })
  @ApiResponse({
    status: 200,
    description: 'Ordem de serviço atualizada com sucesso.',
  })
  @ApiResponse({ status: 404, description: 'Ordem de serviço não encontrada.' })
  update(
    @Param('id') id: string,
    @Body() updateOrdensServicoDto: UpdateOrdensServicoDto,
  ) {
    return this.ordensServicosService.update(id, updateOrdensServicoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover uma ordem de serviço' })
  @ApiParam({ name: 'id', description: 'ID da ordem de serviço' })
  @ApiResponse({
    status: 200,
    description: 'Ordem de serviço removida com sucesso.',
  })
  @ApiResponse({ status: 404, description: 'Ordem de serviço não encontrada.' })
  remove(@Param('id') id: string) {
    return this.ordensServicosService.remove(id);
  }
}
