// Serviço para integração do cart com o backend
import { Atendimento } from "../types/atendimento";

export async function createAtendimento(data: Partial<Atendimento>): Promise<Atendimento> {
  // Preenche automaticamente ID_CLIENTE a partir de localStorage (cliente_id)
  const payload = { ...data };
  if (typeof window !== "undefined") {
    const cid = localStorage.getItem("cliente_id");
    if (!payload.ID_CLIENTE && cid) {
      payload.ID_CLIENTE = Number(cid);
    }
  }

  // Usa a rota do cart para criação, mantendo compatibilidade com o backend
  const res = await fetch("http://localhost:3000/cart/atendimento", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  if (!res.ok) throw new Error("Erro ao criar atendimento");
  return await res.json();
}

export async function getAtendimentos(): Promise<Atendimento[]> {
  // Busca os atendimentos realizados via fluxo do cart
  const res = await fetch("http://localhost:3000/cart/atendimentos");
  if (!res.ok) throw new Error("Erro ao buscar atendimentos");
  return await res.json();
}

export async function createAtendimentoWithFile(
  data: Partial<Atendimento>,
  file?: File,
): Promise<Atendimento> {
  // Cria FormData com o arquivo (se houver) e dados como JSON string no campo 'data'
  const formData = new FormData();

  // Auto-preenchimento de cliente_id
  const payload = { ...data };
  if (typeof window !== "undefined") {
    const cid = localStorage.getItem("cliente_id");
    if (!payload.ID_CLIENTE && cid) {
      payload.ID_CLIENTE = Number(cid);
    }
  }

  // Envia dados como JSON string no campo 'data' para multipart
  formData.append("data", JSON.stringify(payload));

  // Adiciona o arquivo se fornecido
  if (file) {
    formData.append("file", file);
  }

  const res = await fetch("http://localhost:3000/cart/atendimento", {
    method: "POST",
    body: formData,
  });

  if (!res.ok) throw new Error("Erro ao criar atendimento com arquivo");
  return await res.json();
}
