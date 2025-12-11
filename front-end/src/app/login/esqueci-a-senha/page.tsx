"use client";
import { LoginHeader } from "../components/LoginHeader";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("http://localhost:4000/usuarios/esqueci-senha", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        router.replace("/login");
      } else {
        setError(data.message || data.error || "Erro ao enviar instruções");
      }
    } catch (err) {
      console.error(err);
      setError("Erro ao enviar instruções. Tente novamente.");
    }
  }

  return (
    <section className="min-h-screen bg-[#1A112E] text-black">
      <div className="flex flex-row gap-2 p-8 absolute">
        <LoginHeader label="Recuperar Senha" text="Puppy Care" />
      </div>

      <div className="flex flex-col justify-center items-center px-5 min-h-screen">
        <div className="bg-white items-center justify-center align-middle p-8 rounded-xl w-full max-w-lg shadow-lg">
          <div className="flex flex-col items-center justify-center gap-6">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 w-full"
            >
              <input
                type="email"
                placeholder="Seu e-mail"
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#E72989] transition"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="w-full bg-[#E72989] text-white rounded-lg p-3 hover:bg-[#dc197b] font-bold text-lg transition-transform hover:scale-105 will-change-auto transition-colors duration-300 cursor-pointer"
              >
                Recuperar Senha
              </button>
              <div className="h-0 text-red-600 font-semibold text-center flex items-center justify-center mt-2">
                {error || ""}
              </div>

              <div className="flex justify-between items-center mt-4">
                <span>
                  <p className="text-sm text-black">
                    <a href="/login" className="relative group">
                      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                      Acessar minha conta
                    </a>
                  </p>
                </span>
                <span>
                  <p className="text-sm text-black">
                    <a
                      href="/login/criar-uma-nova-conta"
                      className="relative group"
                    >
                      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                      Criar uma nova conta?
                    </a>
                  </p>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
