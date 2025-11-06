import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { AtendimentosService } from './atendimentos.service';
import { CreateAtendimentoDto } from './dto/create-atendimento.dto';
import { UpdateAtendimentoDto } from './dto/update-atendimento.dto';

@ApiTags('atendimentos')
@Controller('atendimentos')
export class AtendimentosController {
  constructor(private readonly atendimentosService: AtendimentosService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um novo atendimento' })
  @ApiResponse({ status: 201, description: 'Atendimento criado com sucesso.' })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  create(@Body() createAtendimentoDto: CreateAtendimentoDto) {
    return this.atendimentosService.create(createAtendimentoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os atendimentos' })
  @ApiResponse({
    status: 200,
    description: 'Lista de atendimentos retornada com sucesso.',
  })
  findAll() {
    return this.atendimentosService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar um atendimento por ID' })
  @ApiParam({ name: 'id', description: 'ID do atendimento' })
  @ApiResponse({ status: 200, description: 'Atendimento encontrado.' })
  @ApiResponse({ status: 404, description: 'Atendimento não encontrado.' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.atendimentosService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar um atendimento' })
  @ApiParam({ name: 'id', description: 'ID do atendimento' })
  @ApiResponse({
    status: 200,
    description: 'Atendimento atualizado com sucesso.',
  })
  @ApiResponse({ status: 404, description: 'Atendimento não encontrado.' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateAtendimentoDto: UpdateAtendimentoDto,
  ) {
    return this.atendimentosService.update(id, updateAtendimentoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover um atendimento' })
  @ApiParam({ name: 'id', description: 'ID do atendimento' })
  @ApiResponse({ status: 200, description: 'Atendimento removido com sucesso.' })
  @ApiResponse({ status: 404, description: 'Atendimento não encontrado.' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.atendimentosService.remove(id);
  }
}
