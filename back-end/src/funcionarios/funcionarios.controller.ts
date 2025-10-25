import { Controller, Get, Param, Patch, Body } from '@nestjs/common';
import { FuncionariosService } from './funcionarios.service';

@Controller('funcionarios')
export class FuncionariosController {
  constructor(private readonly funcionariosService: FuncionariosService) {}

  @Get()
  findAll() {
    return this.funcionariosService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: { name?: string; email?: string; type?: string[] }) {
    return this.funcionariosService.updateFuncionario(Number(id), body);
  }
}