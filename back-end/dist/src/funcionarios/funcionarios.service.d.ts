import { PrismaService } from '../prisma/prisma.service';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';
export declare class FuncionariosService {
    private prisma;
    constructor(prisma: PrismaService);
<<<<<<< HEAD
    create(createFuncionarioDto: CreateFuncionarioDto): Promise<{
        id: string;
        nome: string;
        email: string;
        telefone: string;
        createdAt: Date;
        updatedAt: Date;
        cargo: string;
        ativo: boolean;
    }>;
    findAll(): Promise<{
        id: string;
        nome: string;
        email: string;
        telefone: string;
        createdAt: Date;
        updatedAt: Date;
        cargo: string;
        ativo: boolean;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        nome: string;
        email: string;
        telefone: string;
        createdAt: Date;
        updatedAt: Date;
        cargo: string;
        ativo: boolean;
    }>;
    update(id: string, updateFuncionarioDto: UpdateFuncionarioDto): Promise<{
        id: string;
        nome: string;
        email: string;
        telefone: string;
        createdAt: Date;
        updatedAt: Date;
        cargo: string;
        ativo: boolean;
    }>;
    remove(id: string): Promise<{
        id: string;
        nome: string;
        email: string;
        telefone: string;
        createdAt: Date;
        updatedAt: Date;
        cargo: string;
        ativo: boolean;
    }>;
=======
    create(createFuncionarioDto: CreateFuncionarioDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, updateFuncionarioDto: UpdateFuncionarioDto): Promise<any>;
    remove(id: string): Promise<any>;
>>>>>>> 9522fd822d26e0b7511f145f861b137bf1e7e370
}
