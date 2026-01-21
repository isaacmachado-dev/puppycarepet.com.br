// app/api/usuarios/[id]/route.ts
import { NextRequest, NextResponse } from "next/server"

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:4000"

export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params

  const res = await fetch(`${BACKEND_URL}/usuarios/${id}`, {
    cache: "no-store",
  })

  if (!res.ok) {
    return NextResponse.json(
      { error: "Usuário não encontrado" },
      { status: res.status },
    )
  }

  const data = await res.json()
  return NextResponse.json(data)
}

type UpdateUsuarioPayload = {
  NOME: string
  EMAIL: string
  TIPOS: string[]
}

export async function PATCH(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  const formData = await request.formData();  // ✅ FormData do UsuarioConfig
  console.log("FormData fields:", Object.fromEntries(formData));

  const res = await fetch(`${BACKEND_URL}/usuarios/${id}`, {
    method: "PATCH",
    body: formData,  // ✅ Passa FormData direto (sem JSON!)
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

  const res = await fetch(`${BACKEND_URL}/usuarios/${id}`, {
    method: "DELETE",
  })

  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    console.error("Erro do backend ao deletar usuário:", res.status, err)

    return NextResponse.json(
      { error: "Erro ao deletar usuário", detail: err },
      { status: res.status },
    )
  }

  return NextResponse.json({ success: true })
}
