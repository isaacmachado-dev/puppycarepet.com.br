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
exports.OrdensServicosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let OrdensServicosService = class OrdensServicosService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createOrdensServicoDto) {
        return this.prisma.ordensServicos.create({
            data: {
                ...createOrdensServicoDto,
                data_agendada: new Date(createOrdensServicoDto.data_agendada),
            },
        });
    }
    async findAll() {
        return this.prisma.ordensServicos.findMany({
            include: {
                clientes: true,
                pet: true,
                paradas: true,
                statuses: true,
            },
        });
    }
    async findOne(id) {
        const ordem = await this.prisma.ordensServicos.findUnique({
            where: { id },
            include: {
                clientes: true,
                pet: true,
                paradas: true,
                statuses: true,
            },
        });
        if (!ordem) {
            throw new common_1.NotFoundException(`Ordem de serviço com ID ${id} não encontrada`);
        }
        return ordem;
    }
    async update(id, updateOrdensServicoDto) {
        await this.findOne(id);
        return this.prisma.ordensServicos.update({
            where: { id },
            data: {
                ...updateOrdensServicoDto,
                data_agendada: updateOrdensServicoDto.data_agendada
                    ? new Date(updateOrdensServicoDto.data_agendada)
                    : undefined,
            },
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.ordensServicos.delete({
            where: { id },
        });
    }
};
exports.OrdensServicosService = OrdensServicosService;
exports.OrdensServicosService = OrdensServicosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OrdensServicosService);
//# sourceMappingURL=ordens-servicos.service.js.map