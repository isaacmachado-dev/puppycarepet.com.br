import { useAtendimentos } from "../hooks/useAtendimentos";

export function CartListExample() {
  const { atendimentos, loading, error } = useAtendimentos();

  if (loading) return <div>Carregando atendimentos...</div>;
  if (error) return <div style={{color:'red'}}>Erro: {error}</div>;

  return (
    <ul>
      {atendimentos.map((a) => (
        <li key={a.ID_ATENDIMENTO}>
          Atendimento #{a.ID_ATENDIMENTO} | Cliente: {a.ID_CLIENTE} | Pet: {a.ID_PET} | Serviço: {a.ID_SERVICO} | Valor: {a.VALOR_COBRADO} | Tipo: {a.TIPO} | Notas: {a.NOTAS}
        </li>
      ))}
    </ul>
  );
}
