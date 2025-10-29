import { Module } from '@nestjs/common';
import { RotasParadasController } from './rotas-paradas.controller';
import { RotasParadasService } from './rotas-paradas.service';

@Module({
  controllers: [RotasParadasController],
  providers: [RotasParadasService]
})
export class RotasParadasModule {}
