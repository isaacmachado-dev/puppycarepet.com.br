import { PrismaService } from '../prisma/prisma.service';
import { CreateMensagemDto } from './dto/create-mensagem.dto';
import { UpdateMensagemDto } from './dto/update-mensagem.dto';
export declare class MensagensService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createMensagemDto: CreateMensagemDto): Promise<{
        id: string;
        canal: string;
        template: string | null;
        conteudo: string;
        status: string;
        meta_message_id: string | null;
        erro: string | null;
        createdAt: Date;
        cliente_id: string;
    }>;
    findAll(): Promise<({
        clientes: {
            id: string;
            createdAt: Date;
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
            updatedAt: Date;
        };
    } & {
        id: string;
        canal: string;
        template: string | null;
        conteudo: string;
        status: string;
        meta_message_id: string | null;
        erro: string | null;
        createdAt: Date;
        cliente_id: string;
    })[]>;
    findOne(id: string): Promise<{
        clientes: {
            id: string;
            createdAt: Date;
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
            updatedAt: Date;
        };
    } & {
        id: string;
        canal: string;
        template: string | null;
        conteudo: string;
        status: string;
        meta_message_id: string | null;
        erro: string | null;
        createdAt: Date;
        cliente_id: string;
    }>;
    update(id: string, updateMensagemDto: UpdateMensagemDto): Promise<{
        id: string;
        canal: string;
        template: string | null;
        conteudo: string;
        status: string;
        meta_message_id: string | null;
        erro: string | null;
        createdAt: Date;
        cliente_id: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        canal: string;
        template: string | null;
        conteudo: string;
        status: string;
        meta_message_id: string | null;
        erro: string | null;
        createdAt: Date;
        cliente_id: string;
    }>;
}
