import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
    const NEXT_PUBLIC_BACKEND_URL = "http://localhost:4000";
    const body = await request.json();

    const res = await fetch(`${NEXT_PUBLIC_BACKEND_URL}/funcionarios/${params.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),

    });

    if (!res.ok) {
        return NextResponse.json({ error: 'Falhou no ato de atualizar PATCH o funcionario' }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);

}