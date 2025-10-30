import { RotasService } from './rotas.service';
import { CreateRotaDto } from './dto/create-rota.dto';
import { UpdateRotaDto } from './dto/update-rota.dto';
export declare class RotasController {
    private readonly rotasService;
    constructor(rotasService: RotasService);
    create(createRotaDto: CreateRotaDto): Promise<{
        id: string;
        tipo: string;
        status: string;
        data: Date;
        motorista: string | null;
        kilometragem_prevista: number | null;
        tempo_previsto: number | null;
    }>;
    findAll(): Promise<({
        paradas: ({
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
        })[];
    } & {
        id: string;
        tipo: string;
        status: string;
        data: Date;
        motorista: string | null;
        kilometragem_prevista: number | null;
        tempo_previsto: number | null;
    })[]>;
    findOne(id: string): Promise<{
        paradas: ({
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
        })[];
    } & {
        id: string;
        tipo: string;
        status: string;
        data: Date;
        motorista: string | null;
        kilometragem_prevista: number | null;
        tempo_previsto: number | null;
    }>;
    update(id: string, updateRotaDto: UpdateRotaDto): Promise<{
        id: string;
        tipo: string;
        status: string;
        data: Date;
        motorista: string | null;
        kilometragem_prevista: number | null;
        tempo_previsto: number | null;
    }>;
    remove(id: string): Promise<{
        id: string;
        tipo: string;
        status: string;
        data: Date;
        motorista: string | null;
        kilometragem_prevista: number | null;
        tempo_previsto: number | null;
    }>;
}
