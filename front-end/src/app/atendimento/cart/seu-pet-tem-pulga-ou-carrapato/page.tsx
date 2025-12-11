"use client";
import { useState } from "react";
import { CartFleaTick } from "../components/CartFleaTick";
import { CartTitleHeader } from "../components/CartTitleHeader";
import { CartSubTitleHeader } from "../components/CartSubTitleHeader";
import { CartButton } from "../components/CartButton";

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
    const [activeOption, setActiveOption] = useState("Não tem");

    return (
      <section className="bg-white p-10 rounded-xl shadow-lg w-3/4">
        <CartTitleHeader
          title="Seu pet tem pulga ou carrapato?"
          backStep="seu-pet-tem-pulga-ou-carrapato"
        />
        <CartSubTitleHeader subtitle="Essa informação é importante para garantirmos a segurança do seu pet e dos nossos profissionais durante o atendimento." />
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 w-full max-w-lg">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-4">
            <span className="font-semibold mb-2 text-sm text-gray-700">
              <CartFleaTick
                label="Selecione uma opção"
                value={activeOption}
                setValue={setActiveOption}
              />
              <input
                type="hidden"
                name="pulgaOuCarrapato"
                value={activeOption}
              />
            </span>
          </div>
          <div className="flex w-full justify-end mt-6">
            <CartButton nextHref="/atendimento/cart/qual-e-o-temperamento-do-seu-pet" />
          </div>
        </form>
      </section>
    );
  };

  return <ToolbarButtonGroup />;
}
