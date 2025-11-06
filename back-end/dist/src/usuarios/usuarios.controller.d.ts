import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
export declare class UsuariosController {
    private readonly usuariosService;
    constructor(usuariosService: UsuariosService);
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
