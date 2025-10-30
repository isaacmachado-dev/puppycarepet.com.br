import { Module } from '@nestjs/common';
import { OrdensServicosController } from './ordens-servicos.controller';
import { OrdensServicosService } from './ordens-servicos.service';

@Module({
  controllers: [OrdensServicosController],
  providers: [OrdensServicosService]
})
export class OrdensServicosModule {}
