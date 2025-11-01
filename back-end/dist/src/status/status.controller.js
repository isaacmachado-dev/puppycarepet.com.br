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
exports.StatusController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const status_service_1 = require("./status.service");
const create_status_dto_1 = require("./dto/create-status.dto");
const update_status_dto_1 = require("./dto/update-status.dto");
let StatusController = class StatusController {
    statusService;
    constructor(statusService) {
        this.statusService = statusService;
    }
    create(createStatusDto) {
        return this.statusService.create(createStatusDto);
    }
    findAll() {
        return this.statusService.findAll();
    }
    findOne(id) {
        return this.statusService.findOne(id);
    }
    update(id, updateStatusDto) {
        return this.statusService.update(id, updateStatusDto);
    }
    remove(id) {
        return this.statusService.remove(id);
    }
};
exports.StatusController = StatusController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Criar um novo status' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Status criado com sucesso.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Dados inválidos.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_status_dto_1.CreateStatusDto]),
    __metadata("design:returntype", void 0)
], StatusController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todos os status' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de status retornada com sucesso.',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StatusController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar um status por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID do status' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Status encontrado.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Status não encontrado.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StatusController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar um status' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID do status' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Status atualizado com sucesso.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Status não encontrado.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_status_dto_1.UpdateStatusDto]),
    __metadata("design:returntype", void 0)
], StatusController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Remover um status' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID do status' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Status removido com sucesso.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Status não encontrado.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StatusController.prototype, "remove", null);
exports.StatusController = StatusController = __decorate([
    (0, swagger_1.ApiTags)('status'),
    (0, common_1.Controller)('status'),
    __metadata("design:paramtypes", [status_service_1.StatusService])
], StatusController);
//# sourceMappingURL=status.controller.js.map