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
exports.CreateRotasParadaDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateRotasParadaDto {
    rota_id;
    ordem_id;
    sequencia;
    latitude;
    longitude;
    status;
}
exports.CreateRotasParadaDto = CreateRotasParadaDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID da rota' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRotasParadaDto.prototype, "rota_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID da ordem de serviço' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRotasParadaDto.prototype, "ordem_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Sequência da parada na rota' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateRotasParadaDto.prototype, "sequencia", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Latitude do local' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateRotasParadaDto.prototype, "latitude", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Longitude do local' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateRotasParadaDto.prototype, "longitude", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Status da parada', default: 'pendente' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRotasParadaDto.prototype, "status", void 0);
//# sourceMappingURL=create-rotas-parada.dto.js.map