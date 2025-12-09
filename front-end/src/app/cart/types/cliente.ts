export interface Cliente {
  ID_CLIENTE: number;
  NOME: string;
  TELEFONE: string;
  ENDERECO: string;
  FOTO_USUARIO: boolean;
  PUBLIC_ID?: string;
  CREATED_AT?: string;
  UPDATED_AT?: string;
  DELETED_AT?: string;
  VERSION?: number;
}
