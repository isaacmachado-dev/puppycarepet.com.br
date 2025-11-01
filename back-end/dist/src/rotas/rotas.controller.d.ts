import { RotasService } from './rotas.service';
import { CreateRotaDto } from './dto/create-rota.dto';
import { UpdateRotaDto } from './dto/update-rota.dto';
export declare class RotasController {
    private readonly rotasService;
    constructor(rotasService: RotasService);
    create(createRotaDto: CreateRotaDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, updateRotaDto: UpdateRotaDto): Promise<any>;
    remove(id: string): Promise<any>;
}
