import { IsString, IsOptional, IsDateString, IsNumber } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateRotaDto {
  @ApiProperty({ description: 'Data da rota' })
  @IsDateString()
  data: Date;

  @ApiProperty({ description: 'Tipo da rota (ex: entrega, coleta)' })
  @IsString()
  tipo: string;

  @ApiPropertyOptional({ description: 'Status da rota', default: 'planejada' })
  @IsOptional()
  @IsString()
  status?: string;

  @ApiPropertyOptional({ description: 'Nome do motorista responsável' })
  @IsOptional()
  @IsString()
  motorista?: string;

  @ApiPropertyOptional({ description: 'Kilometragem prevista em km' })
  @IsOptional()
  @IsNumber()
  kilometragem_prevista?: number;

  @ApiPropertyOptional({ description: 'Tempo previsto em minutos' })
  @IsOptional()
  @IsNumber()
  tempo_previsto?: number;
}
