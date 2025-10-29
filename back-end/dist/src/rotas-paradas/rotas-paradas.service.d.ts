import { PrismaService } from '../prisma/prisma.service';
import { CreateRotasParadaDto } from './dto/create-rotas-parada.dto';
import { UpdateRotasParadaDto } from './dto/update-rotas-parada.dto';
export declare class RotasParadasService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createRotasParadaDto: CreateRotasParadaDto): Promise<{
        id: string;
        sequencia: number;
        latitude: number;
        longitude: number;
        status: string;
        rota_id: string;
        ordem_id: string;
    }>;
    findAll(): Promise<({
        rota: {
            data: Date;
            id: string;
            status: string;
            tipo: string;
            motorista: string | null;
            kilometragem_prevista: number | null;
            tempo_previsto: number | null;
        };
        ordem: {
            id: string;
            status: string;
            tipo: string;
            cliente_id: string;
            pet_id: string;
            data_agendada: Date;
            preco: import("@prisma/client/runtime/library").Decimal | null;
            observacoes: string | null;
        };
    } & {
        id: string;
        sequencia: number;
        latitude: number;
        longitude: number;
        status: string;
        rota_id: string;
        ordem_id: string;
    })[]>;
    findOne(id: string): Promise<{
        rota: {
            data: Date;
            id: string;
            status: string;
            tipo: string;
            motorista: string | null;
            kilometragem_prevista: number | null;
            tempo_previsto: number | null;
        };
        ordem: {
            id: string;
            status: string;
            tipo: string;
            cliente_id: string;
            pet_id: string;
            data_agendada: Date;
            preco: import("@prisma/client/runtime/library").Decimal | null;
            observacoes: string | null;
        };
    } & {
        id: string;
        sequencia: number;
        latitude: number;
        longitude: number;
        status: string;
        rota_id: string;
        ordem_id: string;
    }>;
    update(id: string, updateRotasParadaDto: UpdateRotasParadaDto): Promise<{
        id: string;
        sequencia: number;
        latitude: number;
        longitude: number;
        status: string;
        rota_id: string;
        ordem_id: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        sequencia: number;
        latitude: number;
        longitude: number;
        status: string;
        rota_id: string;
        ordem_id: string;
    }>;
}
