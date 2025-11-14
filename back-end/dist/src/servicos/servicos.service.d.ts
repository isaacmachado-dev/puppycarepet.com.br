import { PrismaService } from '../prisma/prisma.service';
import { CreateServicoDto } from './dto/create-servico.dto';
import { UpdateServicoDto } from './dto/update-servico.dto';
import { ServicoSyncBatchRequestDto } from './dto/servico-sync.dto';
export declare class ServicosService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createServicoDto: CreateServicoDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: number): Promise<any>;
    update(id: number, updateServicoDto: UpdateServicoDto): Promise<any>;
    remove(id: number): Promise<any>;
    getChanges(since?: string): Promise<any>;
    batchUpsert(body: ServicoSyncBatchRequestDto): Promise<{
        results: {
            publicId: string;
            status: "applied" | "conflict" | "skipped";
            server?: any;
        }[];
    }>;
    private applyOne;
    softDeleteByPublicId(publicId: string): Promise<any>;
}
