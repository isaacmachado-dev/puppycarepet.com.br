import { PrismaService } from '../prisma/prisma.service';
import { CreateAtendimentoImagemDto } from './dto/create-atendimento-imagem.dto';
import { UpdateAtendimentoImagemDto } from './dto/update-atendimento-imagem.dto';
import { AtendimentoImagemSyncBatchRequestDto } from './dto/atendimento-imagem-sync.dto';
export declare class AtendimentoImagensService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createAtendimentoImagemDto: CreateAtendimentoImagemDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: number): Promise<any>;
    update(id: number, updateAtendimentoImagemDto: UpdateAtendimentoImagemDto): Promise<any>;
    remove(id: number): Promise<any>;
    getChanges(since?: string): Promise<any>;
    batchUpsert(body: AtendimentoImagemSyncBatchRequestDto): Promise<{
        results: {
            publicId: string;
            status: "applied" | "conflict" | "skipped";
            server?: any;
        }[];
    }>;
    private applyOne;
    softDeleteByPublicId(publicId: string): Promise<any>;
}
