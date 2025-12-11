"use client";
import { useState } from "react";
import { CartButton } from "../components/CartButton";
import { CartAlergicSick } from "../components/CartAlergicSick";
import { CartTitleHeader } from "../components/CartTitleHeader";
import { CartSubTitleHeader } from "../components/CartSubTitleHeader";

export default function FleasOrTicksPage() {
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    try {
      // Simulando para o envio dos dados
      console.log("Formulário enviado com sucesso.");
    } catch (err) {
      console.error(err);
      setError("Erro ao enviar informações. Tente novamente.");
    }
  }

  const ToolbarButtonGroup = () => {
    // Removido activeOption, agora cada grupo tem seu próprio estado

    return (
      <section className="bg-white p-10 rounded-xl shadow-lg w-3/4">
        <CartTitleHeader
          title="Seu pet possui alguma alergia ou alguma doença?"
          backStep="possui-alguma-alergia-ou-alguma-doenca"
        />
        <CartSubTitleHeader subtitle="Essas informações são importantes para garantirmos a segurança e o bem-estar do seu pet durante o atendimento." />
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 w-full max-w-lg">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6 mb-6">
            <span className="font-semibold mb-2 text-sm text-gray-700">
              <CartAlergicSick label="Possui alguma alergia?" />
            </span>
          </div>
          <div className="flex w-full justify-end mt-6">
            <CartButton nextHref="/atendimento/cart/servicos-disponiveis" />
          </div>
        </form>
      </section>
    );
  };

  return <ToolbarButtonGroup />;
}
