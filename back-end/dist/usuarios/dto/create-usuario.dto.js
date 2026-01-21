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
exports.CreateUsuarioDto = exports.LoginDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class LoginDto {
    email;
    senha;
}
exports.LoginDto = LoginDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'admin@puppycarepet.com.br', description: 'E-mail do usuário. Corresponde ao campo EMAIL no banco.' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LoginDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'admin123', description: 'Senha do usuário. Corresponde ao campo SENHA_HASH (após hash) no banco.' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LoginDto.prototype, "senha", void 0);
class CreateUsuarioDto {
    NOME;
    EMAIL;
    TELEFONE;
    DESCRICAO;
    FOTO;
    SENHA;
    TIPOS;
}
exports.CreateUsuarioDto = CreateUsuarioDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nome do usuário', example: 'User' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUsuarioDto.prototype, "NOME", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'E-mail do usuário',
        example: 'user@puppycarepet.com.br',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUsuarioDto.prototype, "EMAIL", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Telefone do usuário', example: '11988887777' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUsuarioDto.prototype, "TELEFONE", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Descrição/cargo do usuário' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUsuarioDto.prototype, "DESCRICAO", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'URL (absoluta) da foto do usuário' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Object)
], CreateUsuarioDto.prototype, "FOTO", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Senha (texto puro, será hasheada)',
        example: 'minhasenha123',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(6),
    __metadata("design:type", String)
], CreateUsuarioDto.prototype, "SENHA", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Tipos/papéis do usuário',
        example: ['administrador'],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CreateUsuarioDto.prototype, "TIPOS", void 0);
