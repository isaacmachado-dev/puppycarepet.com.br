import { MensagensService } from './mensagens.service';
import { CreateMensagemDto } from './dto/create-mensagem.dto';
import { UpdateMensagemDto } from './dto/update-mensagem.dto';
export declare class MensagensController {
    private readonly mensagensService;
    constructor(mensagensService: MensagensService);
<<<<<<< HEAD
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
=======
    create(createMensagemDto: CreateMensagemDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, updateMensagemDto: UpdateMensagemDto): Promise<any>;
    remove(id: string): Promise<any>;
>>>>>>> 9522fd822d26e0b7511f145f861b137bf1e7e370
}
