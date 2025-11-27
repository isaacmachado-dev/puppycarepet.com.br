// app/api/usuarios/route.ts
import { NextResponse } from 'next/server';

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
