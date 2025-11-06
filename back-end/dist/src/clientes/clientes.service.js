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
exports.ClientesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ClientesService = class ClientesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createClienteDto) {
        return this.prisma.cLIENTES.create({
            data: createClienteDto,
        });
    }
    async findAll() {
        return this.prisma.cLIENTES.findMany({
            include: {
                PETS: true,
                PACOTES: true,
                ATENDIMENTOS: true,
            },
        });
    }
    async findOne(id) {
        const cliente = await this.prisma.cLIENTES.findUnique({
            where: { ID_CLIENTE: id },
            include: {
                PETS: true,
                PACOTES: true,
                ATENDIMENTOS: true,
            },
        });
        if (!cliente) {
            throw new common_1.NotFoundException(`Cliente com ID ${id} não encontrado`);
        }
        return cliente;
    }
    async update(id, updateClienteDto) {
        await this.findOne(id);
        return this.prisma.cLIENTES.update({
            where: { ID_CLIENTE: id },
            data: updateClienteDto,
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.cLIENTES.delete({
            where: { ID_CLIENTE: id },
        });
    }
};
exports.ClientesService = ClientesService;
exports.ClientesService = ClientesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClientesService);
//# sourceMappingURL=clientes.service.js.map