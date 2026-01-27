"use client";
import { useState, useEffect } from "react";
import type { Usuario } from "./usuarios/types/usuario.ts"; // exemplo
import {
  Menu,
} from "lucide-react";
import AgendamentoPage from "./agendamento/page";
import ClientesPage from "./clientes/page";
import AnalisePage from "./analise/page";
import UsuariosPage from "./usuarios/page";
import OpcoesPage from "./opcoes/page";
import { useRouter } from "next/navigation";
import AdminHomeLoading from "@/app/admin/components/loading/AdminHomeLoading";
import { getUsuarios } from "../api/api";
import NavbarMobile from "./components/navbar/NavbarMobile";
import NavbarDesktop from "./components/navbar/NavbarDesktop";
// import { UsuarioApi } from "./usuarios/types/usuario";


export default function AdminPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDesktopOpen, setIsDesktopOpen] = useState(true); // ✅ ADICIONE
  type PageType = "agendamentos" | "clientes" | "analise" | "usuarios" | "opcoes" | null;

  const [paginaAtual, setPaginaAtual] = useState<PageType>("agendamentos");
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [nomeUsuario, setNomeUsuario] = useState<string>("");


  useEffect(() => {
    const token = typeof window !== "undefined" ? localStorage.getItem("admin_token") : null;

    if (!token) {
      router.replace("/login");
      return;
    }
    // FIX UTF8 JWT DECODE
    try {
      const payloadRaw = token.split(".")[1];
      // Adiciona padding se necessário
      const payloadPadded = payloadRaw + "=".repeat((4 - payloadRaw.length % 4) % 4);
      const payloadDecoded = atob(payloadPadded);

      // TextDecoder UTF8 PROPER
      const bytes = new Uint8Array(payloadDecoded.length);
      for (let i = 0; i < payloadDecoded.length; i++) {
        bytes[i] = payloadDecoded.charCodeAt(i);
      }
      const payload = JSON.parse(new TextDecoder().decode(bytes));
      console.log('✅ JWT UTF8 nome:', payload.nome);
      setNomeUsuario(payload.nome || "Usuário");
    } catch (e) {
      console.error('JWT decode error:', e);
      setNomeUsuario("Usuário");
    }

    // Verifica roles armazenadas no login
    const rolesRaw = typeof window !== "undefined" ? localStorage.getItem("user_roles") : null;
    const roles: string[] = rolesRaw ? JSON.parse(rolesRaw) : [];
    const isAdminRole = roles.includes("administrador");
    // const isClienteRole = roles.includes("cliente");
    setIsAdmin(isAdminRole);

    if (isAdminRole) {
      setIsAuthenticated(true);
      return;
    }

    // if (isClienteRole) {
    //   setPaginaAtual("historico");
    //   setIsAuthenticated(true);
    //   return;
    // }

    router.replace("/login");
  }, [router]);


  useEffect(() => {
    getUsuarios().then(setUsuarios).catch(console.error);
  }, []);


  useEffect(() => {
    if (usuarios && usuarios.length > 0) {
      console.log("Usuarios carregados:", usuarios);
    }
  }, [usuarios]);


  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className=" min-h-screen">
      {/* 1. Header sempre visível */}
      <div className="sticky top-0 z-30">
        <AdminHomeLoading loaded={true} funcionario={nomeUsuario || "Mônica"} />
      </div>

      {/* 2. Hambúrguer mobile ÚNICO */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-[#1A112E] rounded-lg shadow-lg"
        onClick={() => setIsMobileOpen(true)}
      >
        <Menu className="w-6 h-6 text-white" />
      </button>

      {/* 3. Mobile Drawer */}
      {isMobileOpen && (
        <div
          className="md:hidden fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setIsMobileOpen(false)}
        >
          <div
            className="w-[95vw] max-w-lg h-[90vh] bg-[#1A112E] rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <NavbarMobile
              isAdmin={isAdmin}
              nomeUsuario={nomeUsuario}
              paginaAtual={paginaAtual}
              setPaginaAtual={setPaginaAtual}
              onClose={() => setIsMobileOpen(false)}
            />
          </div>
        </div>
      )}

      {/* 4. Layout PRINCIPAL - flex row */}
      <div className="flex h-[calc(100vh-80px)] md:relative md:flex min-h-screen text-black font-bold"> {/* ajusta header height */}
        {/* Navbar DESKTOP */}
        <NavbarDesktop
          isOpen={isDesktopOpen}
          setIsOpen={setIsDesktopOpen}
          isAdmin={isAdmin}
          nomeUsuario={nomeUsuario}
          paginaAtual={paginaAtual}
          setPaginaAtual={setPaginaAtual}
        />

        {/* Main CONTENT */}
        <main className="h-[200vh] bg-[#E3E3E3] dark:bg-[#242424] flex-1 p-6">
          <section>
            {paginaAtual === "agendamentos" && <AgendamentoPage />}
            {paginaAtual === "clientes" && <ClientesPage />}
            {paginaAtual === "analise" && <AnalisePage />}
            {paginaAtual === "usuarios" && <UsuariosPage />}
            {paginaAtual === "opcoes" && <OpcoesPage />}
            {/* {paginaAtual === "historico" && <HistoricoPage />} */}
          </section>
        </main>

      </div>
    </div>
  );

}