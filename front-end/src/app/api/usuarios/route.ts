// app/api/usuarios/route.ts
import { NextRequest, NextResponse } from 'next/server';

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:4000';

export async function GET() {
  const res = await fetch(`${BACKEND_URL}/usuarios`, { cache: 'no-store' });
  if (!res.ok) {
    return NextResponse.json(
      { error: 'Erro ao buscar usuários' },
      { status: res.status },
    );
  }
  const data = await res.json();
  return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const res = await fetch(`${BACKEND_URL}/usuarios`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    return NextResponse.json(
      data.error || data || { error: 'Erro ao criar usuário' },
      { status: res.status },
    );
  }

  return NextResponse.json(data);
}
