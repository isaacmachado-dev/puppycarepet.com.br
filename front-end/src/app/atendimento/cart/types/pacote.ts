export interface Pacote {
  ID_PACOTE: number;
  NOME: string;
  DESCRICAO: string;
  PRECO: number;
  DURACAO_DIAS: number;
  CREATED_AT?: string;
  UPDATED_AT?: string;
  DELETED_AT?: string;
  VERSION?: number;
}