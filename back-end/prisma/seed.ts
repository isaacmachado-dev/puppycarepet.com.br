// Load Prisma Client from the generated package (ensure you ran `prisma generate`)
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🔄 Seeding database...');

  // 1) Clientes
  const clientesData = [
    {
      id: 'cli_1',
      nome: 'Maria Silva',
      email: 'maria.silva@example.com',
      telefone: '11999990001',
      cpf: '12345678901',
      endereco_logradouro: 'Rua A',
      numero: '123',
      bairro: 'Centro',
      cidade: 'São Paulo',
      uf: 'SP',
      cep: '01000-000',
      latitude: -23.55052,
      longitude: -46.633308,
      whatsapp_opt_in: true,
    },
  ] as const;

  for (const c of clientesData) {
    await prisma.clientes.upsert({
      where: { id: c.id },
      update: {
        nome: c.nome,
        email: c.email,
        telefone: c.telefone,
        cpf: c.cpf,
        endereco_logradouro: c.endereco_logradouro,
        numero: c.numero,
        bairro: c.bairro,
        cidade: c.cidade,
        uf: c.uf,
        cep: c.cep,
        latitude: c.latitude,
        longitude: c.longitude,
        whatsapp_opt_in: c.whatsapp_opt_in,
      },
      create: c,
    });
  }
  console.log('✅ Clientes seeded');

  // 2) Pets (dependem de Clientes)
  const petsData = [
    {
      id: 'pet_1',
      cliente_id: 'cli_1',
      nome: 'Rex',
      especie: 'cachorro',
      raca: 'vira-lata',
      porte: 'médio',
      nascimento: new Date('2020-01-01'),
      observacoes: 'Paciente com medo de secador',
    },
  ] as const;

  for (const p of petsData) {
    await prisma.pets.upsert({
      where: { id: p.id },
      update: {
        nome: p.nome,
        especie: p.especie,
        raca: p.raca || undefined,
        porte: p.porte || undefined,
        nascimento: p.nascimento || undefined,
        observacoes: p.observacoes || undefined,
        cliente_id: p.cliente_id,
      },
      create: p,
    });
  }
  console.log('✅ Pets seeded');

  // 3) Funcionarios (independente)
  const funcionariosData = [
    {
      id: 'func_1',
      nome: 'João Pereira',
      email: 'joao.pereira@puppycare.com',
      telefone: '11988880001',
      cargo: 'banhista',
      ativo: true,
    },
  ] as const;

  for (const f of funcionariosData) {
    await prisma.funcionarios.upsert({
      where: { email: f.email }, // email é único no schema
      update: {
        nome: f.nome,
        telefone: f.telefone,
        cargo: f.cargo,
        ativo: f.ativo,
      },
      create: f,
    });
  }
  console.log('✅ Funcionarios seeded');

  // 4) Planos (independente)
  const planosData = [
    {
      id: 'plano_1',
      nome: 'Plano Básico',
      descricao: '4 banhos por mês',
      preco: '199.90',
      banhos_incluidos: 4,
    },
    {
      id: 'plano_2',
      nome: 'Plano Premium',
      descricao: '8 banhos por mês + tosa',
      preco: '349.90',
      banhos_incluidos: 8,
    },
  ] as const;

  for (const p of planosData) {
    await prisma.planos.upsert({
      where: { id: p.id },
      update: {
        nome: p.nome,
        descricao: p.descricao || undefined,
        preco: p.preco as any,
        banhos_incluidos: p.banhos_incluidos,
      },
      create: p as any,
    });
  }
  console.log('✅ Planos seeded');

  // 5) Pacotes (dependem de Clientes e Planos)
  const pacotesData = [
    {
      id: 'ass_1',
      id_cliente: 'cli_1',
      id_plano: 'plano_1',
      datainicio: new Date(),
      datafim: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 dias
      banhos_utilizados: 1,
    },
  ] as const;

  for (const a of pacotesData) {
    await prisma.pacotes.upsert({
      where: { id: a.id },
      update: {
        id_cliente: a.id_cliente,
        id_plano: a.id_plano,
        datainicio: a.datainicio,
        datafim: a.datafim,
        banhos_utilizados: a.banhos_utilizados,
      },
      create: a,
    });
  }
  console.log('✅ Pacotes seeded');

  // 6) Ordens de Serviço (dependem de Clientes e Pets)
  const ordensData = [
    {
      id: 'ord_1',
      cliente_id: 'cli_1',
      pet_id: 'pet_1',
      tipo: 'banho',
      status: 'agendado',
      data_agendada: new Date(Date.now() + 24 * 60 * 60 * 1000),
      preco: '79.90', // pode ser string para Decimal
      observacoes: 'Primeira visita',
    },
  ] as const;

  for (const o of ordensData) {
    await prisma.ordensServicos.upsert({
      where: { id: o.id },
      update: {
        tipo: o.tipo,
        status: o.status,
        data_agendada: o.data_agendada,
        preco: o.preco as any, // Prisma aceita string para Decimal
        observacoes: o.observacoes || undefined,
        cliente_id: o.cliente_id,
        pet_id: o.pet_id,
      },
      create: o as any,
    });
  }
  console.log('✅ OrdensServicos seeded');

  // 7) Rotas (independente)
  const rotasData = [
    {
      id: 'rota_1',
      data: new Date(Date.now() + 24 * 60 * 60 * 1000),
      tipo: 'coleta',
      status: 'planejada',
      motorista: 'Carlos Souza',
      kilometragem_prevista: 12.5,
      tempo_previsto: 45,
    },
  ] as const;

  for (const r of rotasData) {
    await prisma.rotas.upsert({
      where: { id: r.id },
      update: {
        data: r.data,
        tipo: r.tipo,
        status: r.status,
        motorista: r.motorista || undefined,
        kilometragem_prevista: r.kilometragem_prevista || undefined,
        tempo_previsto: r.tempo_previsto || undefined,
      },
      create: r,
    });
  }
  console.log('✅ Rotas seeded');

  // 8) RotasParadas (dependem de Rotas e Ordens)
  const rotasParadasData = [
    {
      id: 'parada_1',
      rota_id: 'rota_1',
      ordem_id: 'ord_1',
      sequencia: 1,
      latitude: -23.55052,
      longitude: -46.633308,
      status: 'pendente',
    },
  ] as const;

  for (const rp of rotasParadasData) {
    await prisma.rotasParadas.upsert({
      where: { id: rp.id },
      update: {
        rota_id: rp.rota_id,
        ordem_id: rp.ordem_id,
        sequencia: rp.sequencia,
        latitude: rp.latitude,
        longitude: rp.longitude,
        status: rp.status,
      },
      create: rp,
    });
  }
  console.log('✅ RotasParadas seeded');

  // 9) Mensagens (dependem de Clientes)
  const mensagensData = [
    {
      id: 'msg_1',
      cliente_id: 'cli_1',
      canal: 'whatsapp',
      template: null,
      conteudo: 'Olá Maria, seu agendamento foi recebido.',
      status: 'pendente',
      meta_message_id: null,
      erro: null,
    },
  ];

  for (const m of mensagensData) {
    await prisma.mensagens.upsert({
      where: { id: m.id },
      update: {
        cliente_id: m.cliente_id,
        canal: m.canal,
        template: m.template || undefined,
        conteudo: m.conteudo,
        status: m.status,
        meta_message_id: m.meta_message_id || undefined,
        erro: m.erro || undefined,
      },
      create: m as any,
    });
  }
  console.log('✅ Mensagens seeded');

  // 10) Status (dependem de Ordens)
  const statusData = [
    {
      id: 'stat_1',
      ordem_id: 'ord_1',
      status: 'agendado',
      timestamp: new Date(),
    },
  ];

  for (const s of statusData) {
    await prisma.status.upsert({
      where: { id: s.id },
      update: {
        ordem_id: s.ordem_id,
        status: s.status,
        timestamp: s.timestamp,
      },
      create: s,
    });
  }
  console.log('✅ Status seeded');

  console.log('🌟 Seeding finished!');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
