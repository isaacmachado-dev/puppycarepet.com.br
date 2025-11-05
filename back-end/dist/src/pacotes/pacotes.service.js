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
        return this.prisma.pacotes.create({
            data: {
                ...createPacoteDto,
                datainicio: new Date(createPacoteDto.datainicio),
                datafim: new Date(createPacoteDto.datafim),
            },
        });
    }
    async findAll() {
        return this.prisma.pacotes.findMany({
            include: {
                cliente: true,
                plano: true,
            },
        });
    }
    async findOne(id) {
        const pacote = await this.prisma.pacotes.findUnique({
            where: { id },
            include: {
                cliente: true,
                plano: true,
            },
        });
        if (!pacote) {
            throw new common_1.NotFoundException(`Pacote com ID ${id} não encontrado`);
        }
        return pacote;
    }
    async update(id, updatePacoteDto) {
        await this.findOne(id);
        return this.prisma.pacotes.update({
            where: { id },
            data: {
                ...updatePacoteDto,
                datainicio: updatePacoteDto.datainicio
                    ? new Date(updatePacoteDto.datainicio)
                    : undefined,
                datafim: updatePacoteDto.datafim
                    ? new Date(updatePacoteDto.datafim)
                    : undefined,
            },
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.pacotes.delete({
            where: { id },
        });
    }
};
exports.PacotesService = PacotesService;
exports.PacotesService = PacotesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PacotesService);
//# sourceMappingURL=pacotes.service.js.map