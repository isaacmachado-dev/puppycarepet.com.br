import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function seedUsuarios() {
  // Usuários de exemplo (admin e clientes)
  const senhaAdmin = await bcrypt.hash('admin123', 10);
  const senhaCliente = await bcrypt.hash('cliente123', 10);

  await prisma.uSUARIOS.createMany({
    data: [
      {
        NOME: 'Mônica Pereira',
        DESCRICAO: 'Usuário administrador',
        SENHA_HASH: senhaAdmin,
        EMAIL: 'monica@puppycarepet.com.br',
        FOTO: '/usuarios/monica.jpg',
        TIPOS: ['administrador'],
      },
      {
        NOME: 'Joel Miller',
        DESCRICAO: 'Usuário cliente',
        SENHA_HASH: senhaAdmin,
        EMAIL: 'joel.miller@puppycarepet.com.br',
        FOTO: '/usuarios/joel-miller.webp',
        TIPOS: ['administrador'],
      },
      {
        NOME: 'Rock Lee',
        DESCRICAO: 'Usuário cliente',
        SENHA_HASH: senhaAdmin,
        EMAIL: 'rock.lee@puppycarepet.com.br',
        FOTO: '/usuarios/rock-lee.jpg',
        TIPOS: ['condutor', 'colaborador', 'condutor'],
      },
      {
        NOME: 'Morty Smith',
        DESCRICAO: 'Usuário cliente',
        SENHA_HASH: senhaAdmin,
        EMAIL: 'morty.smith@puppycarepet.com.br',
        FOTO: '/usuarios/rick.gif',
        TIPOS: ['administrador'],
      },
      {
        NOME: 'Po',
        DESCRICAO: 'Usuário cliente',
        SENHA_HASH: senhaAdmin,
        EMAIL: 'po@et.com.br',
        FOTO: '/usuarios/po.jpg',
        TIPOS: ['colaborador', 'condutor'],
      },
      {
        NOME: 'Squirtle',
        DESCRICAO: 'Usuário cliente',
        SENHA_HASH: senhaAdmin,
        EMAIL: 'squirtle@puppycarepet.com.br',
        FOTO: '/usuarios/squirtle.jpg',
        TIPOS: ['colaborador'],
      },
      {
        NOME: 'Robin',
        DESCRICAO: 'Usuário cliente',
        SENHA_HASH: senhaAdmin,
        EMAIL: 'robin@puppycarepet.com.br',
        FOTO: '/usuarios/robin.jpg',
        TIPOS: ['colaborador', 'administrador'],
      },
    ],
    skipDuplicates: true,
  });
  console.log('✅ USUARIOS exemplo inseridos');
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
  // return map of services by name for convenience
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

// async function seedPets(clienteId: number) {
//   const count = await prisma.pETS.count({ where: { ID_CLIENTE: clienteId } });
//   if (count === 0) {
//     await prisma.pETS.createMany({
//       data: [
//         {
//           ID_PET: 1,
//           NOME: 'Rex',
//           ESPECIE: 'Cachorro',
//           IDADE: 8,
//           RACA: 'Vira-lata',
//           PORTE: 'Médio',
//           DATA_NASC: new Date('2020-01-01'),
//           ID_CLIENTE: clienteId,

//         },
//         {
//           ID_PET: 2,
//           NOME: 'Luna',
//           ESPECIE: 'Gato',
//           IDADE: 5,
//           RACA: 'Siamês',
//           PORTE: 'Pequeno',
//           DATA_NASC: new Date('2019-06-10'),
//           ID_CLIENTE: clienteId,
//         },
//       ],
//     });
//     console.log('✅ PETS criado');
//   } else {
//     console.log(
//       'ℹ️ PETS já existe para cliente, pulando criação',
//     );
//   }
//   const all = await prisma.pETS.findMany({ where: { ID_CLIENTE: clienteId } });
//   return all;
// }

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
    console.log(
      'ℹ️ PACOTES já existe para este cliente/serviço, pulando criação',
    );
  }
}

// async function seedAtendimentos(
//   clienteId: number,
//   petId: number,
//   servicoId: number,
// ) {
//   const count = await prisma.aTENDIMENTOS.count({
//     where: { ID_CLIENTE: clienteId, ID_PET: petId, ID_SERVICO: servicoId },
//   });
//   if (count === 0) {
//     const atendimento = await prisma.aTENDIMENTOS.create({
//       data: {
//         ID_CLIENTE: clienteId,
//         ID_PET: petId,
//         ID_SERVICO: servicoId,
//         // HORARIO_ATENDIMENTO: '14:00',
//         VALOR_COBRADO: '79.90',
//         PULGAS: true,
//         CARRAPATOS: false,
//         DATA_ATENDIMENTO: new Date(),
//         SERVICOS_DISPONIVEIS: ['Banho', 'Tosa'],
//         NOTAS: 'Primeira visita',
//       },
//     });
//     console.log('✅ ATENDIMENTOS criado');
//     return atendimento;
//   } else {
//     console.log(
//       'ℹ️ ATENDIMENTOS já existe para este cliente/pet/serviço, buscando o primeiro',
//     );
//     return prisma.aTENDIMENTOS.findFirst({
//       where: { ID_CLIENTE: clienteId, ID_PET: petId, ID_SERVICO: servicoId },
//       orderBy: { ID_ATENDIMENTO: 'asc' },
//     }) as any;
//   }
// }

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
    console.log(
      'ℹ️ ATENDIMENTO_IMAGENS já existe para este atendimento, pulando criação',
    );
  }
}

async function main() {
  console.log('🔄 Enviando banco de dados (novo esquema)...');

  // Independent first
  const { byName: servicosByName } = await seedServicos();
  const { byName: clientesByName } = await seedClientes();
  await seedUsuarios();

  // Dependent
  const maria =
    clientesByName['Maria Silva'] ||
    (await prisma.cLIENTES.findFirst({ orderBy: { ID_CLIENTE: 'asc' } }))!;
  const banho =
    servicosByName['Banho'] ||
    (await prisma.sERVICOS.findFirst({ orderBy: { ID_SERVICO: 'asc' } }))!;

  //   const pets = await seedPets(maria.ID_CLIENTE);
  // const pet =
  //   pets[0] ||
  //   (await prisma.pETS.findFirst({
  //     where: { ID_CLIENTE: maria.ID_CLIENTE },
  //     orderBy: { ID_PET: 'asc' },
  //   }))!;

  await seedPacotes(maria.ID_CLIENTE, banho.ID_SERVICO);
  // const atendimento = await seedAtendimentos(
  //   maria.ID_CLIENTE,
  //   pet.ID_PET,
  //   banho.ID_SERVICO,
  // );
  // await seedAtendimentoImagens(atendimento.ID_ATENDIMENTO);

  // console.log('🌟 Envio concluído (novo esquema)!');
}

main()
  .catch((e) => {
    console.error('❌ Falha no envio:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
