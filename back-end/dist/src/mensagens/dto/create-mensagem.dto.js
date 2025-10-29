"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMensagemDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateMensagemDto {
    cliente_id;
    canal;
    template;
    conteudo;
    status;
    meta_message_id;
    erro;
}
exports.CreateMensagemDto = CreateMensagemDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID do cliente destinatário' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMensagemDto.prototype, "cliente_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Canal de envio (ex: whatsapp, sms, email)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMensagemDto.prototype, "canal", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Template utilizado para a mensagem' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMensagemDto.prototype, "template", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Conteúdo da mensagem' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMensagemDto.prototype, "conteudo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Status do envio', default: 'pendente' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMensagemDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'ID da mensagem no sistema Meta (WhatsApp)',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMensagemDto.prototype, "meta_message_id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Mensagem de erro, se houver' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMensagemDto.prototype, "erro", void 0);
//# sourceMappingURL=create-mensagem.dto.js.map