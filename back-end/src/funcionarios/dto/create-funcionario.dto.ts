import { IsString, IsEmail, IsBoolean } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateFuncionarioDto {
  @ApiProperty({ description: 'Nome do funcionário' })
  @IsString()
  nome: string;

  @ApiProperty({ description: 'E-mail do funcionário' })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Telefone do funcionário' })
  @IsString()
  telefone: string;

  @ApiProperty({ description: 'Cargo do funcionário' })
  @IsString()
  cargo: string;

  @ApiPropertyOptional({ description: 'Se o funcionário está ativo', default: true })
  @IsBoolean()
  ativo?: boolean;
}
