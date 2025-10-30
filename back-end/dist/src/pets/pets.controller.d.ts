import { PetsService } from './pets.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
export declare class PetsController {
    private readonly petsService;
    constructor(petsService: PetsService);
    create(createPetDto: CreatePetDto): Promise<{
        id: string;
        nome: string;
        cliente_id: string;
        especie: string;
        raca: string | null;
        porte: string | null;
        nascimento: Date | null;
        observacoes: string | null;
    }>;
    findAll(): Promise<({
        ordens: {
            id: string;
            cliente_id: string;
            observacoes: string | null;
            pet_id: string;
            tipo: string;
            status: string;
            data_agendada: Date;
            preco: import("@prisma/client/runtime/library").Decimal | null;
        }[];
        cliente: {
            id: string;
            nome: string;
            email: string | null;
            telefone: string;
            cpf: string | null;
            endereco_logradouro: string;
            numero: string;
            bairro: string | null;
            cidade: string;
            uf: string;
            cep: string;
            latitude: number | null;
            longitude: number | null;
            whatsapp_opt_in: boolean;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: string;
        nome: string;
        cliente_id: string;
        especie: string;
        raca: string | null;
        porte: string | null;
        nascimento: Date | null;
        observacoes: string | null;
    })[]>;
    findOne(id: string): Promise<{
        ordens: {
            id: string;
            cliente_id: string;
            observacoes: string | null;
            pet_id: string;
            tipo: string;
            status: string;
            data_agendada: Date;
            preco: import("@prisma/client/runtime/library").Decimal | null;
        }[];
        cliente: {
            id: string;
            nome: string;
            email: string | null;
            telefone: string;
            cpf: string | null;
            endereco_logradouro: string;
            numero: string;
            bairro: string | null;
            cidade: string;
            uf: string;
            cep: string;
            latitude: number | null;
            longitude: number | null;
            whatsapp_opt_in: boolean;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: string;
        nome: string;
        cliente_id: string;
        especie: string;
        raca: string | null;
        porte: string | null;
        nascimento: Date | null;
        observacoes: string | null;
    }>;
    update(id: string, updatePetDto: UpdatePetDto): Promise<{
        id: string;
        nome: string;
        cliente_id: string;
        especie: string;
        raca: string | null;
        porte: string | null;
        nascimento: Date | null;
        observacoes: string | null;
    }>;
    remove(id: string): Promise<{
        id: string;
        nome: string;
        cliente_id: string;
        especie: string;
        raca: string | null;
        porte: string | null;
        nascimento: Date | null;
        observacoes: string | null;
    }>;
}
