/** Papéis possíveis para um usuário do sistema */
export enum UsuarioRole {
  ADMINISTRADOR = 'administrador',
  FUNCIONARIO = 'funcionario',
  CONDUTOR = 'condutor',
}

/** Representa um usuário do sistema */
export interface Usuario {
  id: number;
  name: string;
  image: string;
  email: string;
  type: UsuarioRole[];   // reflete TIPOS no banco
  roles?: UsuarioRole[]; // se quiser manter separado ou remover se não usar
}
