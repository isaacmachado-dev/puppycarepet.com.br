import { PrismaService } from '../prisma/prisma.service';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
export declare class StatusService {
    private prisma;
    constructor(prisma: PrismaService);
<<<<<<< HEAD
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
=======
    create(createStatusDto: CreateStatusDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, updateStatusDto: UpdateStatusDto): Promise<any>;
    remove(id: string): Promise<any>;
>>>>>>> 9522fd822d26e0b7511f145f861b137bf1e7e370
}
