"use client";
import { useState } from "react";
import { CartButton } from "./components/CartButton";
import { CartAge } from "./components/CartAge";
import { CartBreedSelect } from "./components/CartBreedSelect";
import { CartInput } from "./components/CartInput";
import { CartSizeSelect } from "./components/CartSizeSelect";
import { CartSpeciesSelect } from "./components/CartSpeciesSelect";

export default function CartWelcome() {
  const [error, setError] = useState("");
  const [activeOption, setActiveOption] = useState("Cão");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    try {
      const form = e.target as HTMLFormElement;
      const name = (form.elements.namedItem("name") as HTMLInputElement)?.value || "";
      const telephone = (form.elements.namedItem("telephone") as HTMLInputElement)?.value || "";
      const petName = (form.elements.namedItem("petName") as HTMLInputElement)?.value || "";
      const petBreed = (form.elements.namedItem("petBreed") as HTMLSelectElement)?.value || "";
      // Adapte os IDs conforme necessário (mock ou busca real)
      const payload = {
        ID_CLIENTE: 1, // Exemplo: buscar ou criar cliente
        ID_PET: 1,     // Exemplo: buscar ou criar pet
        ID_SERVICO: 1, // Exemplo: serviço padrão ou selecionado
        VALOR_COBRADO: 79.9, // Exemplo: valor fixo ou calculado
        TIPO: "banho", // Exemplo: tipo fixo ou selecionado
        NOTAS: `Nome: ${name}, Telefone: ${telephone}, Pet: ${petName}, Raça: ${petBreed}`
      };
      const res = await fetch("http://localhost:3000/atendimentos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
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
    <section>
      <h2 className="font-bold text-black text-2xl mb-4 text-left w-full">
        Diga-me sobre vocês
      </h2>
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 w-full max-w-lg">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          {/* Bloco dos inputs principais */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
            <div className="flex flex-col col-span-1">
              <CartInput
                type="text"
                label="Nome do dono de pet"
                name="name"
                placeholder="Nome do dono do pet"
                className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#E72989] transition w-full"
                required
              />
            </div>
            <div className="flex flex-col col-span-1">
              <CartInput
                type="tel"
                name="telephone"
                label="Telefone"
                placeholder="Telefone para contato"
                className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#E72989] transition w-full"
                required
              />
            </div>
            <div className="flex flex-col col-span-1">
              <CartInput
                type="text"
                name="petName"
                label="Nome do pet"
                placeholder="Nome do pet"
                className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#E72989] transition w-full"
                required
              />
            </div>
          </div>
          {/* Bloco dos inputs secundários */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-2">
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
          <div className="flex items-center justify-between w-full mt-6 gap-4">
            <ul className="text-sm text-black flex flex-col md:flex-row gap-2 md:gap-4 m-0 p-0">
              <li>
                <a
                  href="/login/criar-uma-nova-conta"
                  className="relative group"
                >
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                  Já esteve aqui antes?
                </a>
              </li>
              <li>
                <a href="/login" className="relative group">
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                  Acessar sua conta
                </a>
              </li>
            </ul>
            <div className="flex-shrink-0">
              <CartButton nextHref="/cart/horario-de-atendimento" />
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
