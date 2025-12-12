"use client";
import { useState } from "react";
import { CartButton } from "../components/CartButton";
import { CartAvailableServices } from "../components/CartAvailableServices";
import { CartTitleHeader } from "../components/CartTitleHeader";
import { CartSubTitleHeader } from "../components/CartSubTitleHeader";

export default function AvailableServicesPage() {
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    try {
      const form = e.target as HTMLFormElement;
      const temperamento =
        (form.elements.namedItem("temperamento") as HTMLInputElement)?.value ||
        "";
      // Adapte para outros campos conforme necessário
      console.log({ temperamento });
    } catch (err) {
      console.error(err);
      setError("Erro ao enviar informações. Tente novamente.");
    }
  }

  const ToolbarButtonGroup = () => {
    const [selected, setSelected] = useState<string[]>(["Tosa"]);

    return (
      <section className="bg-white p-10 rounded-xl shadow-lg w-3/4">
        <CartTitleHeader title="Qual é o temperamento do seu pet?" />
        <CartSubTitleHeader subtitle="Prezando o bem estar do seu pet e dos seus profissionais não atendemos cães agressivos." />
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 w-full max-w-lg">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          {/* Bloco único: Horários */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col col-span-1">
              <div className="flex gap-4 h-full items-end">
                <span className="w-full">
                  <CartAvailableServices
                    label="Selecione uma opção"
                    services="Banho,Tosa,Hidratação,Unhas"
                    selected={selected}
                    onChange={setSelected}
                  />
                  <input
                    type="hidden"
                    name="servicosDisponiveis"
                    value={selected.join(",")}
                    onChange={() => { }} // Placeholder to maintain structure
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-end mt-6">
            <CartButton nextHref="/cart/obrigado" />
          </div>
        </form>
      </section>
    );
  };

  return <ToolbarButtonGroup />;
}
