import { OrdensServicosService } from './ordens-servicos.service';
import { CreateOrdensServicoDto } from './dto/create-ordens-servico.dto';
import { UpdateOrdensServicoDto } from './dto/update-ordens-servico.dto';
export declare class OrdensServicosController {
    private readonly ordensServicosService;
    constructor(ordensServicosService: OrdensServicosService);
    create(createOrdensServicoDto: CreateOrdensServicoDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, updateOrdensServicoDto: UpdateOrdensServicoDto): Promise<any>;
    remove(id: string): Promise<any>;
}
