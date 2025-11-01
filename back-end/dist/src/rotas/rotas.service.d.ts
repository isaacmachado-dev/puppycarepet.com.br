import { PrismaService } from '../prisma/prisma.service';
import { CreateRotaDto } from './dto/create-rota.dto';
import { UpdateRotaDto } from './dto/update-rota.dto';
export declare class RotasService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createRotaDto: CreateRotaDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, updateRotaDto: UpdateRotaDto): Promise<any>;
    remove(id: string): Promise<any>;
}
