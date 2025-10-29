import { IsString, IsNumber } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateRotasParadaDto {
  @ApiProperty({ description: 'ID da rota' })
  @IsString()
  rota_id: string;

  @ApiProperty({ description: 'ID da ordem de serviço' })
  @IsString()
  ordem_id: string;

  @ApiProperty({ description: 'Sequência da parada na rota' })
  @IsNumber()
  sequencia: number;

  @ApiProperty({ description: 'Latitude do local' })
  @IsNumber()
  latitude: number;

  @ApiProperty({ description: 'Longitude do local' })
  @IsNumber()
  longitude: number;

  @ApiPropertyOptional({ description: 'Status da parada', default: 'pendente' })
  @IsString()
  status?: string;
}
