import { PrismaService } from '../prisma/prisma.service';
import { CreateRotasParadaDto } from './dto/create-rotas-parada.dto';
import { UpdateRotasParadaDto } from './dto/update-rotas-parada.dto';
export declare class RotasParadasService {
    private prisma;
    constructor(prisma: PrismaService);
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
}
