import { IsString, IsOptional, IsDateString, IsNumber } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateOrdensServicoDto {
  @ApiProperty({ description: 'ID do cliente' })
  @IsString()
  cliente_id: string;

  @ApiProperty({ description: 'ID do pet' })
  @IsString()
  pet_id: string;

  @ApiProperty({
    description: 'Tipo de serviço (ex: banho, tosa, banho e tosa)',
  })
  @IsString()
  tipo: string;

  @ApiPropertyOptional({
    description: 'Status da ordem de serviço',
    default: 'agendado',
  })
  @IsOptional()
  @IsString()
  status?: string;

  @ApiProperty({ description: 'Data e hora agendada para o serviço' })
  @IsDateString()
  data_agendada: string;

  @ApiPropertyOptional({ description: 'Preço do serviço' })
  @IsOptional()
  @IsNumber()
  preco?: number;

  @ApiPropertyOptional({ description: 'Observações sobre o serviço' })
  @IsOptional()
  @IsString()
  observacoes?: string;
}
