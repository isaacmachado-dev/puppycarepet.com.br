// app/api/usuarios/route.ts
import { NextRequest, NextResponse } from 'next/server';

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:4000';

export async function GET() {
  console.log('🔍 BACKEND_URL:', BACKEND_URL);

  const res = await fetch(`${BACKEND_URL}/usuarios`, {
    cache: 'no-store',
    headers: {
      'Accept': 'application/json; charset=utf-8',  // ← ADICIONADO
      'Accept-Charset': 'utf-8'                    // ← ADICIONADO
    }
  });

  if (!res.ok) {
    return NextResponse.json(
      { error: 'Erro ao buscar usuários' },
      { status: res.status },
    );
  }

  const rawText = await res.text();
  const data = JSON.parse(rawText);

  return NextResponse.json(data, {
    headers: {
      'Content-Type': 'application/json; charset=utf-8'  // ← GARANTE UTF8
    }
  });
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
