import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { MensagensService } from './mensagens.service';
import { CreateMensagemDto } from './dto/create-mensagem.dto';
import { UpdateMensagemDto } from './dto/update-mensagem.dto';

@ApiTags('mensagens')
@Controller('mensagens')
export class MensagensController {
  constructor(private readonly mensagensService: MensagensService) {}

  @Post()
  @ApiOperation({ summary: 'Criar uma nova mensagem' })
  @ApiResponse({ status: 201, description: 'Mensagem criada com sucesso.' })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  create(@Body() createMensagemDto: CreateMensagemDto) {
    return this.mensagensService.create(createMensagemDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as mensagens' })
  @ApiResponse({ status: 200, description: 'Lista de mensagens retornada com sucesso.' })
  findAll() {
    return this.mensagensService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar uma mensagem por ID' })
  @ApiParam({ name: 'id', description: 'ID da mensagem' })
  @ApiResponse({ status: 200, description: 'Mensagem encontrada.' })
  @ApiResponse({ status: 404, description: 'Mensagem não encontrada.' })
  findOne(@Param('id') id: string) {
    return this.mensagensService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar uma mensagem' })
  @ApiParam({ name: 'id', description: 'ID da mensagem' })
  @ApiResponse({ status: 200, description: 'Mensagem atualizada com sucesso.' })
  @ApiResponse({ status: 404, description: 'Mensagem não encontrada.' })
  update(@Param('id') id: string, @Body() updateMensagemDto: UpdateMensagemDto) {
    return this.mensagensService.update(id, updateMensagemDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover uma mensagem' })
  @ApiParam({ name: 'id', description: 'ID da mensagem' })
  @ApiResponse({ status: 200, description: 'Mensagem removida com sucesso.' })
  @ApiResponse({ status: 404, description: 'Mensagem não encontrada.' })
  remove(@Param('id') id: string) {
    return this.mensagensService.remove(id);
  }
}

