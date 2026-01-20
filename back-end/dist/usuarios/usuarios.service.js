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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = __importStar(require("bcryptjs"));
const jwt = __importStar(require("jsonwebtoken"));
const path = __importStar(require("path"));
const crypto_1 = require("crypto");
const fs = __importStar(require("fs/promises"));
function decodeMaybeLatin1(value) {
    if (!value)
        return value;
    try {
        const buf = Buffer.from(value, 'binary');
        return buf.toString('utf8');
    }
    catch {
        return value;
    }
}
let UsuariosService = class UsuariosService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        const senhaHash = await bcrypt.hash(dto.SENHA, 10);
        let fotoFilename = null;
        if (dto.FOTO) {
            fotoFilename = await this.savePhoto(dto.FOTO);
        }
        const nome = decodeMaybeLatin1(dto.NOME) ?? dto.NOME;
        const descricao = decodeMaybeLatin1(dto.DESCRICAO ?? undefined) ?? dto.DESCRICAO;
        return this.prisma.uSUARIOS.create({
            data: {
                NOME: nome,
                EMAIL: dto.EMAIL,
                TELEFONE: dto.TELEFONE,
                DESCRICAO: descricao,
                FOTO: fotoFilename,
                SENHA_HASH: senhaHash,
                TIPOS: dto.TIPOS ?? [],
            },
        });
    }
    async login(email, senha) {
        const usuario = await this.prisma.uSUARIOS.findUnique({
            where: { EMAIL: email },
        });
        if (!usuario)
            throw new common_1.NotFoundException('Usuário não encontrado');
        const senhaValida = await bcrypt.compare(senha, usuario.SENHA_HASH);
        if (!senhaValida)
            throw new common_1.NotFoundException('Senha inválida');
        const token = jwt.sign({
            id: usuario.ID_USUARIO,
            nome: usuario.NOME,
            email: usuario.EMAIL
        }, process.env.JWT_SECRET || 'secret', { expiresIn: '1d' });
        return { token };
    }
    async findAll() {
        const usuarios = await this.prisma.uSUARIOS.findMany();
        return usuarios.map(u => ({
            ...u,
            FOTO_URL: u.FOTO ? `/uploads/usuarios/${u.FOTO}` : null
        }));
    }
    async findOne(id) {
        const usuario = await this.prisma.uSUARIOS.findUnique({
            where: { ID_USUARIO: id },
        });
        if (!usuario) {
            throw new common_1.NotFoundException(`Usuário com ID ${id} não encontrado`);
        }
        return usuario;
    }
    async update(id, dto) {
        await this.findOne(id);
        return this.prisma.uSUARIOS.update({
            where: { ID_USUARIO: id },
            data: {
                NOME: dto.NOME,
                EMAIL: dto.EMAIL,
                DESCRICAO: dto.DESCRICAO,
                TIPOS: dto.TIPOS,
            },
        });
    }
    async updateFoto(id, foto) {
        await this.findOne(id);
        return this.prisma.uSUARIOS.update({
            where: { ID_USUARIO: id },
            data: { FOTO: foto },
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.uSUARIOS.delete({
            where: { ID_USUARIO: id },
        });
    }
    async savePhoto(base64Foto) {
        try {
            if (!base64Foto || !base64Foto.startsWith('data:image/'))
                return null;
            const uploadDir = path.join(process.cwd(), '..', 'front-end', 'public', 'usuarios');
            await fs.mkdir(uploadDir, { recursive: true });
            const extension = base64Foto.split(';')[0].split('/')[1];
            const base64Data = base64Foto.split(',')[1];
            const filename = `usuario-${(0, crypto_1.randomUUID)()}.${extension}`;
            const buffer = Buffer.from(base64Data, 'base64');
            const filepath = path.join(uploadDir, filename);
            await fs.writeFile(filepath, buffer);
            console.log(`✅ Foto salva: ${filepath}`);
            return filename;
        }
        catch (error) {
            console.error('Erro ao salvar foto:', error);
            return null;
        }
    }
};
exports.UsuariosService = UsuariosService;
exports.UsuariosService = UsuariosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsuariosService);
