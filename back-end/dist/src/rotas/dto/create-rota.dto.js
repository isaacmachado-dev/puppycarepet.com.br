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
exports.CreateRotaDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateRotaDto {
    data;
    tipo;
    status;
    motorista;
    kilometragem_prevista;
    tempo_previsto;
}
exports.CreateRotaDto = CreateRotaDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Data da rota' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], CreateRotaDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tipo da rota (ex: entrega, coleta)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRotaDto.prototype, "tipo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Status da rota', default: 'planejada' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRotaDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Nome do motorista responsável' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRotaDto.prototype, "motorista", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Kilometragem prevista em km' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateRotaDto.prototype, "kilometragem_prevista", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tempo previsto em minutos' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateRotaDto.prototype, "tempo_previsto", void 0);
//# sourceMappingURL=create-rota.dto.js.map