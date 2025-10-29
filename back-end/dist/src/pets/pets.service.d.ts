import { PrismaService } from '../prisma/prisma.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
export declare class PetsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createPetDto: CreatePetDto): Promise<{
        id: string;
        nome: string;
        especie: string;
        raca: string | null;
        porte: string | null;
        nascimento: Date | null;
        observacoes: string | null;
        cliente_id: string;
    }>;
    findAll(): Promise<({
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
        ordens: {
            id: string;
            observacoes: string | null;
            cliente_id: string;
            pet_id: string;
            tipo: string;
            status: string;
            data_agendada: Date;
            preco: import("@prisma/client/runtime/library").Decimal | null;
        }[];
    } & {
        id: string;
        nome: string;
        especie: string;
        raca: string | null;
        porte: string | null;
        nascimento: Date | null;
        observacoes: string | null;
        cliente_id: string;
    })[]>;
    findOne(id: string): Promise<{
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
        ordens: {
            id: string;
            observacoes: string | null;
            cliente_id: string;
            pet_id: string;
            tipo: string;
            status: string;
            data_agendada: Date;
            preco: import("@prisma/client/runtime/library").Decimal | null;
        }[];
    } & {
        id: string;
        nome: string;
        especie: string;
        raca: string | null;
        porte: string | null;
        nascimento: Date | null;
        observacoes: string | null;
        cliente_id: string;
    }>;
    update(id: string, updatePetDto: UpdatePetDto): Promise<{
        id: string;
        nome: string;
        especie: string;
        raca: string | null;
        porte: string | null;
        nascimento: Date | null;
        observacoes: string | null;
        cliente_id: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        nome: string;
        especie: string;
        raca: string | null;
        porte: string | null;
        nascimento: Date | null;
        observacoes: string | null;
        cliente_id: string;
    }>;
}
