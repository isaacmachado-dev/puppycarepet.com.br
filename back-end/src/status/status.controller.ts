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
import { StatusService } from './status.service';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';

@ApiTags('status')
@Controller('status')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um novo status' })
  @ApiResponse({ status: 201, description: 'Status criado com sucesso.' })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  create(@Body() createStatusDto: CreateStatusDto) {
    return this.statusService.create(createStatusDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os status' })
  @ApiResponse({
    status: 200,
    description: 'Lista de status retornada com sucesso.',
  })
  findAll() {
    return this.statusService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar um status por ID' })
  @ApiParam({ name: 'id', description: 'ID do status' })
  @ApiResponse({ status: 200, description: 'Status encontrado.' })
  @ApiResponse({ status: 404, description: 'Status não encontrado.' })
  findOne(@Param('id') id: string) {
    return this.statusService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar um status' })
  @ApiParam({ name: 'id', description: 'ID do status' })
  @ApiResponse({ status: 200, description: 'Status atualizado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Status não encontrado.' })
  update(@Param('id') id: string, @Body() updateStatusDto: UpdateStatusDto) {
    return this.statusService.update(id, updateStatusDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover um status' })
  @ApiParam({ name: 'id', description: 'ID do status' })
  @ApiResponse({ status: 200, description: 'Status removido com sucesso.' })
  @ApiResponse({ status: 404, description: 'Status não encontrado.' })
  remove(@Param('id') id: string) {
    return this.statusService.remove(id);
  }
}
