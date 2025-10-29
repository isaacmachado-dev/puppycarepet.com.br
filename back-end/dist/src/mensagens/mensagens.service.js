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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MensagensService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let MensagensService = class MensagensService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createMensagemDto) {
        return this.prisma.mensagens.create({
            data: createMensagemDto,
        });
    }
    async findAll() {
        return this.prisma.mensagens.findMany({
            include: {
                clientes: true,
            },
        });
    }
    async findOne(id) {
        const mensagem = await this.prisma.mensagens.findUnique({
            where: { id },
            include: {
                clientes: true,
            },
        });
        if (!mensagem) {
            throw new common_1.NotFoundException(`Mensagem com ID ${id} não encontrada`);
        }
        return mensagem;
    }
    async update(id, updateMensagemDto) {
        await this.findOne(id);
        return this.prisma.mensagens.update({
            where: { id },
            data: updateMensagemDto,
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.mensagens.delete({
            where: { id },
        });
    }
};
exports.MensagensService = MensagensService;
exports.MensagensService = MensagensService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MensagensService);
//# sourceMappingURL=mensagens.service.js.map