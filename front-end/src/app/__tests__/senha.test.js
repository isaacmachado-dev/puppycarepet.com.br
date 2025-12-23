// Teste do padrão de validação de senha
// Regras: 6 a 14 caracteres, contendo pelo menos uma letra e um número

const testCases = [
  // Casos que devem passar ✅
  { senha: "abc123", esperado: true },
  { senha: "123abc", esperado: true },
  { senha: "a1b2c3d4", esperado: true },
  { senha: "Senha2024", esperado: true },
  { senha: "A1b2C3d4E5", esperado: true },
  { senha: "abc123DEF456", esperado: true },
  { senha: "Z9y8x7w6", esperado: true },

  // Casos que devem falhar ❌
  { senha: "abc", esperado: false }, // curta demais
  { senha: "12345", esperado: false }, // só números
  { senha: "abcdef", esperado: false }, // só letras
  { senha: "abc12", esperado: false }, // 5 chars
  { senha: "abc123def456ghi7890", esperado: false }, // 19 chars (muito longa)
  { senha: "!!!!!!", esperado: false }, // só símbolos
  { senha: "abc!!!", esperado: false }, // sem número
  { senha: "123!!!", esperado: false }, // sem letra
  { senha: "     ", esperado: false }, // espaços
];

console.log("🧪 Testando padrão de validação de senha:\n");

let passadas = 0;
let falhadas = 0;

// Padrão: pelo menos uma letra, pelo menos um dígito, 6 a 14 chars, apenas letras e números
const pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,14}$/;

testCases.forEach(({ senha, esperado }) => {
  const resultado = pattern.test(senha);
  const status = resultado === esperado ? "✅ PASSOU" : "❌ FALHOU";
  const detalhes = resultado ? "ACEITO" : "REJEITADO";
  console.log(`${status} | "${senha}" → ${detalhes}`);
  if (resultado === esperado) passadas++; else falhadas++;
});

console.log(`\n📊 Resultado: ${passadas} passadas, ${falhadas} falhadas`);
if (falhadas === 0) console.log("✨ Todos os testes passaram!");
