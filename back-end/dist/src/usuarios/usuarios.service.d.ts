import { PrismaService } from '../prisma/prisma.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
export declare class UsuariosService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createUsuarioDto: CreateUsuarioDto): Promise<{
        NOME: string;
        DESCRICAO: string | null;
        SENHA_HASH: string;
        ID_USUARIO: number;
    }>;
    findAll(): Promise<{
        NOME: string;
        DESCRICAO: string | null;
        SENHA_HASH: string;
        ID_USUARIO: number;
    }[]>;
    findOne(id: number): Promise<{
        NOME: string;
        DESCRICAO: string | null;
        SENHA_HASH: string;
        ID_USUARIO: number;
    }>;
    update(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<{
        NOME: string;
        DESCRICAO: string | null;
        SENHA_HASH: string;
        ID_USUARIO: number;
    }>;
    remove(id: number): Promise<{
        NOME: string;
        DESCRICAO: string | null;
        SENHA_HASH: string;
        ID_USUARIO: number;
    }>;
}
