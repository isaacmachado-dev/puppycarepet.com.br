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
exports.ServicosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ServicosService = class ServicosService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
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
};
exports.ServicosService = ServicosService;
exports.ServicosService = ServicosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ServicosService);
//# sourceMappingURL=servicos.service.js.map