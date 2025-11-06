import { PrismaService } from '../prisma/prisma.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
export declare class ClientesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createClienteDto: CreateClienteDto): Promise<{
        NOME: string;
        ID_CLIENTE: number;
        TELEFONE: string;
        ENDERECO: string;
    }>;
    findAll(): Promise<({
        ATENDIMENTOS: {
            ID_SERVICO: number;
            ID_CLIENTE: number;
            ID_PET: number;
            VALOR_COBRADO: import("@prisma/client/runtime/library").Decimal;
            TIPO: string;
            NOTAS: string | null;
            ID_ATENDIMENTO: number;
        }[];
        PACOTES: {
            ID_SERVICO: number;
            ID_CLIENTE: number;
            QTD_BANHOS: number;
            ID_ASSINATURA: number;
        }[];
        PETS: {
            NOME: string;
            ID_CLIENTE: number;
            ID_PET: number;
            RACA: string | null;
            DATA_NASC: Date | null;
        }[];
    } & {
        NOME: string;
        ID_CLIENTE: number;
        TELEFONE: string;
        ENDERECO: string;
    })[]>;
    findOne(id: number): Promise<{
        ATENDIMENTOS: {
            ID_SERVICO: number;
            ID_CLIENTE: number;
            ID_PET: number;
            VALOR_COBRADO: import("@prisma/client/runtime/library").Decimal;
            TIPO: string;
            NOTAS: string | null;
            ID_ATENDIMENTO: number;
        }[];
        PACOTES: {
            ID_SERVICO: number;
            ID_CLIENTE: number;
            QTD_BANHOS: number;
            ID_ASSINATURA: number;
        }[];
        PETS: {
            NOME: string;
            ID_CLIENTE: number;
            ID_PET: number;
            RACA: string | null;
            DATA_NASC: Date | null;
        }[];
    } & {
        NOME: string;
        ID_CLIENTE: number;
        TELEFONE: string;
        ENDERECO: string;
    }>;
    update(id: number, updateClienteDto: UpdateClienteDto): Promise<{
        NOME: string;
        ID_CLIENTE: number;
        TELEFONE: string;
        ENDERECO: string;
    }>;
    remove(id: number): Promise<{
        NOME: string;
        ID_CLIENTE: number;
        TELEFONE: string;
        ENDERECO: string;
    }>;
}
