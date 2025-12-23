// Teste do padrão de validação de telefone
// Regras: (XX)XXXXX-XXXX ou (XX)XXXX-XXXX, com segundo dígito 2-9

const testCases = [
  // Casos que devem passar ✅
  { telefone: "(11)99898-2828", esperado: true },
  { telefone: "(21)98765-4321", esperado: true },
  { telefone: "(85)99123-4567", esperado: true },
  { telefone: "(47)98888-1111", esperado: true },
  { telefone: "(12)99999-5555", esperado: true },
  { telefone: "(99)92222-3333", esperado: true },
  { telefone: "(11)3456-7890", esperado: true }, // com segundo dígito 3
  { telefone: "(21)5555-1234", esperado: true }, // com segundo dígito 5

  // Casos que devem falhar ❌
  { telefone: "(11)19876-5432", esperado: false }, // segundo dígito 1 (inválido)
  { telefone: "(21)09876-5432", esperado: false }, // segundo dígito 0 (inválido)
  { telefone: "(31)99876-543", esperado: false }, // faltam dígitos no final
  { telefone: "(41)98-6543", esperado: false }, // poucos dígitos no meio
  { telefone: "(51) 99876-5432", esperado: false }, // espaço após parêntese
  { telefone: "11998765432", esperado: false }, // sem formatação
  { telefone: "(71)998765432", esperado: false }, // sem hífen
  { telefone: "(1)99876-5432", esperado: false }, // falta dígito na área
  { telefone: "99876-5432", esperado: false }, // sem código de área
  { telefone: "(81)99876-54321", esperado: false }, // dígito extra no final
  { telefone: "", esperado: false }, // vazio
];

console.log("🧪 Testando padrão de validação de telefone:\n");

let passadas = 0;
let falhadas = 0;

// Padrão: (XX)XXXXX-XXXX ou (XX)XXXX-XXXX com segundo dígito 2-9
const pattern = /^(\(\d{2}\)[2-9]\d{3,4}-\d{4})$/;

testCases.forEach(({ telefone, esperado }) => {
  const resultado = pattern.test(telefone);
  const status = resultado === esperado ? "✅ PASSOU" : "❌ FALHOU";
  const detalhes = resultado ? "ACEITO" : "REJEITADO";
  console.log(`${status} | "${telefone}" → ${detalhes}`);
  if (resultado === esperado) passadas++; else falhadas++;
});

console.log(`\n📊 Resultado: ${passadas} passadas, ${falhadas} falhadas`);
if (falhadas === 0) console.log("✨ Todos os testes passaram!");
