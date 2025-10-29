import { StatusService } from './status.service';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
export declare class StatusController {
    private readonly statusService;
    constructor(statusService: StatusService);
    create(createStatusDto: CreateStatusDto): Promise<{
        id: string;
        status: string;
        timestamp: Date;
        ordem_id: string;
    }>;
    findAll(): Promise<({
        ordem: {
            id: string;
            status: string;
            cliente_id: string;
            pet_id: string;
            tipo: string;
            data_agendada: Date;
            preco: import("@prisma/client/runtime/library").Decimal | null;
            observacoes: string | null;
        };
    } & {
        id: string;
        status: string;
        timestamp: Date;
        ordem_id: string;
    })[]>;
    findOne(id: string): Promise<{
        ordem: {
            id: string;
            status: string;
            cliente_id: string;
            pet_id: string;
            tipo: string;
            data_agendada: Date;
            preco: import("@prisma/client/runtime/library").Decimal | null;
            observacoes: string | null;
        };
    } & {
        id: string;
        status: string;
        timestamp: Date;
        ordem_id: string;
    }>;
    update(id: string, updateStatusDto: UpdateStatusDto): Promise<{
        id: string;
        status: string;
        timestamp: Date;
        ordem_id: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        status: string;
        timestamp: Date;
        ordem_id: string;
    }>;
}
