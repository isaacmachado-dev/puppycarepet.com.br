import { StatusService } from './status.service';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
export declare class StatusController {
    private readonly statusService;
    constructor(statusService: StatusService);
    create(createStatusDto: CreateStatusDto): Promise<{
        id: string;
        status: string;
        ordem_id: string;
        timestamp: Date;
    }>;
    findAll(): Promise<({
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
        status: string;
        ordem_id: string;
        timestamp: Date;
    })[]>;
    findOne(id: string): Promise<{
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
        status: string;
        ordem_id: string;
        timestamp: Date;
    }>;
    update(id: string, updateStatusDto: UpdateStatusDto): Promise<{
        id: string;
        status: string;
        ordem_id: string;
        timestamp: Date;
    }>;
    remove(id: string): Promise<{
        id: string;
        status: string;
        ordem_id: string;
        timestamp: Date;
    }>;
}
