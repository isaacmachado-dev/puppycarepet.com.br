import { PetsService } from './pets.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
export declare class PetsController {
    private readonly petsService;
    constructor(petsService: PetsService);
    create(createPetDto: CreatePetDto): Promise<{
        NOME: string;
        ID_CLIENTE: number;
        ID_PET: number;
        RACA: string | null;
        DATA_NASC: Date | null;
    }>;
    findAll(): Promise<({
        ATENDIMENTOS: {
            ID_SERVICO: number;
            ID_CLIENTE: number;
            ID_PET: number;
            VALOR_COBRADO: import("@prisma/client/runtime/library").Decimal;
            TIPO: string;
            NOTAS: string | null;
            ID_ATENDIMENTO: number;
        }[];
        CLIENTE: {
            NOME: string;
            ID_CLIENTE: number;
            TELEFONE: string;
            ENDERECO: string;
        };
    } & {
        NOME: string;
        ID_CLIENTE: number;
        ID_PET: number;
        RACA: string | null;
        DATA_NASC: Date | null;
    })[]>;
    findOne(id: number): Promise<{
        ATENDIMENTOS: {
            ID_SERVICO: number;
            ID_CLIENTE: number;
            ID_PET: number;
            VALOR_COBRADO: import("@prisma/client/runtime/library").Decimal;
            TIPO: string;
            NOTAS: string | null;
            ID_ATENDIMENTO: number;
        }[];
        CLIENTE: {
            NOME: string;
            ID_CLIENTE: number;
            TELEFONE: string;
            ENDERECO: string;
        };
    } & {
        NOME: string;
        ID_CLIENTE: number;
        ID_PET: number;
        RACA: string | null;
        DATA_NASC: Date | null;
    }>;
    update(id: number, updatePetDto: UpdatePetDto): Promise<{
        NOME: string;
        ID_CLIENTE: number;
        ID_PET: number;
        RACA: string | null;
        DATA_NASC: Date | null;
    }>;
    remove(id: number): Promise<{
        NOME: string;
        ID_CLIENTE: number;
        ID_PET: number;
        RACA: string | null;
        DATA_NASC: Date | null;
    }>;
}
