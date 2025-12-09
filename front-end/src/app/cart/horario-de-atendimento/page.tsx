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
      // Simulate form submission
      console.log("Form submitted");
    } catch (err) {
      console.error(err);
      setError("Erro ao enviar informações. Tente novamente.");
    }
  }

  const ToolbarButtonGroup = () => {
    const [activeOption, setActiveOption] = useState("09:30");

    return (
      <section>
        <CartTitleHeader title="Horário de atendimento" />
        <CartSubTitleHeader subtitle="Escolha um dos horários para buscarmos seu pet ou levar ele até nós!" />
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 w-full max-w-lg">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col col-span-1">
              <div className="flex gap-4 h-full items-end">
                <span className="font-semibold mb-2 text-sm text-gray-700">
                  <CartOpeningHours
                    label="Selecione o horário"
                    activeOption={activeOption}
                    setActiveOption={setActiveOption}
                  />
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mt-4">
              <span className="flex-1 flex justify-end">
                <CartButton nextHref="/cart/seu-pet-tem-pulga-ou-carrapato" />
              </span>
            </div>
          </div>
        </form>
      </section>
    );
  };

  return <ToolbarButtonGroup />;
}
