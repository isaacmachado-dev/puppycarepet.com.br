"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const prisma_module_1 = require("./prisma/prisma.module");
const funcionarios_module_1 = require("./funcionarios/funcionarios.module");
const clientes_module_1 = require("./clientes/clientes.module");
const pets_module_1 = require("./pets/pets.module");
const ordens_servicos_module_1 = require("./ordens-servicos/ordens-servicos.module");
const rotas_module_1 = require("./rotas/rotas.module");
const rotas_paradas_module_1 = require("./rotas-paradas/rotas-paradas.module");
const mensagens_module_1 = require("./mensagens/mensagens.module");
const status_module_1 = require("./status/status.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, funcionarios_module_1.FuncionariosModule, clientes_module_1.ClientesModule, pets_module_1.PetsModule, ordens_servicos_module_1.OrdensServicosModule, rotas_module_1.RotasModule, rotas_paradas_module_1.RotasParadasModule, mensagens_module_1.MensagensModule, status_module_1.StatusModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map