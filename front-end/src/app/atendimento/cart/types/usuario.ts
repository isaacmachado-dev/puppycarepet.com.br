export interface Usuario {
  ID_USUARIO: number;
  NOME: string;
  EMAIL: string;
  SENHA?: string;
  FOTO_USUARIO: boolean;
  PUBLIC_ID?: string;
  CREATED_AT?: string;
  UPDATED_AT?: string;
  DELETED_AT?: string;
  VERSION?: number;
}