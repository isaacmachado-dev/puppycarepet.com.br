"use client";
import { useState } from "react";
import { CartButton } from "./components/CartButton";
import { CartAge } from "./components/CartAge";
import { CartBreedSelect } from "./components/CartBreedSelect";
import { CartInput } from "./components/CartInput";
import { CartSizeSelect } from "./components/CartSizeSelect";
import { CartSpeciesSelect } from "./components/CartSpeciesSelect";
import { CartLinkInfo } from "./components/CartLinkInfo";

export default function CartWelcome() {
  const [error, setError] = useState("");
  const [activeOption, setActiveOption] = useState("Cão");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    try {
      const form = e.target as HTMLFormElement;
      const name =
        (form.elements.namedItem("name") as HTMLInputElement)?.value || "";
      const telephone =
        (form.elements.namedItem("telephone") as HTMLInputElement)?.value || "";
      const petName =
        (form.elements.namedItem("petName") as HTMLInputElement)?.value || "";
      const petBreed =
        (form.elements.namedItem("petBreed") as HTMLSelectElement)?.value || "";
      // Adapte os IDs conforme necessário (mock ou busca real)
      const payload = {
        ID_CLIENTE: 1, // Exemplo: buscar ou criar cliente
        ID_PET: 1, // Exemplo: buscar ou criar pet
        ID_SERVICO: 1, // Exemplo: serviço padrão ou selecionado
        VALOR_COBRADO: 79.9, // Exemplo: valor fixo ou calculado
        TIPO: "banho", // Exemplo: tipo fixo ou selecionado
        NOTAS: `Nome: ${name}, Telefone: ${telephone}, Pet: ${petName}, Raça: ${petBreed}`,
      };
      const res = await fetch("http://localhost:3000/atendimentos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Erro ao salvar atendimento");
      // Sucesso: pode redirecionar ou mostrar mensagem
      alert("Atendimento salvo com sucesso!");
    } catch (err) {
      console.error(err);
      setError("Erro ao enviar informações. Tente novamente.");
    }
  }

  return (
    <section className="bg-white p-10 rounded-xl shadow-lg">
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 w-full max-w-lg">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <h2 className="font-bold text-black text-2xl mb-4 text-left w-full">
          Diga-me sobre vocês
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-3 gap-6">
          <div className="flex flex-col col-span-1">
            <span className="font-semibold mb-2 text-sm text-gray-700">
              <CartInput
                type="text"
                label="Nome do dono de pet"
                name="name"
                placeholder="Nome do dono do pet"
                className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#E72989] transition w-full "
                required
              />
            </span>
          </div>
          <div className="flex flex-col col-span-1">
            <span className="w-full font-semibold mb-2 text-sm text-gray-700">
              <CartInput
                type="tel"
                name="telephone"
                label="Telefone"
                placeholder="Telefone para contato"
                className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#E72989] transition w-full"
                required
              />
            </span>
          </div>
          <div className="flex flex-col col-span-1">
            <span className="w-full font-semibold mb-2 text-sm text-gray-700">
              <CartInput
                type="text"
                name="petName"
                label="Nome do pet"
                placeholder="Nome do pet"
                className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#E72989] transition w-full"
                required
              />
            </span>
          </div>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-4 gap-6 mt-4">
          <div className="flex flex-col col-span-1">
            <span className="w-full font-semibold mb-2 text-sm text-gray-700">
              <CartSpeciesSelect
                label="Espécie"
                value={activeOption}
                setValue={setActiveOption}
              />
            </span>
          </div>
          <div className="flex flex-col col-span-1">
            <span className="font-semibold mb-2 text-sm text-gray-700">
              <CartBreedSelect label="Raça do pet" species={activeOption} />
            </span>
          </div>
          <div className="flex flex-col col-span-1">
            <span className="font-semibold mb-2 text-sm text-gray-700">
              <CartAge label="Idade do pet" />
            </span>
          </div>
          <div className="flex flex-col col-span-1">
            <span className="font-semibold mb-2 text-sm text-gray-700">
              <CartSizeSelect label="Porte" />
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-6 items-center">
          <div>
            <CartLinkInfo />
          </div>
          <div className="flex justify-end">
            <CartButton
              nextHref="/cart/horario-de-atendimento"

            />
          </div>
        </div>
      </form>
    </section>
  );
}
