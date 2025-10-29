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
exports.CreateFuncionarioDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateFuncionarioDto {
    nome;
    email;
    telefone;
    cargo;
    ativo;
}
exports.CreateFuncionarioDto = CreateFuncionarioDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nome do funcionário' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateFuncionarioDto.prototype, "nome", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'E-mail do funcionário' }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateFuncionarioDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Telefone do funcionário' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateFuncionarioDto.prototype, "telefone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Cargo do funcionário' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateFuncionarioDto.prototype, "cargo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Se o funcionário está ativo', default: true }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateFuncionarioDto.prototype, "ativo", void 0);
//# sourceMappingURL=create-funcionario.dto.js.map