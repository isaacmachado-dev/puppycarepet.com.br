import { RotasParadasService } from './rotas-paradas.service';
import { CreateRotasParadaDto } from './dto/create-rotas-parada.dto';
import { UpdateRotasParadaDto } from './dto/update-rotas-parada.dto';
export declare class RotasParadasController {
    private readonly rotasParadasService;
    constructor(rotasParadasService: RotasParadasService);
<<<<<<< HEAD
    create(createRotasParadaDto: CreateRotasParadaDto): Promise<{
        id: string;
        latitude: number;
        longitude: number;
        status: string;
        rota_id: string;
        ordem_id: string;
        sequencia: number;
    }>;
    findAll(): Promise<({
        rota: {
            id: string;
            tipo: string;
            status: string;
            data: Date;
            motorista: string | null;
            kilometragem_prevista: number | null;
            tempo_previsto: number | null;
        };
        ordem: {
            id: string;
            cliente_id: string;
            observacoes: string | null;
            pet_id: string;
            tipo: string;
            status: string;
            data_agendada: Date;
            preco: import("@prisma/client/runtime/library").Decimal | null;
        };
    } & {
        id: string;
        latitude: number;
        longitude: number;
        status: string;
        rota_id: string;
        ordem_id: string;
        sequencia: number;
    })[]>;
    findOne(id: string): Promise<{
        rota: {
            id: string;
            tipo: string;
            status: string;
            data: Date;
            motorista: string | null;
            kilometragem_prevista: number | null;
            tempo_previsto: number | null;
        };
        ordem: {
            id: string;
            cliente_id: string;
            observacoes: string | null;
            pet_id: string;
            tipo: string;
            status: string;
            data_agendada: Date;
            preco: import("@prisma/client/runtime/library").Decimal | null;
        };
    } & {
        id: string;
        latitude: number;
        longitude: number;
        status: string;
        rota_id: string;
        ordem_id: string;
        sequencia: number;
    }>;
    update(id: string, updateRotasParadaDto: UpdateRotasParadaDto): Promise<{
        id: string;
        latitude: number;
        longitude: number;
        status: string;
        rota_id: string;
        ordem_id: string;
        sequencia: number;
    }>;
    remove(id: string): Promise<{
        id: string;
        latitude: number;
        longitude: number;
        status: string;
        rota_id: string;
        ordem_id: string;
        sequencia: number;
    }>;
=======
    create(createRotasParadaDto: CreateRotasParadaDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, updateRotasParadaDto: UpdateRotasParadaDto): Promise<any>;
    remove(id: string): Promise<any>;
>>>>>>> 9522fd822d26e0b7511f145f861b137bf1e7e370
}
