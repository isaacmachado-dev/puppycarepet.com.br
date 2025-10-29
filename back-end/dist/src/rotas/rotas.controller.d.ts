import { RotasService } from './rotas.service';
import { CreateRotaDto } from './dto/create-rota.dto';
import { UpdateRotaDto } from './dto/update-rota.dto';
export declare class RotasController {
    private readonly rotasService;
    constructor(rotasService: RotasService);
    create(createRotaDto: CreateRotaDto): Promise<{
        data: Date;
        id: string;
        tipo: string;
        status: string;
        motorista: string | null;
        kilometragem_prevista: number | null;
        tempo_previsto: number | null;
    }>;
    findAll(): Promise<({
        paradas: ({
            ordem: {
                id: string;
                tipo: string;
                status: string;
                cliente_id: string;
                pet_id: string;
                data_agendada: Date;
                preco: import("@prisma/client/runtime/library").Decimal | null;
                observacoes: string | null;
            };
        } & {
            id: string;
            status: string;
            rota_id: string;
            ordem_id: string;
            sequencia: number;
            latitude: number;
            longitude: number;
        })[];
    } & {
        data: Date;
        id: string;
        tipo: string;
        status: string;
        motorista: string | null;
        kilometragem_prevista: number | null;
        tempo_previsto: number | null;
    })[]>;
    findOne(id: string): Promise<{
        paradas: ({
            ordem: {
                id: string;
                tipo: string;
                status: string;
                cliente_id: string;
                pet_id: string;
                data_agendada: Date;
                preco: import("@prisma/client/runtime/library").Decimal | null;
                observacoes: string | null;
            };
        } & {
            id: string;
            status: string;
            rota_id: string;
            ordem_id: string;
            sequencia: number;
            latitude: number;
            longitude: number;
        })[];
    } & {
        data: Date;
        id: string;
        tipo: string;
        status: string;
        motorista: string | null;
        kilometragem_prevista: number | null;
        tempo_previsto: number | null;
    }>;
    update(id: string, updateRotaDto: UpdateRotaDto): Promise<{
        data: Date;
        id: string;
        tipo: string;
        status: string;
        motorista: string | null;
        kilometragem_prevista: number | null;
        tempo_previsto: number | null;
    }>;
    remove(id: string): Promise<{
        data: Date;
        id: string;
        tipo: string;
        status: string;
        motorista: string | null;
        kilometragem_prevista: number | null;
        tempo_previsto: number | null;
    }>;
}
