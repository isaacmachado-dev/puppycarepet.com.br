import { useState } from "react";
import { createAtendimento } from "../services/cartService";
import { Atendimento } from "../types/atendimento";

export function useCreateAtendimento() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<Atendimento | null>(null);

  async function submitAtendimento(payload: Partial<Atendimento>) {
    setLoading(true);
    setError(null);
    try {
      const result = await createAtendimento(payload);
      setData(result);
      return result;
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
        throw err;
      } else {
        setError("Erro desconhecido");
        throw new Error("Erro desconhecido");
      }
    } finally {
      setLoading(false);
    }
  }

  return { submitAtendimento, loading, error, data };
}
