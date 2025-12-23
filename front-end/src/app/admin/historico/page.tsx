"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { getAtendimentos } from "../../cart/services/cartService";
import type { Atendimento } from "../../cart/types/atendimento";

// Extende o tipo para incluir relações retornadas pelo backend
type AtendimentoComRelacoes = Atendimento & {
  CLIENTE?: { NOME?: string };
  PET?: { NOME?: string };
  SERVICO?: { NOME?: string };
};

export default function HistoricoPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState<string>("");
  const [atendimentos, setAtendimentos] = useState<AtendimentoComRelacoes[]>(
    []
  );
  const [usuarioId, setUsuarioId] = useState<string | null>(null);
  const [clienteId, setClienteId] = useState<string | null>(null);
  const [roles, setRoles] = useState<string[]>([]);

  useEffect(() => {
    const userId =
      typeof window !== "undefined" ? localStorage.getItem("user_id") : null;
    if (!userId) {
      router.replace("/login");
      return;
    }
    setUsuarioId(userId);

    // Carrega perfis e cliente_id para ajustar visualização (admin vê todos)
    if (typeof window !== "undefined") {
      try {
        const stored = localStorage.getItem("user_roles");
        const parsed = stored ? (JSON.parse(stored) as string[]) : [];
        setRoles(Array.isArray(parsed) ? parsed : []);
      } catch {
        setRoles([]);
      }
      const cid = localStorage.getItem("cliente_id");
      if (cid) setClienteId(cid);
    }

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
    // Administradores visualizam todos os atendimentos
    const isAdmin = roles.includes("administrador");
    if (isAdmin) return atendimentos;

    // Preferir cliente_id quando disponível; senão, cair para user_id (legado)
    const idRef = clienteId ?? usuarioId;
    if (!idRef) return [];
    return atendimentos.filter(
      (item) => String(item.ID_CLIENTE) === String(idRef)
    );
  }, [atendimentos, usuarioId, clienteId, roles]);

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
          <h1 className="text-2xl font-bold text-gray-900">
            Seus atendimentos
          </h1>
        </header>

        {meusAtendimentos.length === 0 ? (
          <div className="text-gray-600">
            Nenhum atendimento encontrado para sua conta.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-700">
              <thead>
                <tr className="border-b bg-gray-100 text-gray-900">
                  <th className="py-3 px-4">Serviço</th>
                  <th className="py-3 px-4">Pet</th>
                  <th className="py-3 px-4">Cliente</th>
                  <th className="py-3 px-4">Tipo</th>
                  <th className="py-3 px-4">Valor</th>
                  <th className="py-3 px-4">Notas</th>
                  <th className="py-3 px-4">Data</th>
                </tr>
              </thead>
              <tbody>
                {meusAtendimentos.map((item) => (
                  <tr
                    key={
                      item.PUBLIC_ID ??
                      item.ID_ATENDIMENTO ??
                      `${item.ID_CLIENTE}-${item.CREATED_AT ?? item.TIPO ?? ""}`
                    }
                    className="border-b last:border-none"
                  >
                    <td className="py-3 px-4">
                      {item.SERVICO?.NOME ?? item.ID_SERVICO}
                    </td>
                    <td className="py-3 px-4">
                      {item.PET?.NOME ?? item.ID_PET}
                    </td>
                    <td className="py-3 px-4">
                      {item.CLIENTE?.NOME ?? item.ID_CLIENTE}
                    </td>
                    <td className="py-3 px-4">{item.TIPO}</td>
                    <td className="py-3 px-4">
                      {item.VALOR_COBRADO?.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </td>
                    <td
                      className="py-3 px-4 max-w-xs truncate"
                      title={item.NOTAS ?? ""}
                    >
                      {item.NOTAS ?? "-"}
                    </td>
                    <td className="py-3 px-4">
                      {item.CREATED_AT
                        ? new Date(item.CREATED_AT).toLocaleString("pt-BR")
                        : "-"}
                    </td>
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
