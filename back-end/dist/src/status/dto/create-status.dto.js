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
exports.CreateStatusDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateStatusDto {
    ordem_id;
    status;
    timestamp;
}
exports.CreateStatusDto = CreateStatusDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID da ordem de serviço' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStatusDto.prototype, "ordem_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Status (ex: agendado, em andamento, concluído, cancelado)',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStatusDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Data e hora do registro do status' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], CreateStatusDto.prototype, "timestamp", void 0);
//# sourceMappingURL=create-status.dto.js.map