import { IsString, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateMensagemDto {
  @ApiProperty({ description: 'ID do cliente destinatário' })
  @IsString()
  cliente_id: string;

  @ApiProperty({ description: 'Canal de envio (ex: whatsapp, sms, email)' })
  @IsString()
  canal: string;

  @ApiPropertyOptional({ description: 'Template utilizado para a mensagem' })
  @IsOptional()
  @IsString()
  template?: string;

  @ApiProperty({ description: 'Conteúdo da mensagem' })
  @IsString()
  conteudo: string;

  @ApiPropertyOptional({ description: 'Status do envio', default: 'pendente' })
  @IsOptional()
  @IsString()
  status?: string;

  @ApiPropertyOptional({
    description: 'ID da mensagem no sistema Meta (WhatsApp)',
  })
  @IsOptional()
  @IsString()
  meta_message_id?: string;

  @ApiPropertyOptional({ description: 'Mensagem de erro, se houver' })
  @IsOptional()
  @IsString()
  erro?: string;
}
