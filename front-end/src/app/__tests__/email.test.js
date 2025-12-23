// Teste do padrão de validação de e-mail
// Regras: formato válido de e-mail conforme HTML5 specification

const testCases = [
  // Casos que devem passar ✅
  { email: "user@example.com", esperado: true },
  { email: "john.doe@example.com", esperado: true },
  { email: "maria_santos@domain.co.uk", esperado: true },
  { email: "teste123@test.org", esperado: true },
  { email: "contact@company.io", esperado: true },
  { email: "user+tag@example.com", esperado: true },
  { email: "first.last@example.com", esperado: true },
  { email: "a@b.co", esperado: true },
  { email: "123@example.com", esperado: true },
  { email: "test.email@sub.example.com", esperado: true },

  // Casos que devem falhar ❌
  { email: "invalid.email", esperado: false }, // sem @
  { email: "@example.com", esperado: false }, // sem nome antes de @
  { email: "user@", esperado: false }, // sem domínio
  { email: "user..name@example.com", esperado: false }, // pontos duplos
  { email: "user@example", esperado: false }, // sem TLD
  { email: "user @example.com", esperado: false }, // espaço antes de @
  { email: "user@exam ple.com", esperado: false }, // espaço no domínio
  { email: "user@.com", esperado: false }, // domínio incompleto
  { email: "", esperado: false }, // vazio
  { email: "user@example..com", esperado: false }, // pontos duplos no domínio
  { email: "user name@example.com", esperado: false }, // espaço no nome
];

console.log("🧪 Testando padrão de validação de e-mail:\n");

let passadas = 0;
let falhadas = 0;

// Padrão de e-mail simples (compatível com HTML5 input type="email")
// Formato: usuario@dominio.extensao
const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

testCases.forEach(({ email, esperado }) => {
  const resultado = pattern.test(email);
  const status = resultado === esperado ? "✅ PASSOU" : "❌ FALHOU";
  const detalhes = resultado ? "ACEITO" : "REJEITADO";
  console.log(`${status} | "${email}" → ${detalhes}`);
  if (resultado === esperado) passadas++; else falhadas++;
});

console.log(`\n📊 Resultado: ${passadas} passadas, ${falhadas} falhadas`);
if (falhadas === 0) console.log("✨ Todos os testes passaram!");
