import { IsString, IsOptional, IsDateString, IsNumber } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateOrdensServicoDto {
  @ApiProperty({ description: 'ID do cliente', type: String })
  @IsString()
  cliente_id: string;

  @ApiProperty({ description: 'ID do pet', type: String })
  @IsString()
  pet_id: string;

  @ApiProperty({
    description: 'Tipo de serviço (ex: banho, tosa, banho e tosa)',
    type: String,
  })
  @IsString()
  tipo: string;
  @ApiPropertyOptional({
    description: 'Status da ordem de serviço',
    default: 'agendado',
    type: String,
  })
  @IsOptional()
  @IsString()
  status?: string;
  @ApiProperty({ description: 'Data e hora agendada para o serviço', type: String })
  @IsDateString()
  data_agendada: string;
  @IsDateString()
  @ApiPropertyOptional({ description: 'Preço do serviço', type: Number })
  @IsOptional()
  @IsNumber()
  preco?: number;
  @IsNumber()
  @ApiPropertyOptional({ description: 'Observações sobre o serviço', type: String })
  @IsOptional()
  @IsString()
  observacoes?: string;
}
