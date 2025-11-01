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
exports.CreateOrdensServicoDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateOrdensServicoDto {
    cliente_id;
    pet_id;
    tipo;
    status;
    data_agendada;
    preco;
    observacoes;
}
exports.CreateOrdensServicoDto = CreateOrdensServicoDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID do cliente', type: String }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateOrdensServicoDto.prototype, "cliente_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID do pet', type: String }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateOrdensServicoDto.prototype, "pet_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tipo de serviço (ex: banho, tosa, banho e tosa)',
        type: String,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateOrdensServicoDto.prototype, "tipo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Status da ordem de serviço',
        default: 'agendado',
        type: String,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateOrdensServicoDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Data e hora agendada para o serviço', type: String }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateOrdensServicoDto.prototype, "data_agendada", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Preço do serviço', type: Number }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateOrdensServicoDto.prototype, "preco", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiPropertyOptional)({ description: 'Observações sobre o serviço', type: String }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateOrdensServicoDto.prototype, "observacoes", void 0);
//# sourceMappingURL=create-ordens-servico.dto.js.map