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
import { PacotesService } from './pacotes.service';
import { CreatePacoteDto } from './dto/create-pacote.dto';
import { UpdatePacoteDto } from './dto/update-pacote.dto';

@ApiTags('pacotes')
@Controller('pacotes')
export class PacotesController {
    constructor(private readonly pacotesService: PacotesService) {}

    @Post()
    @ApiOperation({ summary: 'Criar um novo pacote' })
    @ApiResponse({ status: 201, description: 'Pacote criado com sucesso.' })
    @ApiResponse({ status: 400, description: 'Dados inválidos.' })
    create(@Body() createPacoteDto: CreatePacoteDto) {
        return this.pacotesService.create(createPacoteDto);
    }

    @Get()
    @ApiOperation({ summary: 'Listar todos os pacotes' })
    @ApiResponse({
        status: 200,
        description: 'Lista de pacotes retornada com sucesso.',
    })
    findAll() {
        return this.pacotesService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Buscar um pacote por ID' })
    @ApiParam({ name: 'id', description: 'ID do pacote' })
    @ApiResponse({ status: 200, description: 'Pacote encontrado.' })
    @ApiResponse({ status: 404, description: 'Pacote não encontrado.' })
    findOne(@Param('id') id: string) {
        return this.pacotesService.findOne(id);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Atualizar um pacote' })
    @ApiParam({ name: 'id', description: 'ID do pacote' })
    @ApiResponse({ status: 200, description: 'Pacote atualizado com sucesso.' })
    @ApiResponse({ status: 404, description: 'Pacote não encontrado.' })
    update(@Param('id') id: string, @Body() updatePacoteDto: UpdatePacoteDto) {
        return this.pacotesService.update(id, updatePacoteDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Remover um pacote' })
    @ApiParam({ name: 'id', description: 'ID do pacote' })
    @ApiResponse({ status: 200, description: 'Pacote removido com sucesso.' })
    @ApiResponse({ status: 404, description: 'Pacote não encontrado.' })
    remove(@Param('id') id: string) {
        return this.pacotesService.remove(id);
    }
}
