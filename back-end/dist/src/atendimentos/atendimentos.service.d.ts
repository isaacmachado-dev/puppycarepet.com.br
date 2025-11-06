import { PrismaService } from '../prisma/prisma.service';
import { CreateAtendimentoDto } from './dto/create-atendimento.dto';
import { UpdateAtendimentoDto } from './dto/update-atendimento.dto';
export declare class AtendimentosService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createAtendimentoDto: CreateAtendimentoDto): Promise<{
        ID_SERVICO: number;
        ID_CLIENTE: number;
        ID_PET: number;
        VALOR_COBRADO: import("@prisma/client/runtime/library").Decimal;
        TIPO: string;
        NOTAS: string | null;
        ID_ATENDIMENTO: number;
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
        PET: {
            NOME: string;
            ID_CLIENTE: number;
            ID_PET: number;
            RACA: string | null;
            DATA_NASC: Date | null;
        };
        IMAGENS: {
            ID_ATENDIMENTO: number;
            CAMINHO_IMAGEM: string;
            DATA_UPLOAD: Date;
            ID_IMAGEM: number;
        }[];
    } & {
        ID_SERVICO: number;
        ID_CLIENTE: number;
        ID_PET: number;
        VALOR_COBRADO: import("@prisma/client/runtime/library").Decimal;
        TIPO: string;
        NOTAS: string | null;
        ID_ATENDIMENTO: number;
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
        PET: {
            NOME: string;
            ID_CLIENTE: number;
            ID_PET: number;
            RACA: string | null;
            DATA_NASC: Date | null;
        };
        IMAGENS: {
            ID_ATENDIMENTO: number;
            CAMINHO_IMAGEM: string;
            DATA_UPLOAD: Date;
            ID_IMAGEM: number;
        }[];
    } & {
        ID_SERVICO: number;
        ID_CLIENTE: number;
        ID_PET: number;
        VALOR_COBRADO: import("@prisma/client/runtime/library").Decimal;
        TIPO: string;
        NOTAS: string | null;
        ID_ATENDIMENTO: number;
    }>;
    update(id: number, updateAtendimentoDto: UpdateAtendimentoDto): Promise<{
        ID_SERVICO: number;
        ID_CLIENTE: number;
        ID_PET: number;
        VALOR_COBRADO: import("@prisma/client/runtime/library").Decimal;
        TIPO: string;
        NOTAS: string | null;
        ID_ATENDIMENTO: number;
    }>;
    remove(id: number): Promise<{
        ID_SERVICO: number;
        ID_CLIENTE: number;
        ID_PET: number;
        VALOR_COBRADO: import("@prisma/client/runtime/library").Decimal;
        TIPO: string;
        NOTAS: string | null;
        ID_ATENDIMENTO: number;
    }>;
}
