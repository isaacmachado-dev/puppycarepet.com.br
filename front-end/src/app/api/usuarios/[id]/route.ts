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
  const { id } = await context.params
  const body = await request.json()

  console.log("PATCH /api/usuarios/[id] recebida com id:", id, "body:", body)

  // front manda { name, email, type }; backend espera NOME/EMAIL (e opcionalmente DESCRICAO/SENHA)
  const payload: UpdateUsuarioPayload = {
    NOME: body.name,
    EMAIL: body.email,
    TIPOS: body.type,
  }

  const res = await fetch(`${BACKEND_URL}/usuarios/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })

  console.log("Resposta do backend:", res.status)

  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    console.error("Erro do backend ao atualizar usuário:", res.status, err)

    return NextResponse.json(
      { error: "Erro ao atualizar usuário", detail: err },
      { status: res.status },
    )
  }

  const data = await res.json()
  return NextResponse.json(data)
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
