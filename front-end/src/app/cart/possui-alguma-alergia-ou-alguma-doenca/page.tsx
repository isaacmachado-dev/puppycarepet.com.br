"use client";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function FleasOrTicksPage() {
  const [error, setError] = useState("");
  // Estados independentes para alergia e doença
  const [alergiaOption, setAlergiaOption] = useState("Não");
  const [doencaOption, setDoencaOption] = useState("Não");

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
    // Removido activeOption, agora cada grupo tem seu próprio estado

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
              <h2 className="font-bold text-black text-2xl mb-4 text-left w-full flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    (window.location.href = "/cart/horario-de-atendimento")
                  }
                  className="bg-[#FFFFFF] text-[#1A112E] hover:bg-[#FFFFFF] text-[#0A002E] transition rounded-full p-2 flex items-center justify-center"
                  aria-label="Voltar"
                  style={{ width: 40, height: 40 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                </button>
                Possui alguma alergia?
              </h2>
              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 w-full max-w-lg">
                  {error}
                </div>
              )}
              <form onSubmit={handleSubmit}>
                {/* Bloco: Possui alguma alergia? */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-2">
                  <div className="flex flex-col col-span-1">
                    <div className="flex gap-4 h-full items-end">
                      <span className="w-full">
                        <Button
                          variant={alergiaOption === "Sim" ? "default" : "outline"}
                          onClick={() => setAlergiaOption("Sim")}
                          aria-pressed={alergiaOption === "Sim"}
                          className={`h-[48px] w-full min-w-[100px] text-base px-8 py-4 font-bold flex items-center justify-center transition
                            ${
                              alergiaOption === "Sim"
                                ? "bg-[#1A112E] text-white hover:bg-[#0A002E]"
                                : "bg-white text-[#1A112E] border-2 border-[#1A112E] hover:bg-[#f3f3f3]"
                            }
                          `}
                        >
                          Sim
                        </Button>
                      </span>
                      <span className="text-gray-500 font-medium text-center self-center">
                        <label htmlFor="alergia" className="text-[#1A112E]">
                          Qual?
                        </label>
                        <select
                          className="h-[48px] w-full min-w-[250px] text-base px-8 py-2.5 font-bold border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1A112E] transition bg-white disabled:bg-gray-100 disabled:text-gray-400"
                          disabled={alergiaOption !== "Sim"}
                          id="alergia"
                          name="alergia"
                        >
                          <option value="">Selecione a alergia</option>
                          <option value="pulgas">Pulgas</option>
                          <option value="piolhos">Piolhos</option>
                          <option value="alimentos">Alimentos</option>
                          <option value="outros">Outros</option>
                        </select>
                      </span>
                      <span className="w-full">
                        <Button
                          variant={alergiaOption === "Não" ? "default" : "outline"}
                          onClick={() => setAlergiaOption("Não")}
                          aria-pressed={alergiaOption === "Não"}
                          className={`h-[48px] w-full min-w-[100px] text-base px-8 py-4 font-bold flex items-center justify-center transition
                            ${
                              alergiaOption === "Não"
                                ? "bg-[#1A112E] text-white hover:bg-[#0A002E]"
                                : "bg-white text-[#1A112E] border-2 border-[#1A112E] hover:bg-[#f3f3f3]"
                            }
                          `}
                        >
                          Não
                        </Button>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-2">
                  <div className="flex flex-col col-span-1">
                    <div className="flex gap-4 h-full items-end">
                      <span className="w-full">
                        <h3 className="font-bold text-black text-2xl mb-4 text-left w-full flex items-center gap-2">
                          Tem uma doença?
                        </h3>
                      </span>
                    </div>
                    <div className="flex gap-4 h-full items-end">
                      <span className="w-full">
                        <Button
                          variant={doencaOption === "Sim" ? "default" : "outline"}
                          onClick={() => setDoencaOption("Sim")}
                          aria-pressed={doencaOption === "Sim"}
                          className={`h-[48px] w-full min-w-[100px] text-base px-8 py-4 font-bold flex items-center justify-center transition
                            ${
                              doencaOption === "Sim"
                                ? "bg-[#1A112E] text-white hover:bg-[#0A002E]"
                                : "bg-white text-[#1A112E] border-2 border-[#1A112E] hover:bg-[#f3f3f3]"
                            }
                          `}
                        >
                          Sim
                        </Button>
                      </span>
                      <span className="text-gray-500 font-medium text-center self-center">
                        <label htmlFor="doenca" className="text-[#1A112E]">
                          Qual?
                        </label>
                        <select
                          className="h-[48px] w-full min-w-[250px] text-base px-8 py-2.5 font-bold border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1A112E] transition bg-white disabled:bg-gray-100 disabled:text-gray-400"
                          disabled={doencaOption !== "Sim"}
                          id="doenca"
                          name="doenca"
                        >
                          <option value="">Selecione a doença</option>
                          <option value="doenca1">Doença 1</option>
                          <option value="doenca2">Doença 2</option>
                          <option value="doenca3">Doença 3</option>
                          <option value="outros">Outros</option>
                        </select>
                      </span>
                      <span className="w-full">
                        <Button
                          variant={doencaOption === "Não" ? "default" : "outline"}
                          onClick={() => setDoencaOption("Não")}
                          aria-pressed={doencaOption === "Não"}
                          className={`h-[48px] w-full min-w-[100px] text-base px-8 py-4 font-bold flex items-center justify-center transition
                            ${
                              doencaOption === "Não"
                                ? "bg-[#1A112E] text-white hover:bg-[#0A002E]"
                                : "bg-white text-[#1A112E] border-2 border-[#1A112E] hover:bg-[#f3f3f3]"
                            }
                          `}
                        >
                          Não
                        </Button>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex w-full justify-end mt-6">
                  <Button
                    type="submit"
                    className="bg-[#1A112E] text-white hover:bg-[#0A002E] transition px-8 py-4 text-lg rounded-lg font-bold flex items-center gap-2 h-[48px]"
                  >
                    <a href="/cart/servicos-disponiveis">
                      Continuar
                    </a>
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
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return <ToolbarButtonGroup />;
}
