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
const library_1 = require("@prisma/client/runtime/library");
const bcrypt = __importStar(require("bcryptjs"));
const jwt = __importStar(require("jsonwebtoken"));
let UsuariosService = class UsuariosService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async login(email, senha) {
        const usuario = await this.prisma.uSUARIOS.findUnique({ where: { EMAIL: email } });
        if (!usuario)
            throw new common_1.NotFoundException('Usuário não encontrado');
        const senhaValida = await bcrypt.compare(senha, usuario.SENHA_HASH);
        if (!senhaValida)
            throw new common_1.NotFoundException('Senha inválida');
        const token = jwt.sign({ id: usuario.ID_USUARIO, nome: usuario.NOME, email: usuario.EMAIL }, process.env.JWT_SECRET || 'secret', { expiresIn: '1d' });
        return { token };
    }
    async create(createServicoDto) {
        return this.prisma.sERVICOS.create({
            data: createServicoDto,
        });
    }
    async findAll() {
        return this.prisma.sERVICOS.findMany({
            include: {
                ATENDIMENTOS: true,
                PACOTES: true,
            },
        });
    }
    async findOne(id) {
        const servico = await this.prisma.sERVICOS.findUnique({
            where: { ID_SERVICO: id },
            include: {
                ATENDIMENTOS: true,
                PACOTES: true,
            },
        });
        if (!servico) {
            throw new common_1.NotFoundException(`Serviço com ID ${id} não encontrado`);
        }
        return servico;
    }
    async update(id, updateServicoDto) {
        await this.findOne(id);
        return this.prisma.sERVICOS.update({
            where: { ID_SERVICO: id },
            data: updateServicoDto,
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.sERVICOS.delete({
            where: { ID_SERVICO: id },
        });
    }
    async getChanges(since) {
        const sinceDate = since ? new Date(since) : new Date(0);
        return this.prisma.sERVICOS.findMany({
            where: {
                OR: [
                    { UPDATED_AT: { gt: sinceDate } },
                    { DELETED_AT: { gte: sinceDate } },
                ],
            },
            orderBy: { UPDATED_AT: 'asc' },
        });
    }
    async batchUpsert(body) {
        const results = [];
        for (const item of body.items) {
            const res = await this.applyOne(item);
            results.push(res);
        }
        return { results };
    }
    async applyOne(item) {
        const { PUBLIC_ID, UPDATED_AT, VERSION, DELETED_AT, NOME, DESCRICAO, VALOR } = item;
        if (!PUBLIC_ID) {
            const created = await this.prisma.sERVICOS.create({
                data: {
                    NOME: NOME ?? 'Serviço',
                    DESCRICAO: DESCRICAO ?? null,
                    VALOR: VALOR ? new library_1.Decimal(VALOR.toString()) : new library_1.Decimal(0),
                    DELETED_AT: DELETED_AT ? new Date(DELETED_AT) : null,
                },
            });
            return { publicId: created.PUBLIC_ID, status: 'applied' };
        }
        const existing = await this.prisma.sERVICOS.findUnique({ where: { PUBLIC_ID } });
        if (!existing) {
            const created = await this.prisma.sERVICOS.create({
                data: {
                    PUBLIC_ID,
                    NOME: NOME ?? 'Serviço',
                    DESCRICAO: DESCRICAO ?? null,
                    VALOR: VALOR ? new library_1.Decimal(VALOR.toString()) : new library_1.Decimal(0),
                    DELETED_AT: DELETED_AT ? new Date(DELETED_AT) : null,
                },
            });
            return { publicId: created.PUBLIC_ID, status: 'applied' };
        }
        const incomingUpdated = UPDATED_AT ? new Date(UPDATED_AT) : undefined;
        if (incomingUpdated && incomingUpdated > existing.UPDATED_AT) {
            const updated = await this.prisma.sERVICOS.update({
                where: { PUBLIC_ID },
                data: {
                    NOME: NOME ?? existing.NOME,
                    DESCRICAO: typeof DESCRICAO !== 'undefined' ? DESCRICAO : existing.DESCRICAO,
                    VALOR: typeof VALOR !== 'undefined' ? new library_1.Decimal(VALOR.toString()) : existing.VALOR,
                    DELETED_AT: typeof DELETED_AT !== 'undefined' ? (DELETED_AT ? new Date(DELETED_AT) : null) : existing.DELETED_AT,
                    VERSION: { increment: 1 },
                },
            });
            return { publicId: updated.PUBLIC_ID, status: 'applied' };
        }
        if (!incomingUpdated && (NOME !== undefined || typeof DESCRICAO !== 'undefined' || typeof VALOR !== 'undefined' || typeof DELETED_AT !== 'undefined')) {
            const updated = await this.prisma.sERVICOS.update({
                where: { PUBLIC_ID },
                data: {
                    NOME: NOME ?? existing.NOME,
                    DESCRICAO: typeof DESCRICAO !== 'undefined' ? DESCRICAO : existing.DESCRICAO,
                    VALOR: typeof VALOR !== 'undefined' ? new library_1.Decimal(VALOR.toString()) : existing.VALOR,
                    DELETED_AT: typeof DELETED_AT !== 'undefined' ? (DELETED_AT ? new Date(DELETED_AT) : null) : existing.DELETED_AT,
                    VERSION: { increment: 1 },
                },
            });
            return { publicId: existing.PUBLIC_ID, status: 'applied' };
        }
        return { publicId: existing.PUBLIC_ID, status: 'conflict', server: existing };
    }
    async softDeleteByPublicId(publicId) {
        const existing = await this.prisma.sERVICOS.findUnique({ where: { PUBLIC_ID: publicId } });
        if (!existing)
            throw new common_1.NotFoundException(`Serviço com PUBLIC_ID ${publicId} não encontrado`);
        return this.prisma.sERVICOS.update({
            where: { PUBLIC_ID: publicId },
            data: { DELETED_AT: new Date(), VERSION: { increment: 1 } },
        });
    }
};
exports.UsuariosService = UsuariosService;
exports.UsuariosService = UsuariosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsuariosService);
