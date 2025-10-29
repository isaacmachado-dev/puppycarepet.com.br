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
exports.CreateClienteDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateClienteDto {
    nome;
    email;
    telefone;
    cpf;
    endereco_logradouro;
    numero;
    bairro;
    cidade;
    uf;
    cep;
    latitude;
    longitude;
    whatsapp_opt_in;
}
exports.CreateClienteDto = CreateClienteDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nome do cliente' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateClienteDto.prototype, "nome", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'E-mail do cliente' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateClienteDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Telefone do cliente' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateClienteDto.prototype, "telefone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'CPF do cliente' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateClienteDto.prototype, "cpf", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Logradouro do endereço' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateClienteDto.prototype, "endereco_logradouro", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Número do endereço' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateClienteDto.prototype, "numero", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Bairro' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateClienteDto.prototype, "bairro", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Cidade' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateClienteDto.prototype, "cidade", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Estado (UF)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateClienteDto.prototype, "uf", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'CEP' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateClienteDto.prototype, "cep", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Latitude do endereço' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateClienteDto.prototype, "latitude", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Longitude do endereço' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateClienteDto.prototype, "longitude", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Cliente optou por receber mensagens no WhatsApp',
        default: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateClienteDto.prototype, "whatsapp_opt_in", void 0);
//# sourceMappingURL=create-cliente.dto.js.map