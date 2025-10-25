"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuncionariosService = void 0;
const common_1 = require("@nestjs/common");
let FuncionariosService = class FuncionariosService {
    funcionarios = [
        { id: 1, name: 'Joel Miller', image: '/admin/funcionarios/joel.webp', position: 'administradores' },
        { id: 2, name: 'Ellie Williams', image: '/admin/funcionarios/ellie.jpg', position: 'funcionarios' },
        { id: 3, name: 'Rick Grimes', image: '/admin/funcionarios/rick.webp', position: 'condutor' },
        { id: 4, name: 'Morty', image: '/admin/funcionarios/morty.webp', position: 'condutor' },
    ];
    findAll() {
        return this.funcionarios;
    }
};
exports.FuncionariosService = FuncionariosService;
exports.FuncionariosService = FuncionariosService = __decorate([
    (0, common_1.Injectable)()
], FuncionariosService);
//# sourceMappingURL=funcionarios.service.js.map