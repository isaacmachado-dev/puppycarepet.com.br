"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const path = __importStar(require("path"));
const fs = __importStar(require("fs-extra"));
const uuid_1 = require("uuid");
const swagger_1 = require("@nestjs/swagger");
const usuarios_service_1 = require("./usuarios.service");
const platform_express_2 = require("@nestjs/platform-express");
const create_usuario_dto_1 = require("./dto/create-usuario.dto");
let UsuariosController = class UsuariosController {
    usuariosService;
    constructor(usuariosService) {
        this.usuariosService = usuariosService;
    }
    async create(nome, email, senha, tiposRaw, file) {
        try {
            let tipos = [];
            if (tiposRaw) {
                try {
                    tipos = JSON.parse(tiposRaw);
                    if (!Array.isArray(tipos))
                        tipos = [tiposRaw];
                }
                catch {
                    tipos = [tiposRaw];
                }
            }
            const existing = await this.usuariosService.findByEmail(email);
            if (existing) {
                throw new common_1.HttpException('Email já cadastrado', common_1.HttpStatus.CONFLICT);
            }
            let fotoUrl = null;
            if (file) {
                console.log('📸 Upload:', file.originalname, file.size);
                const fileName = `${(0, uuid_1.v4)()}.${file.originalname?.split('.').pop() || 'jpg'}`;
                const uploadPath = path.join(process.cwd(), 'uploads', fileName);
                await fs.ensureDir(path.dirname(uploadPath));
                await fs.writeFile(uploadPath, file.buffer);
                fotoUrl = `http://localhost:4000/uploads/${fileName}`;
                console.log('✅ Foto salva:', fotoUrl);
            }
            const usuario = await this.usuariosService.create({
                NOME: nome,
                EMAIL: email,
                SENHA: senha,
                TIPOS: tipos,
                FOTO: fotoUrl,
                TELEFONE: '',
                DESCRICAO: '',
            });
            return usuario;
        }
        catch (error) {
            console.error('Erro create:', error);
            throw new common_1.HttpException('Erro interno', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async login(body) {
        return this.usuariosService.login(body.email, body.senha);
    }
    async findAll() {
        return this.usuariosService.findAll();
    }
    findOne(id) {
        return this.usuariosService.findOne(id);
    }
    async update(id, nome, email, tiposRaw) {
        console.log('PATCH fields:', { nome, email, tiposRaw });
        let tipos = tiposRaw ? JSON.parse(tiposRaw) : [];
        return this.usuariosService.update(id, { NOME: nome, EMAIL: email, TIPOS: tipos });
    }
    remove(id) {
        return this.usuariosService.remove(id);
    }
};
exports.UsuariosController = UsuariosController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Criar usuário' }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('FOTO')),
    __param(0, (0, common_1.Body)('NOME')),
    __param(1, (0, common_1.Body)('EMAIL')),
    __param(2, (0, common_1.Body)('SENHA')),
    __param(3, (0, common_1.Body)('TIPOS')),
    __param(4, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, Object]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('login'),
    (0, swagger_1.ApiOperation)({ summary: 'Autenticar usuário' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_usuario_dto_1.LoginDto]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "login", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todos os usuários' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obter usuário por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID_USUARIO' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsuariosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, common_1.UseInterceptors)((0, platform_express_2.NoFilesInterceptor)()),
    (0, swagger_1.ApiParam)({ name: 'id' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)('NOME')),
    __param(2, (0, common_1.Body)('EMAIL')),
    __param(3, (0, common_1.Body)('TIPOS')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, String]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Deletar usuário' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID_USUARIO' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsuariosController.prototype, "remove", null);
exports.UsuariosController = UsuariosController = __decorate([
    (0, swagger_1.ApiTags)('usuarios'),
    (0, common_1.Controller)('usuarios'),
    __metadata("design:paramtypes", [usuarios_service_1.UsuariosService])
], UsuariosController);
