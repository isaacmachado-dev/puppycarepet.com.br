import { PacotesService } from './pacotes.service';
import { CreatePacoteDto } from './dto/create-pacote.dto';
import { UpdatePacoteDto } from './dto/update-pacote.dto';
import { PacoteSyncBatchRequestDto } from './dto/pacote-sync.dto';
export declare class PacotesController {
    private readonly pacotesService;
    constructor(pacotesService: PacotesService);
    create(createPacoteDto: CreatePacoteDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: number): Promise<any>;
    update(id: number, updatePacoteDto: UpdatePacoteDto): Promise<any>;
    remove(id: number): Promise<any>;
    getChanges(since?: string): Promise<any>;
    batch(body: PacoteSyncBatchRequestDto): Promise<{
        results: {
            publicId: string;
            status: "applied" | "conflict" | "skipped";
            server?: any;
        }[];
    }>;
    softDeleteByPublicId(publicId: string): Promise<any>;
}
