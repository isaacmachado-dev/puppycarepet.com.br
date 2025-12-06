"use client";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";

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
    const [activeOption, setActiveOption] = useState("9:30");

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
          <span className="bg-[#FECE14] p-2 rounded-md text-black">
            Atendimento
          </span>
          <p className="p-2 text-white">Puppy Care</p>
        </div>
        <div className="flex flex-col justify-center items-center px-5 min-h-screen">
          <div className="bg-white items-center justify-center align-middle p-8 rounded-xl w-full max-w-4xl shadow-lg">
            <div className="flex flex-col items-center justify-center gap-3">
              <h2 className="font-bold text-black text-2xl mb-4 text-left w-full flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => (window.location.href = "/cart")}
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
                Horário de atendimento
              </h2>
              <p className="mb-6 text-left text-gray-700 w-full">
                Escolha um dos horários para buscarmos seu pet ou levar ele até
                nós!
              </p>
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
                        <Button
                          variant={
                            activeOption === "9:30" ? "default" : "outline"
                          }
                          onClick={() => setActiveOption("9:30")}
                          aria-pressed={activeOption === "9:30"}
                          className={`h-[48px] w-full min-w-[100px] text-base px-8 py-4 font-bold flex items-center justify-center transition
                            ${
                              activeOption === "9:30"
                                ? "bg-[#1A112E] text-white hover:bg-[#0A002E]"
                                : "bg-white text-[#1A112E] border-2 border-[#1A112E] hover:bg-[#f3f3f3]"
                            }
                          `}
                        >
                          9:30
                        </Button>
                      </span>
                      <span className="w-full">
                        <Button
                          variant={
                            activeOption === "11:00" ? "default" : "outline"
                          }
                          onClick={() => setActiveOption("11:00")}
                          aria-pressed={activeOption === "11:00"}
                          className={`h-[48px] w-full min-w-[100px] text-base px-8 py-4 font-bold flex items-center justify-center transition
                            ${
                              activeOption === "11:00"
                                ? "bg-[#1A112E] text-white hover:bg-[#0A002E]"
                                : "bg-white text-[#1A112E] border-2 border-[#1A112E] hover:bg-[#f3f3f3]"
                            }
                          `}
                        >
                          11:00
                        </Button>
                      </span>
                      <span className="w-full">
                        <Button
                          variant={
                            activeOption === "11:00" ? "default" : "outline"
                          }
                          onClick={() => setActiveOption("12:30")}
                          aria-pressed={activeOption === "12:30"}
                          className={`h-[48px] w-full min-w-[100px] text-base px-8 py-4 font-bold flex items-center justify-center transition
                            ${
                              activeOption === "12:30"
                                ? "bg-[#1A112E] text-white hover:bg-[#0A002E]"
                                : "bg-white text-[#1A112E] border-2 border-[#1A112E] hover:bg-[#f3f3f3]"
                            }
                          `}
                        >
                          12:30
                        </Button>
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col col-span-1">
                    <div className="flex gap-4 h-full items-end">
                      <span className="w-full">
                        <Button
                          variant={
                            activeOption === "14:00" ? "default" : "outline"
                          }
                          onClick={() => setActiveOption("14:00")}
                          aria-pressed={activeOption === "14:00"}
                          className={`h-[48px] w-full min-w-[100px] text-base px-8 py-4 font-bold flex items-center justify-center transition
                            ${
                              activeOption === "14:00"
                                ? "bg-[#1A112E] text-white hover:bg-[#0A002E]"
                                : "bg-white text-[#1A112E] border-2 border-[#1A112E] hover:bg-[#f3f3f3]"
                            }
                            `}
                        >
                          14:00
                        </Button>
                      </span>
                      <span className="w-full">
                        <Button
                          variant={
                            activeOption === "15:30" ? "default" : "outline"
                          }
                          onClick={() => setActiveOption("15:30")}
                          aria-pressed={activeOption === "15:30"}
                          className={`h-[48px] w-full min-w-[100px] text-base px-8 py-4 font-bold flex items-center justify-center transition
                            ${
                              activeOption === "15:30"
                                ? "bg-[#1A112E] text-white hover:bg-[#0A002E]"
                                : "bg-white text-[#1A112E] border-2 border-[#1A112E] hover:bg-[#f3f3f3]"
                            }
                            `}
                        >
                          15:30
                        </Button>
                      </span>
                      <span className="w-full">
                        <Button
                          variant={
                            activeOption === "17:00" ? "default" : "outline"
                          }
                          onClick={() => setActiveOption("17:00")}
                          aria-pressed={activeOption === "17:00"}
                          className={`h-[48px] w-full min-w-[100px] text-base px-8 py-4 font-bold flex items-center justify-center transition
                            ${
                              activeOption === "17:00"
                                ? "bg-[#1A112E] text-white hover:bg-[#0A002E]"
                                : "bg-white text-[#1A112E] border-2 border-[#1A112E] hover:bg-[#f3f3f3]"
                            }
                            `}
                        >
                          17:00
                        </Button>
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mt-4">
                    <span className="flex-1 flex justify-end">
                      <Button
                        type="submit"
                        className="bg-[#1A112E] text-white hover:bg-[#0A002E] transition px-8 py-4 text-lg rounded-lg font-bold flex items-center gap-2 h-[48px]"
                      >
                        <a href="/cart/seu-pet-tem-pulga-ou-carrapato">
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
                    </span>
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
