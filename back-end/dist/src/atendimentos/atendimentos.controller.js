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
exports.AtendimentosController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const atendimentos_service_1 = require("./atendimentos.service");
const create_atendimento_dto_1 = require("./dto/create-atendimento.dto");
const update_atendimento_dto_1 = require("./dto/update-atendimento.dto");
let AtendimentosController = class AtendimentosController {
    atendimentosService;
    constructor(atendimentosService) {
        this.atendimentosService = atendimentosService;
    }
    create(createAtendimentoDto) {
        return this.atendimentosService.create(createAtendimentoDto);
    }
    findAll() {
        return this.atendimentosService.findAll();
    }
    findOne(id) {
        return this.atendimentosService.findOne(id);
    }
    update(id, updateAtendimentoDto) {
        return this.atendimentosService.update(id, updateAtendimentoDto);
    }
    remove(id) {
        return this.atendimentosService.remove(id);
    }
};
exports.AtendimentosController = AtendimentosController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Criar um novo atendimento' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Atendimento criado com sucesso.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Dados inválidos.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_atendimento_dto_1.CreateAtendimentoDto]),
    __metadata("design:returntype", void 0)
], AtendimentosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todos os atendimentos' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de atendimentos retornada com sucesso.',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AtendimentosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar um atendimento por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID do atendimento' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Atendimento encontrado.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Atendimento não encontrado.' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AtendimentosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar um atendimento' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID do atendimento' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Atendimento atualizado com sucesso.',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Atendimento não encontrado.' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_atendimento_dto_1.UpdateAtendimentoDto]),
    __metadata("design:returntype", void 0)
], AtendimentosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Remover um atendimento' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID do atendimento' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Atendimento removido com sucesso.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Atendimento não encontrado.' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AtendimentosController.prototype, "remove", null);
exports.AtendimentosController = AtendimentosController = __decorate([
    (0, swagger_1.ApiTags)('atendimentos'),
    (0, common_1.Controller)('atendimentos'),
    __metadata("design:paramtypes", [atendimentos_service_1.AtendimentosService])
], AtendimentosController);
//# sourceMappingURL=atendimentos.controller.js.map