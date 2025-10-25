export type FuncionarioType = 'administradores' | 'funcionarios' | 'condutor';

export interface Funcionario {
    id: number;
    name: string;
    image: string;
    email: string;
    type: FuncionarioType[];
}
