import { Controller, Get } from '@nestjs/common';
import { FuncionariosService } from './funcionarios.service';

@Controller('funcionarios')
export class FuncionariosController {
  constructor(private readonly funcionariosService: FuncionariosService) {}

  @Get()
  findAll() {
    return this.funcionariosService.findAll();
  }
}
