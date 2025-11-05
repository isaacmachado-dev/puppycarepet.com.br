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
exports.PlanosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PlanosService = class PlanosService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createPlanoDto) {
        return this.prisma.planos.create({
            data: createPlanoDto,
        });
    }
    async findAll() {
        return this.prisma.planos.findMany({
            include: {
                pacotes: true,
            },
        });
    }
    async findOne(id) {
        const plano = await this.prisma.planos.findUnique({
            where: { id },
            include: {
                pacotes: {
                    include: {
                        cliente: true,
                    },
                },
            },
        });
        if (!plano) {
            throw new common_1.NotFoundException(`Plano com ID ${id} não encontrado`);
        }
        return plano;
    }
    async update(id, updatePlanoDto) {
        await this.findOne(id);
        return this.prisma.planos.update({
            where: { id },
            data: updatePlanoDto,
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.planos.delete({
            where: { id },
        });
    }
};
exports.PlanosService = PlanosService;
exports.PlanosService = PlanosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PlanosService);
//# sourceMappingURL=planos.service.js.map