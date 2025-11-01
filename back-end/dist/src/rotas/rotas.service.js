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
exports.RotasService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let RotasService = class RotasService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createRotaDto) {
        return this.prisma.rotas.create({
            data: {
                ...createRotaDto,
                data: new Date(createRotaDto.data),
            },
        });
    }
    async findAll() {
        return this.prisma.rotas.findMany({
            include: {
                paradas: {
                    include: {
                        ordem: true,
                    },
                },
            },
        });
    }
    async findOne(id) {
        const rota = await this.prisma.rotas.findUnique({
            where: { id },
            include: {
                paradas: {
                    include: {
                        ordem: true,
                    },
                },
            },
        });
        if (!rota) {
            throw new common_1.NotFoundException(`Rota com ID ${id} não encontrada`);
        }
        return rota;
    }
    async update(id, updateRotaDto) {
        await this.findOne(id);
        return this.prisma.rotas.update({
            where: { id },
            data: {
                ...updateRotaDto,
                data: updateRotaDto.data ? new Date(updateRotaDto.data) : undefined,
            },
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.rotas.delete({
            where: { id },
        });
    }
};
exports.RotasService = RotasService;
exports.RotasService = RotasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RotasService);
//# sourceMappingURL=rotas.service.js.map