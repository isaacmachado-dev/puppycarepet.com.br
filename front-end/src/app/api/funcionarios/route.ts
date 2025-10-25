import { NextResponse } from "next/server";

export async function GET() {
    const backend = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:4000";
    const res = await fetch(`${backend}/funcionarios`);

    // passa a resposta do NestJS de volta ao front
    if (!res.ok) {
        return NextResponse.json({ error: "Erro ao buscar funcionários" }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);
}
