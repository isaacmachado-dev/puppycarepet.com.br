"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CalendarDays, Users, ChartNoAxesColumn, Notebook, Settings, X, ChevronLeft, ChevronRight, CircleQuestionMark } from "lucide-react";
import AdminMenuItem from "../components/AdminMenuItem";
import AgendamentoPage from "./agendamento/page";
import ClientesPage from "./clientes/page";
import AnalisePage from "./analise/page";

export default function AdminPage() {
    const [isOpen, setIsOpen] = useState(true);
    const [paginaAtual, setPaginaAtual] = useState<"agendamentos" | "clientes" | "analise" | "funcionarios" | null>(null);

    return (
        <div className="flex min-h-screen bg-[#E3E3E3] text-black font-bold">

            <aside
                className={`relative bg-[#1A112E] shadow-lg py-4 px-4 transition-all duration-300 ${isOpen ? "w-[250px]" : "w-[125px]"
                    }`}
            >

                <div className="flex flex-col gap-4">
                    <header className="relative flex items-center gap-4 min-h-[50px]">

                        {/* Logozinha */}
                        <button className="rounded-md focus:outline-none" onClick={() => "/"}>
                            <Image
                                src="/logos/brand/logo-redondo-maior-rosa.png"
                                alt="Petshop Puppy Care"
                                width={50}
                                height={50}
                                className={`transition-all duration-300 ${isOpen ? "opacity-100" : "opacity-0 w-0"
                                    }`}
                            />
                        </button>

                        {/* Botao amarelo Admin */}
                        <span className={"bg-[#FECE14] text-black px-3 py-1 rounded-md transition-all duration-300"}>
                            Admin
                        </span>

                        {/* Texto Puppy Care */}
                        <p
                            className={`text-white transition-all duration-300 overflow-hidden ${isOpen ? "opacity-100 max-w-[200px]" : "opacity-0 max-w-0"
                                }`}
                        >
                            Puppy Care
                        </p>

                        {/* Botão Chevron alinhado ao Admin */}
                        <button
                            className="absolute -right-4 top-1/2 -translate-y-1/2 translate-x-3  hover:bg-[#333] focus:outline-none rounded-md border-2 border-[#AAAAAA]"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? (
                                <ChevronLeft color="white" />
                            ) : (
                                <ChevronRight color="white" />
                            )}
                        </button>
                    </header>


                    <div className="p-2 bg-[#E3E3E3] rounded-md flex flex-col gap-2 transition-all duration-300">

                        <div className="text-black hover:text-white transition-all duration-300">
                            <AdminMenuItem
                                icon={<CalendarDays color="currentColor" />}
                                label="Agendamentos"
                                href=""
                                isOpen={isOpen}
                                className={`${!isOpen ? "flex justify-center align-center" : "justify-start"}`}
                                onClick={() => setPaginaAtual("agendamentos")}
                            />

                        </div>

                        <div className="text-black hover:text-white transition-all duration-300">
                            <AdminMenuItem
                                icon={<Users color="currentColor" />}
                                label="Clientes"
                                href=""
                                isOpen={isOpen}
                                className={`${!isOpen ? "flex justify-center align-center" : "justify-start"}`}
                                onClick={() => setPaginaAtual("clientes")}
                            />
                        </div>

                        <div className="text-black hover:text-white transition-all duration-300">
                            <AdminMenuItem
                                icon={<ChartNoAxesColumn color="currentColor" />}
                                label="Análise"
                                href=""
                                isOpen={isOpen}
                                className={`${!isOpen ? "flex justify-center align-center" : "justify-start"}`}
                                onClick={() => setPaginaAtual("analise")}

                            />
                        </div>

                        <div className="text-black hover:text-white transition-all duration-300">
                            <AdminMenuItem
                                icon={<Notebook color="currentColor" />}
                                label="Funcionários"
                                href="#"
                                isOpen={isOpen}
                                className={`${!isOpen ? "flex justify-center align-center" : "justify-start"}`}

                            />
                        </div>

                        <div className="text-black hover:text-white transition-all duration-300">
                            <AdminMenuItem
                                icon={<Settings color="currentColor" />}
                                label="Opções"
                                href="#"
                                isOpen={isOpen}
                                className={`${!isOpen ? "flex justify-center align-center" : "justify-start"}`}

                            />
                        </div>


                    </div>
                    <div className="text-black hover:text-white transition-all duration-300">
                        <AdminMenuItem
                            icon={<X color="currentColor" />}
                            label="Sair"
                            href="/"
                            isOpen={isOpen}
                            className={`${!isOpen ? "flex justify-center align-center" : "justify-start"}`}
                            danger
                        />
                    </div>
                </div>
            </aside>

            <main className="flex-1 p-6">

                <section className="">
                    {!paginaAtual && (
                        <div>

                            <h1 className="text-8xl">Bem vindo(a) {"{Funcionário}"}!</h1>

                            <div className="bg-[#BCBCBC] p-20 mt-10 rounded-md">
                                <h2>Estatística</h2>
                            </div>
                        </div>
                    )}

                    {paginaAtual === "agendamentos" && <AgendamentoPage />}
                    {paginaAtual === "clientes" && <ClientesPage />}
                    {paginaAtual === "analise" && <AnalisePage />}

                </section>

            </main>
        </div>
    );
}