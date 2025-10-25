import { FuncionariosService } from './funcionarios.service';
export declare class FuncionariosController {
    private readonly funcionariosService;
    constructor(funcionariosService: FuncionariosService);
    findAll(): {
        id: number;
        name: string;
        image: string;
        position: string;
    }[];
}
