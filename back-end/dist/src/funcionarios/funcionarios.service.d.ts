import { PrismaService } from '../prisma/prisma.service';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';
export declare class FuncionariosService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createFuncionarioDto: CreateFuncionarioDto): Promise<{
        id: string;
        nome: string;
        email: string;
        telefone: string;
        cargo: string;
        ativo: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        id: string;
        nome: string;
        email: string;
        telefone: string;
        cargo: string;
        ativo: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        nome: string;
        email: string;
        telefone: string;
        cargo: string;
        ativo: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updateFuncionarioDto: UpdateFuncionarioDto): Promise<{
        id: string;
        nome: string;
        email: string;
        telefone: string;
        cargo: string;
        ativo: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        id: string;
        nome: string;
        email: string;
        telefone: string;
        cargo: string;
        ativo: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
