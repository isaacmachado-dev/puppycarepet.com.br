/** Papéis possíveis para um usuário do sistema */
export enum UsuarioRole {
  ADMINISTRADOR = 'administrador',
  FUNCIONARIO = 'funcionario',
  CONDUTOR = 'condutor',
}

/** Representa um usuário do sistema */
export interface Usuario {
  type: any;
  id: number;
  name: string;
  image: string;
  email: string;
  roles: UsuarioRole[];
}
