// Serviço para integração do cart com o backend
import { Atendimento } from "../types/atendimento";

export async function createAtendimento(data: Partial<Atendimento>): Promise<Atendimento> {
  const res = await fetch("http://localhost:3000/atendimentos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error("Erro ao criar atendimento");
  return await res.json();
}

export async function getAtendimentos(): Promise<Atendimento[]> {
  const res = await fetch("http://localhost:3000/atendimentos");
  if (!res.ok) throw new Error("Erro ao buscar atendimentos");
  return await res.json();
}
