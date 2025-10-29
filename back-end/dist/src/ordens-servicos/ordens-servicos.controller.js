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
exports.OrdensServicosController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const ordens_servicos_service_1 = require("./ordens-servicos.service");
const create_ordens_servico_dto_1 = require("./dto/create-ordens-servico.dto");
const update_ordens_servico_dto_1 = require("./dto/update-ordens-servico.dto");
let OrdensServicosController = class OrdensServicosController {
    ordensServicosService;
    constructor(ordensServicosService) {
        this.ordensServicosService = ordensServicosService;
    }
    create(createOrdensServicoDto) {
        return this.ordensServicosService.create(createOrdensServicoDto);
    }
    findAll() {
        return this.ordensServicosService.findAll();
    }
    findOne(id) {
        return this.ordensServicosService.findOne(id);
    }
    update(id, updateOrdensServicoDto) {
        return this.ordensServicosService.update(id, updateOrdensServicoDto);
    }
    remove(id) {
        return this.ordensServicosService.remove(id);
    }
};
exports.OrdensServicosController = OrdensServicosController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Criar uma nova ordem de serviço' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Ordem de serviço criada com sucesso.',
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Dados inválidos.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_ordens_servico_dto_1.CreateOrdensServicoDto]),
    __metadata("design:returntype", void 0)
], OrdensServicosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todas as ordens de serviço' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de ordens de serviço retornada com sucesso.',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OrdensServicosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar uma ordem de serviço por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID da ordem de serviço' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Ordem de serviço encontrada.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Ordem de serviço não encontrada.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrdensServicosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar uma ordem de serviço' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID da ordem de serviço' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Ordem de serviço atualizada com sucesso.',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Ordem de serviço não encontrada.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_ordens_servico_dto_1.UpdateOrdensServicoDto]),
    __metadata("design:returntype", void 0)
], OrdensServicosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Remover uma ordem de serviço' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID da ordem de serviço' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Ordem de serviço removida com sucesso.',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Ordem de serviço não encontrada.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrdensServicosController.prototype, "remove", null);
exports.OrdensServicosController = OrdensServicosController = __decorate([
    (0, swagger_1.ApiTags)('ordens-servicos'),
    (0, common_1.Controller)('ordens-servicos'),
    __metadata("design:paramtypes", [ordens_servicos_service_1.OrdensServicosService])
], OrdensServicosController);
//# sourceMappingURL=ordens-servicos.controller.js.map