import { PrismaService } from '../prisma/prisma.service';
import { CreateRotasParadaDto } from './dto/create-rotas-parada.dto';
import { UpdateRotasParadaDto } from './dto/update-rotas-parada.dto';
export declare class RotasParadasService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createRotasParadaDto: CreateRotasParadaDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, updateRotasParadaDto: UpdateRotasParadaDto): Promise<any>;
    remove(id: string): Promise<any>;
}
