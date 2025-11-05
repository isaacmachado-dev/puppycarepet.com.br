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
exports.CreatePacoteDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreatePacoteDto {
    datainicio;
    datafim;
    banhos_utilizados;
    id_cliente;
    id_plano;
}
exports.CreatePacoteDto = CreatePacoteDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Data de início do pacote', example: '2025-11-05T00:00:00Z' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreatePacoteDto.prototype, "datainicio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Data de fim do pacote', example: '2025-12-05T00:00:00Z' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreatePacoteDto.prototype, "datafim", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Número de banhos já utilizados no pacote', default: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreatePacoteDto.prototype, "banhos_utilizados", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID do cliente' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePacoteDto.prototype, "id_cliente", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID do plano contratado' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePacoteDto.prototype, "id_plano", void 0);
//# sourceMappingURL=create-pacote.dto.js.map