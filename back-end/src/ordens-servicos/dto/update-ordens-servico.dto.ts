import { PartialType } from '@nestjs/swagger';
import { CreateOrdensServicoDto } from './create-ordens-servico.dto';

export class UpdateOrdensServicoDto extends PartialType(
  CreateOrdensServicoDto,
) {}
