import { PrismaService } from '../prisma/prisma.service';
import { CreatePacoteDto } from './dto/create-pacote.dto';
import { UpdatePacoteDto } from './dto/update-pacote.dto';
export declare class PacotesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createPacoteDto: CreatePacoteDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        datainicio: Date;
        datafim: Date;
        banhos_utilizados: number;
        id_cliente: string;
        id_plano: string;
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
        plano: {
            id: string;
            nome: string;
            createdAt: Date;
            updatedAt: Date;
            preco: import("@prisma/client/runtime/library").Decimal;
            descricao: string | null;
            banhos_incluidos: number;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        datainicio: Date;
        datafim: Date;
        banhos_utilizados: number;
        id_cliente: string;
        id_plano: string;
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
        plano: {
            id: string;
            nome: string;
            createdAt: Date;
            updatedAt: Date;
            preco: import("@prisma/client/runtime/library").Decimal;
            descricao: string | null;
            banhos_incluidos: number;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        datainicio: Date;
        datafim: Date;
        banhos_utilizados: number;
        id_cliente: string;
        id_plano: string;
    }>;
    update(id: string, updatePacoteDto: UpdatePacoteDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        datainicio: Date;
        datafim: Date;
        banhos_utilizados: number;
        id_cliente: string;
        id_plano: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        datainicio: Date;
        datafim: Date;
        banhos_utilizados: number;
        id_cliente: string;
        id_plano: string;
    }>;
}
