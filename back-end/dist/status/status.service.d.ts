import { PrismaService } from '../prisma/prisma.service';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
export declare class StatusService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createStatusDto: CreateStatusDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, updateStatusDto: UpdateStatusDto): Promise<any>;
    remove(id: string): Promise<any>;
}
