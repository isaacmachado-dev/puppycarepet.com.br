import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { UsuarioSyncBatchRequestDto } from './dto/usuario-sync.dto';
export declare class UsuariosController {
    private readonly usuariosService;
    constructor(usuariosService: UsuariosService);
    create(createUsuarioDto: CreateUsuarioDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: number): Promise<any>;
    getChanges(since?: string): Promise<any>;
    batch(body: UsuarioSyncBatchRequestDto): Promise<{
        results: {
            publicId: string;
            status: "applied" | "conflict" | "skipped";
            server?: any;
        }[];
    }>;
    update(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<any>;
    remove(id: number): Promise<any>;
    softDeleteByPublicId(publicId: string): Promise<any>;
}
