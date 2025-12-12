import { useCreateAtendimento } from "../hooks/useCreateAtendimento";

export function CartCreateExample() {
  const { submitAtendimento, loading, error, data } = useCreateAtendimento();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const payload = {
      ID_CLIENTE: 1,
      ID_PET: 1,
      ID_SERVICO: 1,
      VALOR_COBRADO: 79.9,
      TIPO: "banho",
      NOTAS: (form.elements.namedItem("notas") as HTMLInputElement)?.value || undefined,
      TELEFONE_DONO: (form.elements.namedItem("telefone") as HTMLInputElement)?.value || undefined,
      IDADE_PET: (form.elements.namedItem("idade") as HTMLInputElement)?.value || undefined,
      PORTE_PET: (form.elements.namedItem("porte") as HTMLInputElement)?.value || undefined
    };
    submitAtendimento(payload);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="notas" placeholder="Notas" />
      <input name="telefone" placeholder="Telefone do dono" />
      <input name="idade" placeholder="Idade do pet" />
      <input name="porte" placeholder="Porte do pet" />
      <button type="submit" disabled={loading}>Salvar Atendimento</button>
      {error && <div style={{color:'red'}}>{error}</div>}
      {data && <div>Atendimento criado! ID: {data.ID_ATENDIMENTO}</div>}
    </form>
  );
}
