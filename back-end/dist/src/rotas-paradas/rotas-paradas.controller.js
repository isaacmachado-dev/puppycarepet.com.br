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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RotasParadasController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const rotas_paradas_service_1 = require("./rotas-paradas.service");
const create_rotas_parada_dto_1 = require("./dto/create-rotas-parada.dto");
const update_rotas_parada_dto_1 = require("./dto/update-rotas-parada.dto");
let RotasParadasController = class RotasParadasController {
    rotasParadasService;
    constructor(rotasParadasService) {
        this.rotasParadasService = rotasParadasService;
    }
    create(createRotasParadaDto) {
        return this.rotasParadasService.create(createRotasParadaDto);
    }
    findAll() {
        return this.rotasParadasService.findAll();
    }
    findOne(id) {
        return this.rotasParadasService.findOne(id);
    }
    update(id, updateRotasParadaDto) {
        return this.rotasParadasService.update(id, updateRotasParadaDto);
    }
    remove(id) {
        return this.rotasParadasService.remove(id);
    }
};
exports.RotasParadasController = RotasParadasController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Criar uma nova parada de rota' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Parada de rota criada com sucesso.',
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Dados inválidos.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_rotas_parada_dto_1.CreateRotasParadaDto]),
    __metadata("design:returntype", void 0)
], RotasParadasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todas as paradas de rota' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de paradas de rota retornada com sucesso.',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RotasParadasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar uma parada de rota por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID da parada de rota' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Parada de rota encontrada.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Parada de rota não encontrada.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RotasParadasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar uma parada de rota' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID da parada de rota' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Parada de rota atualizada com sucesso.',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Parada de rota não encontrada.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_rotas_parada_dto_1.UpdateRotasParadaDto]),
    __metadata("design:returntype", void 0)
], RotasParadasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Remover uma parada de rota' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID da parada de rota' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Parada de rota removida com sucesso.',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Parada de rota não encontrada.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RotasParadasController.prototype, "remove", null);
exports.RotasParadasController = RotasParadasController = __decorate([
    (0, swagger_1.ApiTags)('rotas-paradas'),
    (0, common_1.Controller)('rotas-paradas'),
    __metadata("design:paramtypes", [rotas_paradas_service_1.RotasParadasService])
], RotasParadasController);
//# sourceMappingURL=rotas-paradas.controller.js.map