import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function seedUsuarios() {
  const senhaAdmin = await bcrypt.hash('admin123', 10);

  const usuarios = [
    {
      NOME: 'Mônica Pereira',
      DESCRICAO: 'Usuário administrador',
      SENHA_HASH: senhaAdmin,
      EMAIL: 'monica@puppycarepet.com.br',
      FOTO: '/web-app-manifest-512x512.png',
      TIPOS: ['administrador'],
    },
    {
      NOME: 'Joel Miller',
      DESCRICAO: 'Usuário administrador',
      SENHA_HASH: senhaAdmin,
      EMAIL: 'joel.miller@puppycarepet.com.br',
      FOTO: '/usuarios/joel-miller.webp',
      TIPOS: ['administrador'],
    },
    {
      NOME: 'Rock Lee',
      DESCRICAO: 'Usuário administrador',
      SENHA_HASH: senhaAdmin,
      EMAIL: 'rock.lee@puppycarepet.com.br',
      FOTO: '/usuarios/rock-lee.jpg',
      TIPOS: ['condutor'],
    },
    {
      NOME: 'Mortyyyyyy',
      DESCRICAO: 'Usuário administrador',
      SENHA_HASH: senhaAdmin,
      EMAIL: 'morty.smith@puppycarepet.com.br',
      FOTO: '/usuarios/rick.gif',
      TIPOS: ['administrador'],
    },
    {
      NOME: 'Poo',
      DESCRICAO: 'Usuário administrador',
      SENHA_HASH: senhaAdmin,
      EMAIL: 'po@et.com.br',
      FOTO: '/usuarios/po.jpg',
      TIPOS: ['colaborador', 'condutor'],
    },
    {
      NOME: 'Squirtle',
      DESCRICAO: 'Usuário administrador',
      SENHA_HASH: senhaAdmin,
      EMAIL: 'squirtle@puppycarepet.com.br',
      FOTO: '/usuarios/squirtle.jpg',
      TIPOS: ['colaborador'],
    },
    {
      NOME: 'Robin',
      DESCRICAO: 'Usuário administrador',
      SENHA_HASH: senhaAdmin,
      EMAIL: 'robin@puppycarepet.com.br',
      FOTO: '/usuarios/robin.jpg',
      TIPOS: ['colaborador', 'administrador'],
    }
  ];

  // ✅ NORMALIZA TODOS os nomes (corrige encoding)
  const usuariosNormalizados = usuarios.map(u => ({
    ...u,
    NOME: u.NOME.normalize('NFC'),
    DESCRICAO: u.DESCRICAO?.normalize('NFC') || u.DESCRICAO,
  }));

  await prisma.uSUARIOS.createMany({
    data: usuariosNormalizados,
    skipDuplicates: true,
  });

  console.log('✅ USUARIOS inseridos (encoding corrigido)');
}

async function seedServicos() {
  const count = await prisma.sERVICOS.count();
  if (count === 0) {
    await prisma.sERVICOS.createMany({
      data: [
        {
          NOME: 'Carlos',
          DESCRICAO: 'Banho completo para pets',
          VALOR: '79.90',
        },
        {
          NOME: 'Marisa',
          DESCRICAO: 'Tosa higiênica e completa',
          VALOR: '120.00',
        },
      ],
    });
    console.log('✅ SERVICOS created');
  } else {
    console.log('ℹ️ SERVICOS already have data, skipping creation');
  }
  const all = await prisma.sERVICOS.findMany();
  return {
    byName: Object.fromEntries(all.map((s) => [s.NOME, s])),
    list: all,
  } as const;
}

async function seedClientes() {
  const count = await prisma.cLIENTES.count();
  if (count === 0) {
    await prisma.cLIENTES.createMany({
      data: [
        {
          NOME: 'Maria Silva',
          TELEFONE: '11999990001',
          ENDERECO: 'Rua A, 123 - Centro, São Paulo/SP',
        },
        {
          NOME: 'João Pereira',
          TELEFONE: '11988880002',
          ENDERECO: 'Av. B, 200 - Bela Vista, São Paulo/SP',
        },
      ],
    });
    console.log('✅ CLIENTES created');
  } else {
    console.log('ℹ️ CLIENTES already have data, skipping creation');
  }
  const all = await prisma.cLIENTES.findMany();
  return {
    byName: Object.fromEntries(all.map((c) => [c.NOME, c])),
    list: all,
  } as const;
}

async function seedPacotes(clienteId: number, servicoId: number) {
  const count = await prisma.pACOTES.count({
    where: { ID_CLIENTE: clienteId, ID_SERVICO: servicoId },
  });
  if (count === 0) {
    await prisma.pACOTES.create({
      data: {
        ID_CLIENTE: clienteId,
        ID_SERVICO: servicoId,
        QTD_BANHOS: 4,
      },
    });
    console.log('✅ PACOTES created');
  } else {
    console.log('ℹ️ PACOTES já existe para este cliente/serviço, pulando criação');
  }
}

async function seedAtendimentoImagens(atendimentoId: number) {
  const count = await prisma.aTENDIMENTO_IMAGENS.count({
    where: { ID_ATENDIMENTO: atendimentoId },
  });
  if (count === 0) {
    await prisma.aTENDIMENTO_IMAGENS.createMany({
      data: [
        {
          ID_ATENDIMENTO: atendimentoId,
          CAMINHO_IMAGEM: '/uploads/atendimentos/1/foto1.jpg',
        },
      ],
    });
    console.log('✅ ATENDIMENTO_IMAGENS criado');
  } else {
    console.log('ℹ️ ATENDIMENTO_IMAGENS já existe para este atendimento, pulando criação');
  }
}

async function main() {
  console.log('🔄 Enviando banco de dados (novo esquema)...');

  // Independent first
  const { byName: servicosByName } = await seedServicos();
  const { byName: clientesByName } = await seedClientes();
  await seedUsuarios();

  // Dependent
  const maria = clientesByName['Maria Silva'] || 
    (await prisma.cLIENTES.findFirst({ orderBy: { ID_CLIENTE: 'asc' } }))!;
  const banho = servicosByName['Carlos'] ||  // ← 'Carlos' do seedServicos
    (await prisma.sERVICOS.findFirst({ orderBy: { ID_SERVICO: 'asc' } }))!;

  await seedPacotes(maria.ID_CLIENTE, banho.ID_SERVICO);

  console.log('🌟 Seed concluído!');
}

main()
  .catch((e) => {
    console.error('❌ Falha no seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
