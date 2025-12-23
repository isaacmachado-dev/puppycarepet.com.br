// app/api/clientes/by-usuario/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:4000";

export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  const res = await fetch(`${BACKEND_URL}/clientes/by-usuario/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    return NextResponse.json(
      { error: "Cliente não encontrado para usuário", detail: err },
      { status: res.status },
    );
  }

  const data = await res.json();
  return NextResponse.json(data);
}
