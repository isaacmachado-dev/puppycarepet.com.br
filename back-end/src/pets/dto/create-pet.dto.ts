import { IsString, IsOptional, IsDateString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreatePetDto {
  @ApiProperty({ description: 'ID do cliente proprietário' })
  @IsString()
  cliente_id: string;

  @ApiProperty({ description: 'Nome do pet' })
  @IsString()
  nome: string;

  @ApiProperty({ description: 'Espécie do pet (ex: cachorro, gato)' })
  @IsString()
  especie: string;

  @ApiPropertyOptional({ description: 'Raça do pet' })
  @IsOptional()
  @IsString()
  raca?: string;

  @ApiPropertyOptional({ description: 'Porte do pet (ex: pequeno, médio, grande)' })
  @IsOptional()
  @IsString()
  porte?: string;

  @ApiPropertyOptional({ description: 'Data de nascimento do pet' })
  @IsOptional()
  @IsDateString()
  nascimento?: Date;

  @ApiPropertyOptional({ description: 'Observações sobre o pet' })
  @IsOptional()
  @IsString()
  observacoes?: string;
}
