"use client";

import { AdminBlock, AdminBlockTitle } from "@/components/ui/custom/AdminSettings";
import { useCallback, useEffect, useRef, useState } from "react";
import { Cliente, ClienteAPI } from "./types/cliente";
import React from "react";
import ClientesCard from "./components/ClienteCard";

const fixNameOnlyIfBroken = (value: string): string => {
    if (!value || !value.includes('�')) return value;

    try {
        const bytes = new Uint8Array([...value].map(c => c.charCodeAt(0)));
        return new TextDecoder('utf-8').decode(bytes);
    } catch {
        return value;
    }
}



export default function ClientesPage() {

    const [loading, setLoading] = React.useState(true)
    const [clientes, setClientes] = useState<Cliente[]>([]);
    const scrollPositionRef = useRef(0)
    const [editedId, setEditedId] = useState<number | null>(null);
    const [searchName, setSearchName] = React.useState("")
    const [reload, setReload] = useState(false)



    // ✅ Memoizado com useCallback - resolve exhaustive-deps
    const fetchClientes = useCallback(() => {
        scrollPositionRef.current = window.scrollY || document.documentElement.scrollTop || 0
        setLoading(true)

        fetch("/api/clientes")
            .then(async (res) => {
                if (!res.ok) {
                    const error = await res.json().catch(() => ({}))
                    throw new Error(error?.error || "Erro ao buscar clientes")
                }

                const data = (await res.json()) as ClienteAPI[]
                console.log("CLIENTES RAW DATA:", data)

                const normalizados: Cliente[] = (Array.isArray(data) ? data : []).map((_u) => {
                    const rawName = _u.NOME ?? _u.nome ?? _u.name ?? "Sem nome"
                    const name = fixNameOnlyIfBroken(rawName)

                    return {
                        id: _u.ID_CLIENTE ?? Number(_u.id ?? _u.ID ?? 0),
                        name,
                        endereco: _u.ENDERECO ?? _u.endereco ?? "",
                        image: _u.FOTO ?? _u.avatar ?? _u.image ?? "",
                        type: (Array.isArray(_u.TIPOS)
                            ? _u.TIPOS
                            : Array.isArray(_u.type)
                                ? _u.type
                                : _u.TIPOS
                                    ? [_u.TIPOS]
                                    : _u.type
                                        ? Array.isArray(_u.type)
                                            ? _u.type
                                            : [_u.type]
                                        : []) as Cliente[],
                        roles: [],
                    }
                })

                console.log("CLIENTES NORMALIZADOS:", normalizados)
                setClientes(normalizados)
                setLoading(false)
            })
            .catch((err) => {
                console.error("Erro ao buscar clientes (front):", err)
                setLoading(false)
            })
            .finally(() => setLoading(false))
    }, [editedId]);

    // ✅ Scroll para cliente editado
    if (editedId) {
        setTimeout(() => {
            const el = document.querySelector(`[data-user-id="${editedId}"]`);
            el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            setEditedId(null);
        }, 500);
    }


    useEffect(() => {
        fetchClientes()
    }, [fetchClientes, reload])

    const filteredClientes = clientes
        .filter(cliente =>
            cliente.name.toLowerCase().includes(searchName.toLowerCase())
        )
        .sort((a, b) => b.id - a.id);  // ✅ Maior ID primeiro!

    if (loading) {
        return <div className="text-center p-10">Carregando...</div>
    }

    return (
        <AdminBlock>


            <AdminBlockTitle>Donos dos pets</AdminBlockTitle>

            <div className="w-full">
                <h2 className="dark:text-white">Nome</h2>
                <input
                    type="text"
                    placeholder="Digite o nome..."
                    className="bg-white dark:bg-[#171717] rounded-md pl-2 ext-sm font-bold w-full h-10 dark:text-white hover:text-gray-200/50 hover:text-gray-800 hover:bg-gray-200/50 transition-colors duration-300 focus:outline-2 focus:outline-black dark:hover:bg-input/50 focus:outline-transparent"
                    value={searchName}
                    onChange={(e) => setSearchName(e.target.value)}
                />
            </div>


            <ClientesCard clientes={filteredClientes} onUpdated={fetchClientes} />

        </AdminBlock>
    );


}