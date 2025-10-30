import { FuncionariosService } from './funcionarios.service';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';
export declare class FuncionariosController {
    private readonly funcionariosService;
    constructor(funcionariosService: FuncionariosService);
    create(createFuncionarioDto: CreateFuncionarioDto): Promise<{
        id: string;
        email: string;
        nome: string;
        telefone: string;
        createdAt: Date;
        updatedAt: Date;
        cargo: string;
        ativo: boolean;
    }>;
    findAll(): Promise<{
        id: string;
        email: string;
        nome: string;
        telefone: string;
        createdAt: Date;
        updatedAt: Date;
        cargo: string;
        ativo: boolean;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        email: string;
        nome: string;
        telefone: string;
        createdAt: Date;
        updatedAt: Date;
        cargo: string;
        ativo: boolean;
    }>;
    update(id: string, updateFuncionarioDto: UpdateFuncionarioDto): Promise<{
        id: string;
        email: string;
        nome: string;
        telefone: string;
        createdAt: Date;
        updatedAt: Date;
        cargo: string;
        ativo: boolean;
    }>;
    remove(id: string): Promise<{
        id: string;
        email: string;
        nome: string;
        telefone: string;
        createdAt: Date;
        updatedAt: Date;
        cargo: string;
        ativo: boolean;
    }>;
}
