import { RotasParadasService } from './rotas-paradas.service';
import { CreateRotasParadaDto } from './dto/create-rotas-parada.dto';
import { UpdateRotasParadaDto } from './dto/update-rotas-parada.dto';
export declare class RotasParadasController {
    private readonly rotasParadasService;
    constructor(rotasParadasService: RotasParadasService);
    create(createRotasParadaDto: CreateRotasParadaDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, updateRotasParadaDto: UpdateRotasParadaDto): Promise<any>;
    remove(id: string): Promise<any>;
}
