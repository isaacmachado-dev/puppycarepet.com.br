import { PrismaService } from '../prisma/prisma.service';
import { CreateMensagemDto } from './dto/create-mensagem.dto';
import { UpdateMensagemDto } from './dto/update-mensagem.dto';
export declare class MensagensService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createMensagemDto: CreateMensagemDto): Promise<{
        id: string;
        createdAt: Date;
        cliente_id: string;
        status: string;
        canal: string;
        template: string | null;
        conteudo: string;
        meta_message_id: string | null;
        erro: string | null;
    }>;
    findAll(): Promise<({
        clientes: {
            id: string;
            email: string | null;
            cpf: string | null;
            nome: string;
            telefone: string;
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
        createdAt: Date;
        cliente_id: string;
        status: string;
        canal: string;
        template: string | null;
        conteudo: string;
        meta_message_id: string | null;
        erro: string | null;
    })[]>;
    findOne(id: string): Promise<{
        clientes: {
            id: string;
            email: string | null;
            cpf: string | null;
            nome: string;
            telefone: string;
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
        createdAt: Date;
        cliente_id: string;
        status: string;
        canal: string;
        template: string | null;
        conteudo: string;
        meta_message_id: string | null;
        erro: string | null;
    }>;
    update(id: string, updateMensagemDto: UpdateMensagemDto): Promise<{
        id: string;
        createdAt: Date;
        cliente_id: string;
        status: string;
        canal: string;
        template: string | null;
        conteudo: string;
        meta_message_id: string | null;
        erro: string | null;
    }>;
    remove(id: string): Promise<{
        id: string;
        createdAt: Date;
        cliente_id: string;
        status: string;
        canal: string;
        template: string | null;
        conteudo: string;
        meta_message_id: string | null;
        erro: string | null;
    }>;
}
