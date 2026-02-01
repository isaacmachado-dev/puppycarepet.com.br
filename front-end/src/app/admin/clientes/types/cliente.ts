/** Representa um usuário do sistema */
export interface Cliente {
    id: number;
    name: string;
    image: string;
    endereco: string;
    type: Cliente[];   // reflete TIPOS no banco
}

export type ClienteAPI = {
    ID_CLIENTE?: number;
    id?: string;
    ID?: string;
    NOME?: string;
    nome?: string;
    name?: string;
    ENDERECO?: string;
    endereco?: string;
    FOTO?: string;
    avatar?: string;
    image?: string;
    TIPOS?: string | string[];
    type?: string | string[];
};