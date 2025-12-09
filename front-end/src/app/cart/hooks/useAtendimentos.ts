import { useEffect, useState } from "react";
import { getAtendimentos } from "../services/cartService";
import { Atendimento } from "../types/atendimento";

export function useAtendimentos() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<Atendimento[]>([]);

  useEffect(() => {
    setLoading(true);
    getAtendimentos()
      .then(setData)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { atendimentos: data, loading, error };
}
