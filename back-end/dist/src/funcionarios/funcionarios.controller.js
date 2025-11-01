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
exports.FuncionariosController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const funcionarios_service_1 = require("./funcionarios.service");
const create_funcionario_dto_1 = require("./dto/create-funcionario.dto");
const update_funcionario_dto_1 = require("./dto/update-funcionario.dto");
let FuncionariosController = class FuncionariosController {
    funcionariosService;
    constructor(funcionariosService) {
        this.funcionariosService = funcionariosService;
    }
    create(createFuncionarioDto) {
        return this.funcionariosService.create(createFuncionarioDto);
    }
    findAll() {
        return this.funcionariosService.findAll();
    }
    findOne(id) {
        return this.funcionariosService.findOne(id);
    }
    update(id, updateFuncionarioDto) {
        return this.funcionariosService.update(id, updateFuncionarioDto);
    }
    remove(id) {
        return this.funcionariosService.remove(id);
    }
};
exports.FuncionariosController = FuncionariosController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Criar um novo funcionário' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Funcionário criado com sucesso.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Dados inválidos.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_funcionario_dto_1.CreateFuncionarioDto]),
    __metadata("design:returntype", void 0)
], FuncionariosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todos os funcionários' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de funcionários retornada com sucesso.',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FuncionariosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar um funcionário por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID do funcionário' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Funcionário encontrado.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Funcionário não encontrado.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FuncionariosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar um funcionário' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID do funcionário' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Funcionário atualizado com sucesso.',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Funcionário não encontrado.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_funcionario_dto_1.UpdateFuncionarioDto]),
    __metadata("design:returntype", void 0)
], FuncionariosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Remover um funcionário' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID do funcionário' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Funcionário removido com sucesso.',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Funcionário não encontrado.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FuncionariosController.prototype, "remove", null);
exports.FuncionariosController = FuncionariosController = __decorate([
    (0, swagger_1.ApiTags)('funcionarios'),
    (0, common_1.Controller)('funcionarios'),
    __metadata("design:paramtypes", [funcionarios_service_1.FuncionariosService])
], FuncionariosController);
//# sourceMappingURL=funcionarios.controller.js.map