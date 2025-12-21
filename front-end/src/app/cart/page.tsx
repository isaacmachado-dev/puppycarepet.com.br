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

      const payload = {
        ID_CLIENTE: 1,
        ID_PET: 1,
        ID_SERVICO: 1,
        VALOR_COBRADO: 79.9,
        TIPO: "banho",
        NOTAS: `Nome: ${name}, Telefone: ${telephone}, Pet: ${petName}, Raça: ${petBreed}`,
      };

      const res = await fetch("http://localhost:3000/atendimentos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Erro ao salvar atendimento");

      alert("Atendimento salvo com sucesso!");
    } catch (err) {
      console.error(err);
      setError("Erro ao enviar informações. Tente novamente.");
    }
  }

  return (
    <section className="bg-white w-[90%] p-10 rounded-xl shadow-lg">
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 w-full max-w-lg">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <h2 className="font-bold text-black text-2xl mb-4 text-left w-full">
          Diga-me sobre vocês
        </h2>

        {/* Linha 1: dono + telefone + pet */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col col-span-1">
            <span className="font-semibold mb-2 text-sm text-gray-700">
              <CartInput
                type="text"
                label="Nome do dono"
                name="name"
                placeholder="Seu nome"
                className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#E72989] transition w-full"
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
                placeholder="Nome do seu pet"
                className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#E72989] transition w-full"
                required
              />
            </span>
          </div>
        </div>

        {/* Linha 2: espécie, raça, idade, porte */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
          <div className="flex flex-col">
            <span className="w-full font-semibold mb-2 text-sm text-gray-700">
              <CartSpeciesSelect
                label="Espécie"
                value={activeOption}
                setValue={setActiveOption}
              />
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-semibold mb-2 text-sm text-gray-700">
              <CartBreedSelect label="Raça do pet" species={activeOption} />
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-semibold mb-2 text-sm text-gray-700">
              <CartAge label="Idade do pet" />
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-semibold mb-2 text-sm text-gray-700">
              <CartSizeSelect label="Porte" />
            </span>
          </div>
        </div>


        {/* Linha 3: info + botão */}
        <div className="flex flex-row md:grid md:grid-cols-1 md:grid-cols-2 gap-6 mt-6 items-center">
          <div>
            <CartLinkInfo />
          </div>

          <div className="flex justify-end">
            <CartButton nextHref="/cart/servicos-disponiveis" />
          </div>
        </div>
      </form>
    </section>
  );
}
