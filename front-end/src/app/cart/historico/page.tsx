"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { getAtendimentos } from "../services/cartService";
import type { Atendimento } from "../types/atendimento";

export default function HistoricoPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState<string>("");
  const [atendimentos, setAtendimentos] = useState<Atendimento[]>([]);
  const [usuarioId, setUsuarioId] = useState<string | null>(null);

  useEffect(() => {
    const userId = typeof window !== "undefined" ? localStorage.getItem("user_id") : null;
    if (!userId) {
      router.replace("/login");
      return;
    }
    setUsuarioId(userId);

    const carregar = async () => {
      try {
        const lista = await getAtendimentos();
        setAtendimentos(lista);
      } catch (err) {
        console.error(err);
        setErro("Erro ao carregar histórico de atendimentos.");
      } finally {
        setLoading(false);
      }
    };

    void carregar();
  }, [router]);

  const meusAtendimentos = useMemo(() => {
    if (!usuarioId) return [];
    return atendimentos.filter((item) => String(item.ID_CLIENTE) === String(usuarioId));
  }, [atendimentos, usuarioId]);

  if (loading) {
    return (
      <section className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-600">Carregando histórico...</div>
      </section>
    );
  }

  if (erro) {
    return (
      <section className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-red-600 font-semibold">{erro}</div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-xl p-6">
        <header className="flex flex-col gap-1 mb-4">
          <p className="text-sm text-gray-500">Histórico</p>
          <h1 className="text-2xl font-bold text-gray-900">Seus atendimentos</h1>
        </header>

        {meusAtendimentos.length === 0 ? (
          <div className="text-gray-600">Nenhum atendimento encontrado para sua conta.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-700">
              <thead>
                <tr className="border-b bg-gray-100 text-gray-900">
                  <th className="py-3 px-4">Serviço</th>
                  <th className="py-3 px-4">Tipo</th>
                  <th className="py-3 px-4">Valor</th>
                  <th className="py-3 px-4">Notas</th>
                  <th className="py-3 px-4">Data</th>
                </tr>
              </thead>
              <tbody>
                {meusAtendimentos.map((item) => (
                  <tr
                    key={item.ID_ATENDIMENTO ?? `${item.ID_CLIENTE}-${item.CREATED_AT ?? item.TIPO ?? ""}`}
                    className="border-b last:border-none"
                  >
                    <td className="py-3 px-4">{item.ID_SERVICO}</td>
                    <td className="py-3 px-4">{item.TIPO}</td>
                    <td className="py-3 px-4">{item.VALOR_COBRADO?.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</td>
                    <td className="py-3 px-4 max-w-xs truncate" title={item.NOTAS ?? ""}>{item.NOTAS ?? "-"}</td>
                    <td className="py-3 px-4">{item.CREATED_AT ? new Date(item.CREATED_AT).toLocaleString("pt-BR") : "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
