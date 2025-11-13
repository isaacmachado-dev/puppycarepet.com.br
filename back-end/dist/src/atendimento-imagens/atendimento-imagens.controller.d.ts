import { AtendimentoImagensService } from './atendimento-imagens.service';
import { CreateAtendimentoImagemDto } from './dto/create-atendimento-imagem.dto';
import { UpdateAtendimentoImagemDto } from './dto/update-atendimento-imagem.dto';
import { AtendimentoImagemSyncBatchRequestDto } from './dto/atendimento-imagem-sync.dto';
export declare class AtendimentoImagensController {
    private readonly atendimentoImagensService;
    constructor(atendimentoImagensService: AtendimentoImagensService);
    create(createAtendimentoImagemDto: CreateAtendimentoImagemDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: number): Promise<any>;
    update(id: number, updateAtendimentoImagemDto: UpdateAtendimentoImagemDto): Promise<any>;
    remove(id: number): Promise<any>;
    getChanges(since?: string): Promise<any>;
    batch(body: AtendimentoImagemSyncBatchRequestDto): Promise<{
        results: {
            publicId: string;
            status: "applied" | "conflict" | "skipped";
            server?: any;
        }[];
    }>;
    softDeleteByPublicId(publicId: string): Promise<any>;
}
