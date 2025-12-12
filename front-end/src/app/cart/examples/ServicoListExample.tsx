import { useEffect, useState } from "react";
import { Servico } from "../types/servico";

export function ServicoListExample() {
  const [servicos, setServicos] = useState<Servico[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/servicos")
      .then((res) => res.json())
      .then(setServicos)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Carregando serviços...</div>;
  if (error) return <div style={{color:'red'}}>Erro: {error}</div>;

  return (
    <ul>
      {servicos.map((s) => (
        <li key={s.ID_SERVICO}>
          {s.NOME} - R$ {s.VALOR}
        </li>
      ))}
    </ul>
  );
}
