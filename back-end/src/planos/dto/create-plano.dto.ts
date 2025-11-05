import {
  IsString,
  IsOptional,
  IsNumber,
  IsInt,
  Min,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreatePlanoDto {
  @ApiProperty({ description: 'Nome do plano' })
  @IsString()
  nome: string;

  @ApiPropertyOptional({ description: 'Descrição do plano' })
  @IsOptional()
  @IsString()
  descricao?: string;

  @ApiProperty({ description: 'Preço do plano', example: 199.90 })
  @IsNumber()
  @Min(0)
  preco: number;

  @ApiProperty({ description: 'Número de banhos incluídos no plano', example: 4 })
  @IsInt()
  @Min(1)
  banhos_incluidos: number;
}
