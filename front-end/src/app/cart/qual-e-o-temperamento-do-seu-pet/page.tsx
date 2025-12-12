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
      <section className="bg-white p-10 rounded-xl shadow-lg w-3/4">
        <CartTitleHeader
          title="Qual é o temperamento do seu pet?"
          backStep="qual-e-o-temperamento-do-pet"
        />
        <CartSubTitleHeader subtitle="Prezando o bem estar do seu pet e dos seus profissionais não atendemos cães agressivos." />
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 w-full max-w-lg">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <span className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-4 cursor-pointer">
            <CartYourPetTemperament
              label="Selecione uma opção"
              activeOption={activeOption}
              setActiveOption={setActiveOption}
            />
            <input
              type="hidden"
              name="temperamento"
              value={activeOption}
              onChange={() => { }} // Adicionado para evitar aviso de campo não controlado
            />
          </span>
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
