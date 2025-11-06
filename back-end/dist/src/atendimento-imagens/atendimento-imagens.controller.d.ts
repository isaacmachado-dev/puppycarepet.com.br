import { AtendimentoImagensService } from './atendimento-imagens.service';
import { CreateAtendimentoImagemDto } from './dto/create-atendimento-imagem.dto';
import { UpdateAtendimentoImagemDto } from './dto/update-atendimento-imagem.dto';
export declare class AtendimentoImagensController {
    private readonly atendimentoImagensService;
    constructor(atendimentoImagensService: AtendimentoImagensService);
    create(createAtendimentoImagemDto: CreateAtendimentoImagemDto): Promise<{
        ID_ATENDIMENTO: number;
        CAMINHO_IMAGEM: string;
        DATA_UPLOAD: Date;
        ID_IMAGEM: number;
    }>;
    findAll(): Promise<({
        ATENDIMENTO: {
            ID_SERVICO: number;
            ID_CLIENTE: number;
            ID_PET: number;
            VALOR_COBRADO: import("@prisma/client/runtime/library").Decimal;
            TIPO: string;
            NOTAS: string | null;
            ID_ATENDIMENTO: number;
        };
    } & {
        ID_ATENDIMENTO: number;
        CAMINHO_IMAGEM: string;
        DATA_UPLOAD: Date;
        ID_IMAGEM: number;
    })[]>;
    findOne(id: number): Promise<{
        ATENDIMENTO: {
            ID_SERVICO: number;
            ID_CLIENTE: number;
            ID_PET: number;
            VALOR_COBRADO: import("@prisma/client/runtime/library").Decimal;
            TIPO: string;
            NOTAS: string | null;
            ID_ATENDIMENTO: number;
        };
    } & {
        ID_ATENDIMENTO: number;
        CAMINHO_IMAGEM: string;
        DATA_UPLOAD: Date;
        ID_IMAGEM: number;
    }>;
    update(id: number, updateAtendimentoImagemDto: UpdateAtendimentoImagemDto): Promise<{
        ID_ATENDIMENTO: number;
        CAMINHO_IMAGEM: string;
        DATA_UPLOAD: Date;
        ID_IMAGEM: number;
    }>;
    remove(id: number): Promise<{
        ID_ATENDIMENTO: number;
        CAMINHO_IMAGEM: string;
        DATA_UPLOAD: Date;
        ID_IMAGEM: number;
    }>;
}
