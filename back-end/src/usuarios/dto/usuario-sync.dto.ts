import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsInt, IsISO8601, IsOptional, IsString, ValidateNested } from 'class-validator';

export class UsuarioSyncItemDto {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  PUBLIC_ID?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  NOME?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
<<<<<<< HEAD
=======
  EMAIL?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
>>>>>>> d165a07e03a0486fb1efa111bf3012d780ea0dfe
  DESCRICAO?: string | null;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  SENHA_HASH?: string;

<<<<<<< HEAD
  @ApiProperty({ required: false, description: 'ISO timestamp of the update' })
=======
  @ApiProperty({ required: false, description: 'Carimbo de data/hora ISO da atualização' })
>>>>>>> d165a07e03a0486fb1efa111bf3012d780ea0dfe
  @IsOptional()
  @IsISO8601()
  UPDATED_AT?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsInt()
  VERSION?: number;

<<<<<<< HEAD
  @ApiProperty({ required: false, description: 'ISO timestamp for soft delete or null' })
=======
  @ApiProperty({ required: false, description: 'Carimbo de data/hora ISO para exclusão lógica ou null' })
>>>>>>> d165a07e03a0486fb1efa111bf3012d780ea0dfe
  @IsOptional()
  @IsISO8601()
  DELETED_AT?: string | null;
}

export class UsuarioSyncBatchRequestDto {
  @ApiProperty({ type: [UsuarioSyncItemDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UsuarioSyncItemDto)
  items!: UsuarioSyncItemDto[];
}
