import {
  IsString,
  IsEmail,
  IsOptional,
  IsBoolean,
  IsNumber,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateClienteDto {
  @ApiProperty({ description: 'Nome do cliente' })
  @IsString()
  nome: string;

  @ApiPropertyOptional({ description: 'E-mail do cliente' })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiProperty({ description: 'Telefone do cliente' })
  @IsString()
  telefone: string;

  @ApiPropertyOptional({ description: 'CPF do cliente' })
  @IsOptional()
  @IsString()
  cpf?: string;

  @ApiProperty({ description: 'Logradouro do endereço' })
  @IsString()
  endereco_logradouro: string;

  @ApiProperty({ description: 'Número do endereço' })
  @IsString()
  numero: string;

  @ApiPropertyOptional({ description: 'Bairro' })
  @IsOptional()
  @IsString()
  bairro?: string;

  @ApiProperty({ description: 'Cidade' })
  @IsString()
  cidade: string;

  @ApiProperty({ description: 'Estado (UF)' })
  @IsString()
  uf: string;

  @ApiProperty({ description: 'CEP' })
  @IsString()
  cep: string;

  @ApiPropertyOptional({ description: 'Latitude do endereço' })
  @IsOptional()
  @IsNumber()
  latitude?: number;

  @ApiPropertyOptional({ description: 'Longitude do endereço' })
  @IsOptional()
  @IsNumber()
  longitude?: number;

  @ApiPropertyOptional({
    description: 'Cliente optou por receber mensagens no WhatsApp',
    default: false,
  })
  @IsOptional()
  @IsBoolean()
  whatsapp_opt_in?: boolean;
}
