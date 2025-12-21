"use client";
import { useState } from "react";
import { CartButton } from "../components/CartButton";
import { CartOpeningHours } from "../components/CartOpeningHours";
import { CartTitleHeader } from "../components/CartTitleHeader";
import { CartSubTitleHeader } from "../components/CartSubTitleHeader";

export default function OpeningHoursPage() {
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
    const [activeOption, setActiveOption] = useState("09:30");

    return (
      <section className="bg-white w-[90%] p-10 rounded-xl shadow-lg">
        <CartTitleHeader
          title="Horário de atendimento"
          backStep="cart"
        />
        <CartSubTitleHeader subtitle="Escolha um dos horários para buscarmos seu pet ou levar ele até nós!" />
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 w-full max-w-lg">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-4">
            <span className="font-semibold mb-2 text-sm text-gray-700">
              <CartOpeningHours
                label="Selecione o horário"
                activeOption={activeOption}
                setActiveOption={setActiveOption}
              />
            </span>
          </div>
          <div className="flex w-full justify-end mt-6">
            <CartButton nextHref="/cart/qual-e-o-temperamento-do-seu-pet" />
          </div>
        </form>
      </section>
    );
  };

  return <ToolbarButtonGroup />;
}
