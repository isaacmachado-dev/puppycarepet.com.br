import { IsString, IsOptional, IsDateString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateStatusDto {
  @ApiProperty({ description: 'ID da ordem de serviço' })
  @IsString()
  ordem_id: string;

  @ApiProperty({
    description: 'Status (ex: agendado, em andamento, concluído, cancelado)',
  })
  @IsString()
  status: string;

  @ApiPropertyOptional({ description: 'Data e hora do registro do status' })
  @IsOptional()
  @IsDateString()
  timestamp?: Date;
}
