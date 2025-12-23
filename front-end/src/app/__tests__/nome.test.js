// Teste do padrão de validação de nome
// Regras: nome e sobrenome, apenas letras (com suporte a acentuação)

const testCases = [
  // Casos que devem passar ✅
  { nome: "João Silva", esperado: true },
  { nome: "Maria Santos", esperado: true },
  { nome: "José Pereira", esperado: true },
  { nome: "Ana Paula Costa", esperado: true },
  { nome: "Carlos Alberto", esperado: true },
  { nome: "Francisca Oliveira", esperado: true },
  { nome: "José da Silva", esperado: true },
  { nome: "Jéssica Araújo", esperado: true },

  // Casos que devem falhar ❌
  { nome: "João", esperado: false }, // apenas um nome
  { nome: "Maria123", esperado: false }, // contém números
  { nome: "José@Silva", esperado: false }, // contém símbolo
  { nome: "123 456", esperado: false }, // apenas números
  { nome: "João ", esperado: false }, // espaço no final
  { nome: " Maria", esperado: false }, // espaço no início
  { nome: "Ana  Paula", esperado: false }, // espaços duplos
  { nome: "Pedro Silva!", esperado: false }, // contém símbolo
  { nome: "A B C", esperado: true }, // iniciais com espaço (válido)
  { nome: "", esperado: false }, // vazio
  { nome: "João Silva123", esperado: false }, // números no final
];

console.log("🧪 Testando padrão de validação de nome:\n");

let passadas = 0;
let falhadas = 0;

// Padrão: nome e sobrenome, apenas letras com suporte a acentuação
const pattern = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(\s[A-Za-zÀ-ÖØ-öø-ÿ]+)+$/;

testCases.forEach(({ nome, esperado }) => {
  const resultado = pattern.test(nome);
  const status = resultado === esperado ? "✅ PASSOU" : "❌ FALHOU";
  const detalhes = resultado ? "ACEITO" : "REJEITADO";
  console.log(`${status} | "${nome}" → ${detalhes}`);
  if (resultado === esperado) passadas++; else falhadas++;
});

console.log(`\n📊 Resultado: ${passadas} passadas, ${falhadas} falhadas`);
if (falhadas === 0) console.log("✨ Todos os testes passaram!");
