// app/api/clientes/route.ts
import { NextRequest, NextResponse } from 'next/server';

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:4000';

export async function GET() {
    console.log('🔍 BACKEND_URL:', BACKEND_URL);

    const res = await fetch(`${BACKEND_URL}/clientes`, {
        cache: 'no-store',
        headers: {
            'Accept': 'application/json; charset=utf-8',  // ← ADICIONADO
            'Accept-Charset': 'utf-8'                    // ← ADICIONADO
        }
    });

    if (!res.ok) {
        return NextResponse.json(
            { error: 'Erro ao buscar clientes' },
            { status: res.status },
        );
    }

    const rawText = await res.text();
    console.log('📄 RAW Response (primeiros 300 chars):', rawText.slice(0, 300));

    const data = JSON.parse(rawText);
    console.log('✅ Parsed primeiro nome:', data[0]?.NOME);

    return NextResponse.json(data, {
        headers: {
            'Content-Type': 'application/json; charset=utf-8'  // ← GARANTE UTF8
        }
    });
}

export async function POST(request: NextRequest) {
    let body;
    const ct = request.headers.get('content-type') || '';

    if (ct.includes('multipart/form-data')) {
        // ✅ FormData (foto do admin)
        const formData = await request.formData();
        body = Object.fromEntries(formData);
        console.log('🟢 FormData POST:', body);
    } else {
        // ✅ JSON puro
        body = await request.json();
        console.log('🔵 JSON POST:', body);
    }

    // Normaliza campos backend (NOME maiúsculo)
    const payload = {
        NOME: body.name || body.NOME,
        EMAIL: body.email || body.EMAIL,
        SENHA: body.senha || body.SENHA,
        TIPOS: body.tipos || body.TIPOS,
        TELEFONE: body.telefone || body.TELEFONE,
        FOTO: body.foto || body.FOTO  // base64 ou filename
    };

    const res = await fetch(`${BACKEND_URL}/clientes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
        console.error('Backend erro:', res.status, data);
        return NextResponse.json({ error: data }, { status: res.status });
    }

    return NextResponse.json(data);
}