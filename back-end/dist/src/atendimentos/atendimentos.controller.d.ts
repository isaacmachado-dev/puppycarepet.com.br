import { AtendimentosService } from './atendimentos.service';
import { CreateAtendimentoDto } from './dto/create-atendimento.dto';
import { UpdateAtendimentoDto } from './dto/update-atendimento.dto';
import { AtendimentoSyncBatchRequestDto } from './dto/atendimento-sync.dto';
export declare class AtendimentosController {
    private readonly atendimentosService;
    constructor(atendimentosService: AtendimentosService);
    create(createAtendimentoDto: CreateAtendimentoDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: number): Promise<any>;
    update(id: number, updateAtendimentoDto: UpdateAtendimentoDto): Promise<any>;
    remove(id: number): Promise<any>;
    getChanges(since?: string): Promise<any>;
    batch(body: AtendimentoSyncBatchRequestDto): Promise<{
        results: {
            publicId: string;
            status: "applied" | "conflict" | "skipped";
            server?: any;
        }[];
    }>;
    softDeleteByPublicId(publicId: string): Promise<any>;
}
