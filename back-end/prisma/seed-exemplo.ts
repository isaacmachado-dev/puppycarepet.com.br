import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function seedUsuariosExemplo() {
    // Usuários de exemplo (Ellie, Morty, Naruto)

    const senhaAdmin = await bcrypt.hash('admin123', 10);
    const senhaOperador = await bcrypt.hash('operador123', 10);

    await prisma.uSUARIOS.createMany({
        data: [
            {
                NOME: 'Joel Miller',
                DESCRICAO: 'Usuário operador',
                SENHA_HASH: senhaAdmin,
                EMAIL: 'joel.miller@puppycarepet.com.br',
                FOTO_USUARIO: '/usuarios/joel-miller.webp',
                TIPOS: ['condutor', 'administrador'],
            },

            {
                NOME: 'Ellie Williams',
                DESCRICAO: 'Usuário administrador padrão',
                SENHA_HASH: senhaAdmin,
                EMAIL: 'ellie.williams@puppycarepet.com.br',
                FOTO_USUARIO: '/usuarios/ellie-williams.jpg',
                TIPOS: ['administrador'],
            },
            {
                NOME: 'Rock Lee',
                DESCRICAO: 'Usuário operador',
                SENHA_HASH: senhaOperador,
                EMAIL: 'rock.lee@puppycarepet.com.br',
                FOTO_USUARIO: '/usuarios/ʀᴏᴄᴋ ʟᴇᴇ.jpg',
                TIPOS: ['condutor'],
            },


        ],
        skipDuplicates: true, // evita erro se EMAIL já existir
    });


    await prisma.uSUARIOS.upsert({
        where: { EMAIL: 'rick@puppycarepet.com.br' },
        create: {
            NOME: 'Mortyyyyyyy',
            DESCRICAO: 'Usuário operador',
            SENHA_HASH: senhaAdmin,
            EMAIL: 'rick@puppycarepet.com.br',
            FOTO_USUARIO: '/usuarios/rick.gif',
            TIPOS: ['administrador', 'condutor'],

        },
        update: {
            NOME: 'Mortyyyyyyy',
            DESCRICAO: 'Usuário operador',
            SENHA_HASH: senhaAdmin,
            FOTO_USUARIO: '/usuarios/rick.gif',
            TIPOS: ['administrador', 'condutor'],


        },
    });

    await prisma.uSUARIOS.upsert({
        where: { EMAIL: 'po@puppycarepet.com.br' },
        create: {
            NOME: 'Po',
            DESCRICAO: 'Usuário operador',
            SENHA_HASH: senhaOperador,
            EMAIL: 'po@puppycarepet.com.br',
            FOTO_USUARIO: '/usuarios/★.jpg',
        },
        update: {
            NOME: 'Po',
            DESCRICAO: 'Usuário operador',
            SENHA_HASH: senhaOperador,
            FOTO_USUARIO: '/usuarios/★.jpg',
            TIPOS: ['colaborador'],

        },
    });

    await prisma.uSUARIOS.upsert({
        where: { EMAIL: 'rock.lee@puppycarepet.com.br' },
        create: {
            NOME: 'Rock Lee',
            DESCRICAO: 'Usuário operador',
            SENHA_HASH: senhaOperador,
            EMAIL: 'rock.lee@puppycarepet.com.br',
            FOTO_USUARIO: '/usuarios/ʀᴏᴄᴋ ʟᴇᴇ.jpg',
            TIPOS: ['colaborador'],

        },
        update: {
            NOME: 'Rock Lee',
            DESCRICAO: 'Usuário operador',
            SENHA_HASH: senhaOperador,
            FOTO_USUARIO: '/usuarios/ʀᴏᴄᴋ ʟᴇᴇ.jpg',
            TIPOS: ['colaborador'],

        },
    });

    await prisma.uSUARIOS.upsert({
        where: { EMAIL: 'squirtle@puppycarepet.com.br' },
        create: {
            NOME: 'Squirtle',
            DESCRICAO: 'Usuário operador',
            SENHA_HASH: senhaOperador,
            EMAIL: 'squirtle@puppycarepet.com.br',
            FOTO_USUARIO: '/usuarios/squirtle.jpg',
            TIPOS: ['condutor'],

        },
        update: {
            NOME: 'Squirtle',
            DESCRICAO: 'Usuário operador',
            SENHA_HASH: senhaOperador,
            FOTO_USUARIO: '/usuarios/squirtle.jpg',
            TIPOS: ['colaborador'],

        },
    });

    // Ajuste genérico de FOTO_USUARIO null, se ainda quiser manter
    await prisma.uSUARIOS.updateMany({
        where: { FOTO_USUARIO: null },
        data: { FOTO_USUARIO: '/teste.png' },
    });

    // Atualiza admin e operador se existirem
    await prisma.uSUARIOS.updateMany({
        where: { EMAIL: 'admin@puppycarepet.com.br' },
        data: {
            NOME: 'Joel Miller',
            FOTO_USUARIO: '/joel-miller.webp',
            TIPOS: ['administrador'],
        },
    });

    await prisma.uSUARIOS.upsert({
        where: { EMAIL: 'Robin@puppycarepet.com.br' },
        create: {
            NOME: 'Robin',
            DESCRICAO: 'Usuário operador',
            SENHA_HASH: senhaAdmin,
            EMAIL: 'Robin@puppycarepet.com.br',
            FOTO_USUARIO: '/usuarios/robin.jpg',
            TIPOS: ['administrador', 'colaborador'],

        },
        update: {
            NOME: 'Robin',
            DESCRICAO: 'Usuário operador',
            FOTO_USUARIO: '/usuarios/robin.jpg',
            SENHA_HASH: senhaAdmin,
            TIPOS: ['administrador', 'colaborador'],

        },
    });

    console.log('✅ USUARIOS exemplo upserted');
}
