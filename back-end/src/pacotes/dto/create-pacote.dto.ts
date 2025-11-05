import {
  IsString,
  IsDateString,
  IsInt,
  IsOptional,
  Min,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreatePacoteDto {
  @ApiProperty({ description: 'Data de início do pacote', example: '2025-11-05T00:00:00Z' })
  @IsDateString()
  datainicio: string;

  @ApiProperty({ description: 'Data de fim do pacote', example: '2025-12-05T00:00:00Z' })
  @IsDateString()
  datafim: string;

  @ApiPropertyOptional({ description: 'Número de banhos já utilizados no pacote', default: 0 })
  @IsOptional()
  @IsInt()
  @Min(0)
  banhos_utilizados?: number;

  @ApiProperty({ description: 'ID do cliente' })
  @IsString()
  id_cliente: string;

  @ApiProperty({ description: 'ID do plano contratado' })
  @IsString()
  id_plano: string;
}
