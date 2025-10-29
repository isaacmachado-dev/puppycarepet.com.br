import { PrismaService } from '../prisma/prisma.service';
import { CreateOrdensServicoDto } from './dto/create-ordens-servico.dto';
import { UpdateOrdensServicoDto } from './dto/update-ordens-servico.dto';
export declare class OrdensServicosService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createOrdensServicoDto: CreateOrdensServicoDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, updateOrdensServicoDto: UpdateOrdensServicoDto): Promise<any>;
    remove(id: string): Promise<any>;
}
