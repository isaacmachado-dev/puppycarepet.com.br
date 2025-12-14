import { NextRequest, NextResponse } from "next/server";

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:4000";

export async function POST(request: NextRequest) {
    const body = await request.json();

    const res = await fetch(`${BACKEND_URL}/usuarios/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email: body.email,
            senha: body.senha,
        }),
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
        return NextResponse.json(
            data.error || data || { error: "Erro ao autenticar" },
            { status: res.status },
        );
    }

    return NextResponse.json(data);
}
