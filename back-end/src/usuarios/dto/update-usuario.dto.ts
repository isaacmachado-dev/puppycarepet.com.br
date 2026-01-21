import { PartialType } from '@nestjs/mapped-types';  // ✅ mapped-types, NÃO swagger
import { CreateUsuarioDto } from './create-usuario.dto';

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {}
