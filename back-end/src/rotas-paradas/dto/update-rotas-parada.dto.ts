import { PartialType } from '@nestjs/swagger';
import { CreateRotasParadaDto } from './create-rotas-parada.dto';

export class UpdateRotasParadaDto extends PartialType(CreateRotasParadaDto) {}
