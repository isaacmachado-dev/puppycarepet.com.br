import { ServicosService } from './servicos.service';
import { CreateServicoDto } from './dto/create-servico.dto';
import { UpdateServicoDto } from './dto/update-servico.dto';
export declare class ServicosController {
    private readonly servicosService;
    constructor(servicosService: ServicosService);
    create(createServicoDto: CreateServicoDto): Promise<{
        ID_SERVICO: number;
        NOME: string;
        DESCRICAO: string | null;
        VALOR: import("@prisma/client/runtime/library").Decimal;
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
    } & {
        ID_SERVICO: number;
        NOME: string;
        DESCRICAO: string | null;
        VALOR: import("@prisma/client/runtime/library").Decimal;
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
    } & {
        ID_SERVICO: number;
        NOME: string;
        DESCRICAO: string | null;
        VALOR: import("@prisma/client/runtime/library").Decimal;
    }>;
    update(id: number, updateServicoDto: UpdateServicoDto): Promise<{
        ID_SERVICO: number;
        NOME: string;
        DESCRICAO: string | null;
        VALOR: import("@prisma/client/runtime/library").Decimal;
    }>;
    remove(id: number): Promise<{
        ID_SERVICO: number;
        NOME: string;
        DESCRICAO: string | null;
        VALOR: import("@prisma/client/runtime/library").Decimal;
    }>;
}
