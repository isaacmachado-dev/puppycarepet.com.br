import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function seedUsuariosExemplo() {
    // Usuários de exemplo (Ellie, Morty, Naruto)
    await prisma.uSUARIOS.createMany({
        data: [
            {
                NOME: 'Ellie Williams',
                DESCRICAO: 'Usuário operador',
                SENHA_HASH: 'hash_teste',
                EMAIL: 'ellie.williams@puppycarepet.com.br',
                FOTO_USUARIO: '/usuarios/ellie-williams.jpg',
                TIPOS: ['colaborador'],
            },
            {
                NOME: 'Rock Lee',
                DESCRICAO: 'Usuário operador',
                SENHA_HASH: 'hash_teste',
                EMAIL: 'rock.lee@puppycarepet.com.br',
                FOTO_USUARIO: '/usuarios/ʀᴏᴄᴋ ʟᴇᴇ.jpg',
                TIPOS: ['condutor'],
            },
            {
                NOME: 'Joel Miller',
                DESCRICAO: 'Usuário operador',
                SENHA_HASH: 'hash_teste',
                EMAIL: 'joel.miller@puppycarepet.com.br',
                FOTO_USUARIO: '/usuarios/joel-miller.webp',
                TIPOS: ['condutor', 'administrador'],
            }

        ],
        skipDuplicates: true, // evita erro se EMAIL já existir
    });


    await prisma.uSUARIOS.upsert({
        where: { EMAIL: 'rick@puppycarepet.com.br' },
        create: {
            NOME: 'Mortyyyyyyy',
            DESCRICAO: 'Usuário operador',
            SENHA_HASH: 'hash_teste',
            EMAIL: 'rick@puppycarepet.com.br',
            FOTO_USUARIO: '/usuarios/rick.gif',
        },
        update: {
            NOME: 'Mortyyyyyyy',
            DESCRICAO: 'Usuário operador',
            FOTO_USUARIO: '/usuarios/rick.gif',
        },
    });

    await prisma.uSUARIOS.upsert({
        where: { EMAIL: 'po@puppycarepet.com.br' },
        create: {
            NOME: 'Po',
            DESCRICAO: 'Usuário operador',
            SENHA_HASH: 'hash_teste',
            EMAIL: 'po@puppycarepet.com.br',
            FOTO_USUARIO: '/usuarios/★.jpg',
        },
        update: {
            NOME: 'Po',
            DESCRICAO: 'Usuário operador',
            FOTO_USUARIO: '/usuarios/★.jpg',
        },
    });

    await prisma.uSUARIOS.upsert({
        where: { EMAIL: 'rock.lee@puppycarepet.com.br' },
        create: {
            NOME: 'Rock Lee',
            DESCRICAO: 'Usuário operador',
            SENHA_HASH: 'hash_teste',
            EMAIL: 'rock.lee@puppycarepet.com.br',
            FOTO_USUARIO: '/usuarios/ʀᴏᴄᴋ ʟᴇᴇ.jpg',
        },
        update: {
            NOME: 'Rock Lee',
            DESCRICAO: 'Usuário operador',
            FOTO_USUARIO: '/usuarios/ʀᴏᴄᴋ ʟᴇᴇ.jpg',
        },
    });

    await prisma.uSUARIOS.upsert({
        where: { EMAIL: 'squirtle@puppycarepet.com.br' },
        create: {
            NOME: 'Squirtle',
            DESCRICAO: 'Usuário operador',
            SENHA_HASH: 'hash_teste',
            EMAIL: 'squirtle@puppycarepet.com.br',
            FOTO_USUARIO: '/usuarios/squirtle.jpg',
        },
        update: {
            NOME: 'Squirtle',
            DESCRICAO: 'Usuário operador',
            FOTO_USUARIO: '/usuarios/squirtle.jpg',
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
            SENHA_HASH: 'hash_teste',
            EMAIL: 'Robin@puppycarepet.com.br',
            FOTO_USUARIO: '/usuarios/robin.jpg',
        },
        update: {
            NOME: 'Robin',
            DESCRICAO: 'Usuário operador',
            FOTO_USUARIO: '/usuarios/robin.jpg',
        },
    });

    console.log('✅ USUARIOS exemplo upserted');
}
