import { ServicosService } from './servicos.service';
import { CreateServicoDto } from './dto/create-servico.dto';
import { UpdateServicoDto } from './dto/update-servico.dto';
import { ServicoSyncBatchRequestDto } from './dto/servico-sync.dto';
export declare class ServicosController {
    private readonly servicosService;
    constructor(servicosService: ServicosService);
    create(createServicoDto: CreateServicoDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: number): Promise<any>;
    update(id: number, updateServicoDto: UpdateServicoDto): Promise<any>;
    remove(id: number): Promise<any>;
    getChanges(since?: string): Promise<any>;
    batch(body: ServicoSyncBatchRequestDto): Promise<{
        results: {
            publicId: string;
            status: "applied" | "conflict" | "skipped";
            server?: any;
        }[];
    }>;
    softDeleteByPublicId(publicId: string): Promise<any>;
}
