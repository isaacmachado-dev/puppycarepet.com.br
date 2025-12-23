export function formatPhone(value: string) {
  // Remove tudo que não for dígito
  value = value.replace(/\D/g, "");
  // Aplica máscara (99) 99999-9999 ou (99) 9999-9999
  if (value.length > 11) value = value.slice(0, 11);
  if (value.length > 10) {
    // Celular com 9 dígitos (sem espaços para alinhar com pattern do input)
    return value.replace(/(\d{2})(\d{5})(\d{4})/, "($1)$2-$3");
  } else if (value.length > 6) {
    // Fixo ou celular antigo (sem espaços)
    return value.replace(/(\d{2})(\d{4,5})(\d{0,4})/, "($1)$2-$3");
  } else if (value.length > 2) {
    return value.replace(/(\d{2})(\d{0,5})/, "($1)$2");
  } else {
    return value;
  }
}
