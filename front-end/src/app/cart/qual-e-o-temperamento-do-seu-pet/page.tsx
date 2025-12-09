"use client";
import { useState } from "react";
import { CartButton } from "../components/CartButton";
import { CartYourPetTemperament } from "../components/CartYourPetTemperament";
import { CartTitleHeader } from "../components/CartTitleHeader";
import { CartSubTitleHeader } from "../components/CartSubTitleHeader";

export default function YourPetTemperamentPage() {
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
    const [activeOption, setActiveOption] = useState("Bonzinho");

    return (
      <section>
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
                <span className="font-semibold mb-2 text-sm text-gray-700">
                  <CartYourPetTemperament
                    label="Selecione uma opção"
                    activeOption={activeOption}
                    setActiveOption={setActiveOption}
                  />
                  <input
                    type="hidden"
                    name="temperamento"
                    value={activeOption}
                    onChange={() => {}} // Placeholder to maintain structure
                  />
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mt-4">
              <span className="flex-1 flex justify-end">
                <CartButton nextHref="/cart/possui-alguma-alergia-ou-alguma-doenca" />
              </span>
            </div>
          </div>
        </form>
      </section>
    );
  };

  return <ToolbarButtonGroup />;
}
