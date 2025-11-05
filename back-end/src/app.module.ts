import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { FuncionariosModule } from './funcionarios/funcionarios.module';
import { ClientesModule } from './clientes/clientes.module';
import { PetsModule } from './pets/pets.module';
import { OrdensServicosModule } from './ordens-servicos/ordens-servicos.module';
import { RotasModule } from './rotas/rotas.module';
import { RotasParadasModule } from './rotas-paradas/rotas-paradas.module';
import { MensagensModule } from './mensagens/mensagens.module';
import { StatusModule } from './status/status.module';
import { PlanosModule } from './planos/planos.module';
import { PacotesModule } from './pacotes/pacotes.module';

@Module({
  imports: [PrismaModule, FuncionariosModule, ClientesModule, PetsModule, OrdensServicosModule, RotasModule, RotasParadasModule, MensagensModule, StatusModule, PlanosModule, PacotesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
