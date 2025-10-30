import { PrismaService } from '../prisma/prisma.service';
import { CreateOrdensServicoDto } from './dto/create-ordens-servico.dto';
import { UpdateOrdensServicoDto } from './dto/update-ordens-servico.dto';
export declare class OrdensServicosService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createOrdensServicoDto: CreateOrdensServicoDto): Promise<{
        id: string;
        cliente_id: string;
        observacoes: string | null;
        pet_id: string;
        tipo: string;
        status: string;
        data_agendada: Date;
        preco: import("@prisma/client/runtime/library").Decimal | null;
    }>;
    findAll(): Promise<({
        clientes: {
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
        pet: {
            id: string;
            nome: string;
            cliente_id: string;
            especie: string;
            raca: string | null;
            porte: string | null;
            nascimento: Date | null;
            observacoes: string | null;
        };
        paradas: {
            id: string;
            latitude: number;
            longitude: number;
            status: string;
            rota_id: string;
            ordem_id: string;
            sequencia: number;
        }[];
        statuses: {
            id: string;
            status: string;
            ordem_id: string;
            timestamp: Date;
        }[];
    } & {
        id: string;
        cliente_id: string;
        observacoes: string | null;
        pet_id: string;
        tipo: string;
        status: string;
        data_agendada: Date;
        preco: import("@prisma/client/runtime/library").Decimal | null;
    })[]>;
    findOne(id: string): Promise<{
        clientes: {
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
        pet: {
            id: string;
            nome: string;
            cliente_id: string;
            especie: string;
            raca: string | null;
            porte: string | null;
            nascimento: Date | null;
            observacoes: string | null;
        };
        paradas: {
            id: string;
            latitude: number;
            longitude: number;
            status: string;
            rota_id: string;
            ordem_id: string;
            sequencia: number;
        }[];
        statuses: {
            id: string;
            status: string;
            ordem_id: string;
            timestamp: Date;
        }[];
    } & {
        id: string;
        cliente_id: string;
        observacoes: string | null;
        pet_id: string;
        tipo: string;
        status: string;
        data_agendada: Date;
        preco: import("@prisma/client/runtime/library").Decimal | null;
    }>;
    update(id: string, updateOrdensServicoDto: UpdateOrdensServicoDto): Promise<{
        id: string;
        cliente_id: string;
        observacoes: string | null;
        pet_id: string;
        tipo: string;
        status: string;
        data_agendada: Date;
        preco: import("@prisma/client/runtime/library").Decimal | null;
    }>;
    remove(id: string): Promise<{
        id: string;
        cliente_id: string;
        observacoes: string | null;
        pet_id: string;
        tipo: string;
        status: string;
        data_agendada: Date;
        preco: import("@prisma/client/runtime/library").Decimal | null;
    }>;
}
