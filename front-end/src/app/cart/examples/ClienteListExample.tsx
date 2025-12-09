import { useEffect, useState } from "react";
import { Cliente } from "../types/cliente";

export function ClienteListExample() {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/clientes")
      .then((res) => res.json())
      .then(setClientes)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Carregando clientes...</div>;
  if (error) return <div style={{color:'red'}}>Erro: {error}</div>;

  return (
    <ul>
      {clientes.map((c) => (
        <li key={c.ID_CLIENTE}>
          {c.NOME} - {c.TELEFONE} - {c.ENDERECO}
        </li>
      ))}
    </ul>
  );
}
