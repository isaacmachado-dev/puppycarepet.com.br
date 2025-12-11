export interface Atendimento {
  ID_ATENDIMENTO?: number;
  ID_CLIENTE: number;
  ID_PET: number;
  ID_SERVICO: number;
  VALOR_COBRADO: number;
  TIPO: string;
  NOTAS?: string;
  TELEFONE_DONO?: string;
  IDADE_PET?: string;
  PORTE_PET?: string;
  PUBLIC_ID?: string;
  CREATED_AT?: string;
  UPDATED_AT?: string;
  DELETED_AT?: string;
  VERSION?: number;
}