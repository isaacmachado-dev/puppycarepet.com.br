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
exports.AtendimentoImagensService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let AtendimentoImagensService = class AtendimentoImagensService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createAtendimentoImagemDto) {
        return this.prisma.aTENDIMENTO_IMAGENS.create({
            data: createAtendimentoImagemDto,
        });
    }
    async findAll() {
        return this.prisma.aTENDIMENTO_IMAGENS.findMany({
            include: {
                ATENDIMENTO: true,
            },
        });
    }
    async findOne(id) {
        const imagem = await this.prisma.aTENDIMENTO_IMAGENS.findUnique({
            where: { ID_IMAGEM: id },
            include: {
                ATENDIMENTO: true,
            },
        });
        if (!imagem) {
            throw new common_1.NotFoundException(`Imagem com ID ${id} não encontrada`);
        }
        return imagem;
    }
    async update(id, updateAtendimentoImagemDto) {
        await this.findOne(id);
        return this.prisma.aTENDIMENTO_IMAGENS.update({
            where: { ID_IMAGEM: id },
            data: updateAtendimentoImagemDto,
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.aTENDIMENTO_IMAGENS.delete({
            where: { ID_IMAGEM: id },
        });
    }
};
exports.AtendimentoImagensService = AtendimentoImagensService;
exports.AtendimentoImagensService = AtendimentoImagensService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AtendimentoImagensService);
//# sourceMappingURL=atendimento-imagens.service.js.map