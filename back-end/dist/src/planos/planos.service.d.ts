import { PrismaService } from '../prisma/prisma.service';
import { CreatePlanoDto } from './dto/create-plano.dto';
import { UpdatePlanoDto } from './dto/update-plano.dto';
export declare class PlanosService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createPlanoDto: CreatePlanoDto): Promise<{
        id: string;
        nome: string;
        createdAt: Date;
        updatedAt: Date;
        preco: import("@prisma/client/runtime/library").Decimal;
        descricao: string | null;
        banhos_incluidos: number;
    }>;
    findAll(): Promise<({
        pacotes: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            datainicio: Date;
            datafim: Date;
            banhos_utilizados: number;
            id_cliente: string;
            id_plano: string;
        }[];
    } & {
        id: string;
        nome: string;
        createdAt: Date;
        updatedAt: Date;
        preco: import("@prisma/client/runtime/library").Decimal;
        descricao: string | null;
        banhos_incluidos: number;
    })[]>;
    findOne(id: string): Promise<{
        pacotes: ({
            cliente: {
                id: string;
                nome: string;
                email: string | null;
                telefone: string;
                cpf: string | null;
                endereco_logradouro: string;
                numero: string;
                bairro: string | null;
                cidade: string;
                uf: string;
                cep: string;
                latitude: number | null;
                longitude: number | null;
                whatsapp_opt_in: boolean;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            datainicio: Date;
            datafim: Date;
            banhos_utilizados: number;
            id_cliente: string;
            id_plano: string;
        })[];
    } & {
        id: string;
        nome: string;
        createdAt: Date;
        updatedAt: Date;
        preco: import("@prisma/client/runtime/library").Decimal;
        descricao: string | null;
        banhos_incluidos: number;
    }>;
    update(id: string, updatePlanoDto: UpdatePlanoDto): Promise<{
        id: string;
        nome: string;
        createdAt: Date;
        updatedAt: Date;
        preco: import("@prisma/client/runtime/library").Decimal;
        descricao: string | null;
        banhos_incluidos: number;
    }>;
    remove(id: string): Promise<{
        id: string;
        nome: string;
        createdAt: Date;
        updatedAt: Date;
        preco: import("@prisma/client/runtime/library").Decimal;
        descricao: string | null;
        banhos_incluidos: number;
    }>;
}
