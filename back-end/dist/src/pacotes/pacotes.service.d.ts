import { PrismaService } from '../prisma/prisma.service';
import { CreatePacoteDto } from './dto/create-pacote.dto';
import { UpdatePacoteDto } from './dto/update-pacote.dto';
export declare class PacotesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createPacoteDto: CreatePacoteDto): Promise<{
        ID_SERVICO: number;
        ID_CLIENTE: number;
        QTD_BANHOS: number;
        ID_ASSINATURA: number;
    }>;
    findAll(): Promise<({
        CLIENTE: {
            NOME: string;
            ID_CLIENTE: number;
            TELEFONE: string;
            ENDERECO: string;
        };
        SERVICO: {
            ID_SERVICO: number;
            NOME: string;
            DESCRICAO: string | null;
            VALOR: import("@prisma/client/runtime/library").Decimal;
        };
    } & {
        ID_SERVICO: number;
        ID_CLIENTE: number;
        QTD_BANHOS: number;
        ID_ASSINATURA: number;
    })[]>;
    findOne(id: number): Promise<{
        CLIENTE: {
            NOME: string;
            ID_CLIENTE: number;
            TELEFONE: string;
            ENDERECO: string;
        };
        SERVICO: {
            ID_SERVICO: number;
            NOME: string;
            DESCRICAO: string | null;
            VALOR: import("@prisma/client/runtime/library").Decimal;
        };
    } & {
        ID_SERVICO: number;
        ID_CLIENTE: number;
        QTD_BANHOS: number;
        ID_ASSINATURA: number;
    }>;
    update(id: number, updatePacoteDto: UpdatePacoteDto): Promise<{
        ID_SERVICO: number;
        ID_CLIENTE: number;
        QTD_BANHOS: number;
        ID_ASSINATURA: number;
    }>;
    remove(id: number): Promise<{
        ID_SERVICO: number;
        ID_CLIENTE: number;
        QTD_BANHOS: number;
        ID_ASSINATURA: number;
    }>;
}
