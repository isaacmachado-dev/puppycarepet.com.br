import { PrismaService } from '../prisma/prisma.service';
import { CreateMensagemDto } from './dto/create-mensagem.dto';
import { UpdateMensagemDto } from './dto/update-mensagem.dto';
export declare class MensagensService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createMensagemDto: CreateMensagemDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, updateMensagemDto: UpdateMensagemDto): Promise<any>;
    remove(id: string): Promise<any>;
}
