"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RotasModule = void 0;
const common_1 = require("@nestjs/common");
const rotas_controller_1 = require("./rotas.controller");
const rotas_service_1 = require("./rotas.service");
let RotasModule = class RotasModule {
};
exports.RotasModule = RotasModule;
exports.RotasModule = RotasModule = __decorate([
    (0, common_1.Module)({
        controllers: [rotas_controller_1.RotasController],
        providers: [rotas_service_1.RotasService]
    })
], RotasModule);
//# sourceMappingURL=rotas.module.js.map