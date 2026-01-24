"use client";
import { ChevronLeft, ChevronRight, CalendarDays, Users, ChartNoAxesColumn, Notebook, Settings, X } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import AdminMenuItem from "./components/AdminMenuItem"; // Caminho original

type Page = "agendamentos" | "clientes" | "analise" | "usuarios" | "opcoes" | null;

interface NavbarProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isAdmin: boolean;
    nomeUsuario: string;
    paginaAtual: Page;
    setPaginaAtual: React.Dispatch<React.SetStateAction<Page>>;
}

export default function NavbarDesktop({ isOpen, setIsOpen, isAdmin, nomeUsuario, paginaAtual, setPaginaAtual }: NavbarProps) {
    const router = useRouter();


    return (
        <aside
            className={`hidden md:block h-[200vh] z-10 bg-[#1A112E] shadow-lg px-4 invisible md:visible transition-all duration-300 ${isOpen ? "w-[250px]" : "w-[125px]"
                }`}
        >
            <div className="relative flex flex-col gap-2 h-[100vh] sticky top-0">
                <header className="relative flex flex-col items-center gap-2 min-h-[50px]">
                    {/* Logozinha */}
                    <button
                        className="rounded-md focus:outline-none"
                        onClick={() => router.push("/")}
                    >
                        <Image
                            src="/logos/brand/logo-redondo-maior-rosa.png"
                            alt="Petshop Puppy Care"
                            width={300}
                            height={50}
                            className={`mt-4 transition-all duration-300 ${isOpen ? "opacity-100" : ""}`}
                        />
                    </button>
                    {/* Botao amarelo Admin */}
                    <span className="bg-[#FECE14] text-black px-3 py-1 rounded-md transition-all duration-300">
                        {isAdmin ? (isOpen ? "Admin" : "Admin") : (isOpen ? "Cliente" : "Cliente")}
                    </span>

                    <button
                        className="absolute -right-4 top-1/2 -translate-y-1/2 translate-x-3 bg-[#333] hover:bg-white focus:outline-none rounded-md border-2 border-[#AAAAAA] cursor-pointer"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? (
                            <ChevronLeft color="currentColor" className="text-white hover:text-black" />
                        ) : (
                            <ChevronRight color="currentColor" className="text-white hover:text-black" />
                        )}
                    </button>
                </header>

                <div className="p-2 bg-[#E3E3E3] rounded-md flex flex-col gap-2 transition-all duration-300">
                    {isAdmin && (
                        <>
                            <div className="text-black hover:text-white transition-all duration-300">
                                <AdminMenuItem
                                    icon={<CalendarDays color="currentColor" />}
                                    label="Agendamentos"
                                    href=""
                                    isOpen={isOpen}
                                    className={`${!isOpen ? "flex justify-center items-center" : "justify-start"}`}
                                    active={paginaAtual === "agendamentos"}
                                    onClick={() => setPaginaAtual("agendamentos")}
                                />
                            </div>
                            <div className="text-black hover:text-white transition-all duration-300">
                                <AdminMenuItem
                                    icon={<Users color="currentColor" />}
                                    label="Clientes"
                                    href=""
                                    isOpen={isOpen}
                                    className={`${!isOpen ? "flex justify-center items-center" : "justify-start"}`}
                                    active={paginaAtual === "clientes"}
                                    onClick={() => setPaginaAtual("clientes")}
                                />
                            </div>
                            <div className="text-black hover:text-white transition-all duration-300">
                                <AdminMenuItem
                                    icon={<ChartNoAxesColumn color="currentColor" />}
                                    className={`${!isOpen ? "flex justify-center items-center" : "justify-start"}`}
                                    label="Análise"
                                    href=""
                                    isOpen={isOpen}
                                    active={paginaAtual === "analise"}
                                    onClick={() => setPaginaAtual("analise")}
                                />
                            </div>
                            <div className="text-black hover:text-white transition-all duration-300">
                                <AdminMenuItem
                                    icon={<Notebook color="currentColor" />}
                                    className={`${!isOpen ? "flex justify-center items-center" : "justify-start"}`}
                                    label="Usuários"
                                    href=""
                                    isOpen={isOpen}
                                    active={paginaAtual === "usuarios"}
                                    onClick={() => setPaginaAtual("usuarios")}
                                />
                            </div>
                            <div className="text-black hover:text-white transition-all duration-300">
                                <AdminMenuItem
                                    icon={<Settings color="currentColor" />}
                                    className={`${!isOpen ? "flex justify-center items-center" : "justify-start"}`}
                                    label="Opções"
                                    href=""
                                    isOpen={isOpen}
                                    active={paginaAtual === "opcoes"}
                                    onClick={() => setPaginaAtual("opcoes")}
                                />
                            </div>
                        </>
                    )}
                </div>

                {/* Nome usuário */}
                <div className="bg-[#e3e3e3] rounded-md">
                    <div className="relative p-2 text-black hover:text-white transition-all duration-300 rounded-md">
                        <div className="relative py-1 text-center bg-[#333333] z-50 rounded-md">
                            <p className="text-white transition-all duration-300 overflow-hidden">
                                {nomeUsuario || "Usuário"}
                            </p>
                        </div>
                    </div>

                    <div className="z-10 rounded-none">
                        <AdminMenuItem
                            icon={<X color="currentColor" />}
                            className={`${!isOpen ? "w-full" : "w-full"}`}
                            label=""
                            href="/login"
                            isOpen={isOpen}
                            danger
                            onClick={() => {
                                if (typeof window !== "undefined") {
                                    localStorage.removeItem("admin_token");
                                    localStorage.removeItem("user_roles");
                                    localStorage.removeItem("user_id");
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
        </aside>
    );
}
