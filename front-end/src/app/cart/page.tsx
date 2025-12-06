"use client";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";

function formatPhone(value: string) {
  return value
    .replace(/\D/g, "")
    .replace(/^([0-9]{2})([0-9]{0,5})([0-9]{0,4}).*/, (match, p1, p2, p3) => {
      let result = "";
      if (p1) result += `(${p1}`;
      if (p2) result += `)${p2}`;
      if (p3) result += `-${p3}`;
      return result;
    })
    .slice(0, 15);
}

export default function CartWelcome() {
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [petName, setPetName] = useState("");
  const [petBreed, setPetBreed] = useState("");

  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    try {
      // Simulate form submission
      console.log({ name, telephone, petName, petBreed });
    } catch (err) {
      console.error(err);
      setError("Erro ao enviar informações. Tente novamente.");
    }
  }

  const ToolbarButtonGroup = () => {
    const [activeOption, setActiveOption] = useState("Cão");

    return (
      <section className="min-h-screen bg-[#1A112E] text-black">
        <div className="flex flex-row gap-2 p-8 absolute">
          <Image
            src="/logos/brand/logo-redondo-maior-rosa.png"
            alt="Petshop Puppy Care"
            width={50}
            height={50}
            className="object-contain"
            priority
          />
          <span className="bg-[#FECE14] p-2 rounded-md text-black">Atendimento</span>
          <p className="p-2 text-white">Puppy Care</p>
        </div>
        <div className="flex flex-col justify-center items-center px-5 min-h-screen">
          <div className="bg-white p-10 rounded-xl w-full max-w-3xl shadow-lg flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h2 className="font-bold text-black text-2xl mb-4 text-left w-full">
                Diga-me sobre vocês
              </h2>
              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 w-full max-w-lg">
                  {error}
                </div>
              )}
              <form onSubmit={handleSubmit}>
                {/* Primeira linha: Nome, Telefone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-2">
                  <div className="flex flex-col col-span-1">
                    <label>Nome do dono do pet</label>
                    <input
                      type="text"
                      placeholder="Nome do dono do pet"
                      className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#E72989] transition w-full"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex flex-col col-span-1">
                    <label>Telefone</label>
                    <input
                      type="tel"
                      placeholder="Telefone para contato"
                      className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#E72989] transition w-full"
                      value={telephone}
                      onChange={(e) =>
                        setTelephone(formatPhone(e.target.value))
                      }
                      required
                    />
                  </div>
                </div>
                {/* Segunda linha: Nome do Pet, Espécie, Raça do Pet, etc... */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-2">
                  <div className="flex flex-col col-span-1">
                    <label>Nome do pet</label>
                    <input
                      type="text"
                      placeholder="Nome do pet"
                      className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#E72989] transition w-full"
                      value={petName}
                      onChange={(e) => setPetName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex flex-col col-span-1">
                    <label>Espécie</label>
                    <div className="flex gap-4 h-full items-end">
                      <span className="w-full">
                        <Button
                          variant={
                            activeOption === "Cão" ? "default" : "outline"
                          }
                          onClick={() => setActiveOption("Cão")}
                          aria-pressed={activeOption === "Cão"}
                          className={`h-[48px] w-full min-w-[100px] text-base px-8 py-4 font-bold flex items-center justify-center transition
                            ${
                              activeOption === "Cão"
                                ? "bg-[#1A112E] text-white hover:bg-[#0A002E]"
                                : "bg-white text-[#1A112E] border-2 border-[#1A112E] hover:bg-[#f3f3f3]"
                            }
                          `}
                        >
                          Cão
                        </Button>
                      </span>
                      <span className="w-full">
                        <Button
                          variant={
                            activeOption === "Gato" ? "default" : "outline"
                          }
                          onClick={() => setActiveOption("Gato")}
                          aria-pressed={activeOption === "Gato"}
                          className={`h-[48px] w-full min-w-[100px] text-base px-8 py-4 font-bold flex items-center justify-center transition
                            ${
                              activeOption === "Gato"
                                ? "bg-[#1A112E] text-white hover:bg-[#0A002E]"
                                : "bg-white text-[#1A112E] border-2 border-[#1A112E] hover:bg-[#f3f3f3]"
                            }
                          `}
                        >
                          Gato
                        </Button>
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-2 col-span-2">
                    <div className="flex flex-col col-span-1">
                      <label className="font-semibold mb-2 text-sm text-gray-700">
                        Raça do pet
                      </label>
                      <select
                        className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#E72989] transition w-full"
                        value={petBreed}
                        onChange={(e) => setPetBreed(e.target.value)}
                        required
                      >
                        <option value="" disabled>
                          Selecione a raça do seu pet
                        </option>
                        {activeOption === "Cão" ? (
                          <>
                            <option value="Labrador Retriever">
                              Labrador Retriever
                            </option>
                            <option value="Bulldog Francês">
                              Bulldog Francês
                            </option>
                            <option value="Beagle">Beagle</option>
                            <option value="Poodle">Poodle</option>
                            <option value="Pastor Alemão">Pastor Alemão</option>
                          </>
                        ) : (
                          <>
                            <option value="Siamês">Siamês</option>
                            <option value="Persa">Persa</option>
                            <option value="Maine">Maine</option>
                          </>
                        )}
                      </select>
                    </div>
                    <div className="flex flex-col col-span-1">
                      <label className="font-semibold mb-2 text-sm text-gray-700">
                        Idade
                      </label>
                      <input
                        type="number"
                        placeholder="Idade do pet em anos"
                        className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#E72989] transition col-2"
                        required
                      />
                    </div>
                    <div className="flex flex-col col-span-1">
                      <label className="font-semibold mb-2 text-sm text-gray-700">
                        Porte
                      </label>
                      <select
                        className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#E72989] transition w-full"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Selecione o porte do seu pet
                        </option>
                        <option value="Pequeno">Pequeno</option>
                        <option value="Médio">Médio</option>
                        <option value="Grande">Grande</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span>
                      <p className="text-sm text-black">
                        <a
                          href="/login/criar-uma-nova-conta"
                          className="relative group"
                        >
                          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                          Já esteve aqui antes?
                        </a>
                      </p>

                      <p className="text-sm text-black">
                        <a href="/login" className="relative group">
                          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                          Acessar sua conta
                        </a>
                      </p>
                    </span>
                  </div>
                  <div className="flex w-full justify-end mt-6">
                    <Button
                      type="submit"
                      className="bg-[#1A112E] text-white hover:bg-[#0A002E] transition px-8 py-4 text-lg rounded-lg font-bold flex items-center gap-2 h-[48px]"
                    >
                      <a href="/cart/horario-de-atendimento">Continuar</a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6 ml-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 12H6.75m6 6 6-6-6-6"
                        />
                      </svg>
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return <ToolbarButtonGroup />;
}
