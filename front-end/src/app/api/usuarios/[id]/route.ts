// app/api/usuarios/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:4000';

export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } },
) {
  const res = await fetch(`${BACKEND_URL}/usuarios/${params.id}`, {
    cache: 'no-store',
  });
  if (!res.ok) {
    return NextResponse.json(
      { error: 'Usuário não encontrado' },
      { status: res.status },
    );
  }
  const data = await res.json();
  return NextResponse.json(data);
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const body = await request.json();
  const res = await fetch(`${BACKEND_URL}/usuarios/${params.id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    return NextResponse.json(
      { error: 'Erro ao atualizar usuário' },
      { status: res.status },
    );
  }
  const data = await res.json();
  return NextResponse.json(data);
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: { id: string } },
) {
  const res = await fetch(`${BACKEND_URL}/usuarios/${params.id}`, {
    method: 'DELETE',
  });
  if (!res.ok) {
    return NextResponse.json(
      { error: 'Erro ao deletar usuário' },
      { status: res.status },
    );
  }
  return NextResponse.json({ success: true });
}
