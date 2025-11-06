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
import { AtendimentoImagensService } from './atendimento-imagens.service';
import { CreateAtendimentoImagemDto } from './dto/create-atendimento-imagem.dto';
import { UpdateAtendimentoImagemDto } from './dto/update-atendimento-imagem.dto';

@ApiTags('atendimento-imagens')
@Controller('atendimento-imagens')
export class AtendimentoImagensController {
  constructor(
    private readonly atendimentoImagensService: AtendimentoImagensService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Criar uma nova imagem de atendimento' })
  @ApiResponse({
    status: 201,
    description: 'Imagem criada com sucesso.',
  })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  create(@Body() createAtendimentoImagemDto: CreateAtendimentoImagemDto) {
    return this.atendimentoImagensService.create(createAtendimentoImagemDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as imagens de atendimentos' })
  @ApiResponse({
    status: 200,
    description: 'Lista de imagens retornada com sucesso.',
  })
  findAll() {
    return this.atendimentoImagensService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar uma imagem por ID' })
  @ApiParam({ name: 'id', description: 'ID da imagem' })
  @ApiResponse({ status: 200, description: 'Imagem encontrada.' })
  @ApiResponse({ status: 404, description: 'Imagem não encontrada.' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.atendimentoImagensService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar uma imagem' })
  @ApiParam({ name: 'id', description: 'ID da imagem' })
  @ApiResponse({ status: 200, description: 'Imagem atualizada com sucesso.' })
  @ApiResponse({ status: 404, description: 'Imagem não encontrada.' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateAtendimentoImagemDto: UpdateAtendimentoImagemDto,
  ) {
    return this.atendimentoImagensService.update(
      id,
      updateAtendimentoImagemDto,
    );
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover uma imagem' })
  @ApiParam({ name: 'id', description: 'ID da imagem' })
  @ApiResponse({ status: 200, description: 'Imagem removida com sucesso.' })
  @ApiResponse({ status: 404, description: 'Imagem não encontrada.' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.atendimentoImagensService.remove(id);
  }
}
