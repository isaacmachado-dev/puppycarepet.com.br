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
exports.PetsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PetsService = class PetsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createPetDto) {
        return this.prisma.pETS.create({
            data: {
                ID_CLIENTE: createPetDto.ID_CLIENTE,
                NOME: createPetDto.NOME,
                RACA: createPetDto.RACA ?? undefined,
                DATA_NASC: createPetDto.DATA_NASC ? new Date(createPetDto.DATA_NASC) : undefined,
            },
        });
    }
    async findAll() {
        return this.prisma.pETS.findMany({
            include: {
                CLIENTE: true,
                ATENDIMENTOS: true,
            },
        });
    }
    async findOne(id) {
        const pet = await this.prisma.pETS.findUnique({
            where: { ID_PET: id },
            include: {
                CLIENTE: true,
                ATENDIMENTOS: true,
            },
        });
        if (!pet) {
            throw new common_1.NotFoundException(`Pet com ID ${id} não encontrado`);
        }
        return pet;
    }
    async update(id, updatePetDto) {
        await this.findOne(id);
        return this.prisma.pETS.update({
            where: { ID_PET: id },
            data: {
                ID_CLIENTE: updatePetDto.ID_CLIENTE ?? undefined,
                NOME: updatePetDto.NOME ?? undefined,
                RACA: updatePetDto.RACA ?? undefined,
                DATA_NASC: updatePetDto.DATA_NASC ? new Date(updatePetDto.DATA_NASC) : undefined,
            },
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.pETS.delete({
            where: { ID_PET: id },
        });
    }
};
exports.PetsService = PetsService;
exports.PetsService = PetsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PetsService);
//# sourceMappingURL=pets.service.js.map