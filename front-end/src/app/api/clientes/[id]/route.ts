// app/api/clientes/[id]/route.ts
import { NextRequest, NextResponse } from "next/server"

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:4000"



export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params

  const res = await fetch(`${BACKEND_URL}/clientes/${id}`, {
    cache: "no-store",
  })

  if (!res.ok) {
    return NextResponse.json(
      { error: "Cliente não encontrado" },
      { status: res.status },
    )
  }

  const data = await res.json()
  return NextResponse.json(data)
}

type UpdateClientePayload = {
  NOME: string
  EMAIL: string
  TIPOS: string[]
}

export async function PATCH(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;

  const formData = await request.formData();
  const NOME = formData.get("NOME") as string;
  const ENDERECO = formData.get("ENDERECO") as string;

  console.log("Convertendo FormData → JSON:", { NOME, ENDERECO });

  // ✅ FormData → JSON (backend exige!)
  const res = await fetch(`${BACKEND_URL}/clientes/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"  // ← CRÍTICO!
    },
    body: JSON.stringify({
      NOME,
      ENDERECO
    }),
  });

  console.log("Backend status:", res.status);

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    return NextResponse.json({ error: err }, { status: res.status });
  }

  return NextResponse.json(await res.json());
}





export async function DELETE(
  _request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params

  const res = await fetch(`${BACKEND_URL}/clientes/${id}`, {
    method: "DELETE",
  })

  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    console.error("Erro do backend ao deletar cliente:", res.status, err)

    return NextResponse.json(
      { error: "Erro ao deletar cliente.", detail: err },
      { status: res.status },
    )
  }

  return NextResponse.json({ success: true })
}