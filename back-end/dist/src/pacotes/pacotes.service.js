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
exports.PacotesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PacotesService = class PacotesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createPacoteDto) {
        return this.prisma.pACOTES.create({
            data: {
                ID_CLIENTE: createPacoteDto.ID_CLIENTE,
                ID_SERVICO: createPacoteDto.ID_SERVICO,
                QTD_BANHOS: createPacoteDto.QTD_BANHOS ?? 0,
            },
        });
    }
    async findAll() {
        return this.prisma.pACOTES.findMany({
            include: {
                CLIENTE: true,
                SERVICO: true,
            },
        });
    }
    async findOne(id) {
        const pacote = await this.prisma.pACOTES.findUnique({
            where: { ID_ASSINATURA: id },
            include: {
                CLIENTE: true,
                SERVICO: true,
            },
        });
        if (!pacote) {
            throw new common_1.NotFoundException(`Pacote com ID ${id} não encontrado`);
        }
        return pacote;
    }
    async update(id, updatePacoteDto) {
        await this.findOne(id);
        return this.prisma.pACOTES.update({
            where: { ID_ASSINATURA: id },
            data: {
                ID_CLIENTE: updatePacoteDto.ID_CLIENTE ?? undefined,
                ID_SERVICO: updatePacoteDto.ID_SERVICO ?? undefined,
                QTD_BANHOS: updatePacoteDto.QTD_BANHOS ?? undefined,
            },
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.pACOTES.delete({
            where: { ID_ASSINATURA: id },
        });
    }
};
exports.PacotesService = PacotesService;
exports.PacotesService = PacotesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PacotesService);
//# sourceMappingURL=pacotes.service.js.map