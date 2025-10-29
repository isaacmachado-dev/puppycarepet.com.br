import { FuncionariosService } from './funcionarios.service';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';
export declare class FuncionariosController {
    private readonly funcionariosService;
    constructor(funcionariosService: FuncionariosService);
    create(createFuncionarioDto: CreateFuncionarioDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, updateFuncionarioDto: UpdateFuncionarioDto): Promise<any>;
    remove(id: string): Promise<any>;
}
