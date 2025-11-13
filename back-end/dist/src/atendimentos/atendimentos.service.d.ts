import { PrismaService } from '../prisma/prisma.service';
import { CreateAtendimentoDto } from './dto/create-atendimento.dto';
import { UpdateAtendimentoDto } from './dto/update-atendimento.dto';
import { AtendimentoSyncBatchRequestDto } from './dto/atendimento-sync.dto';
export declare class AtendimentosService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createAtendimentoDto: CreateAtendimentoDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: number): Promise<any>;
    update(id: number, updateAtendimentoDto: UpdateAtendimentoDto): Promise<any>;
    remove(id: number): Promise<any>;
    getChanges(since?: string): Promise<any>;
    batchUpsert(body: AtendimentoSyncBatchRequestDto): Promise<{
        results: {
            publicId: string;
            status: "applied" | "conflict" | "skipped";
            server?: any;
        }[];
    }>;
    private applyOne;
    softDeleteByPublicId(publicId: string): Promise<any>;
}
