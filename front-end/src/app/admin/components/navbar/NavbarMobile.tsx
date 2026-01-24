"use client";
import Image from "next/image";
import { X, CalendarDays, Users, ChartNoAxesColumn, Notebook, Settings } from "lucide-react";
import AdminMenuItem from "./components/AdminMenuItem"; // seu path correto

// ✅ TIPO DEFINIDO AQUI
type PageType = "agendamentos" | "clientes" | "analise" | "usuarios" | "opcoes" | null;

interface NavbarMobileProps {
    isAdmin: boolean;
    nomeUsuario: string;
    paginaAtual: PageType;
    setPaginaAtual: React.Dispatch<React.SetStateAction<PageType>>;
    onClose: () => void;
}

export default function NavbarMobile({
    isAdmin,
    nomeUsuario,
    paginaAtual,
    setPaginaAtual,
    onClose
}: NavbarMobileProps) {
    return (
        <div className="w-full h-full p-6 flex flex-col gap-6">
            {/* Header */}
            <div className="flex justify-between items-center mx-auto">
                <Image
                    src="/logos/brand/logo-redondo-maior-rosa.png"
                    alt="Puppy Care"
                    width={200}
                    height={40}
                    className="drop-shadow-lg"
                />

            </div>

            {/* Badge Admin */}
            <span className="bg-[#FECE14] text-black px-6 py-2 rounded-full text-sm font-bold self-center shadow-lg">
                {isAdmin ? "Admin" : "Cliente"}
            </span>

            {/* Menu Completo */}
            <div className="flex-1 space-y-3 overflow-y-auto">
                {isAdmin && (
                    <>
                        <div className="flex flex-col space-y-3">
                            <AdminMenuItem
                                icon={<CalendarDays className="w-5 h-5" />}
                                label="Agendamentos"
                                active={paginaAtual === "agendamentos"}
                                onClick={() => {
                                    setPaginaAtual("agendamentos");
                                    onClose();
                                }} isOpen={true} />

                            <AdminMenuItem
                                icon={<Users className="w-5 h-5" />}
                                label="Clientes"
                                active={paginaAtual === "clientes"}
                                onClick={() => {
                                    setPaginaAtual("clientes");
                                    onClose();
                                }} isOpen={true} />

                            <AdminMenuItem
                                icon={<ChartNoAxesColumn className="w-5 h-5" />}
                                label="Análise"
                                active={paginaAtual === "analise"}
                                onClick={() => {
                                    setPaginaAtual("analise");
                                    onClose();
                                }} isOpen={true} />

                            <AdminMenuItem
                                icon={<Notebook className="w-5 h-5" />}
                                label="Usuários"
                                active={paginaAtual === "usuarios"}
                                onClick={() => {
                                    setPaginaAtual("usuarios");
                                    onClose();
                                }} isOpen={true} />

                            <AdminMenuItem
                                icon={<Settings className="w-5 h-5" />}
                                label="Opções"
                                active={paginaAtual === "opcoes"}
                                onClick={() => {
                                    setPaginaAtual("opcoes");
                                    onClose();
                                }} isOpen={true} />
                        </div>
                    </>
                )}

            </div>

            {/* Footer User + Logout */}
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
                        className={`w-full`}
                        label=""
                        href="/login"
                        isOpen={false}
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
    );
}
