"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { LoginHeader } from "./components/LoginHeader";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("http://localhost:4000/usuarios/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      });
      const data = await res.json();
      if (res.ok && data.token) {
        localStorage.setItem("admin_token", data.token);
        router.replace("/admin");
      } else {
        setError(data.message || data.error || "Usuário ou senha inválidos");
      }
    } catch (err) {
      console.error(err);
      setError("Erro ao autenticar. Tente novamente.");
    }
  }

  return (
    <section className="min-h-screen bg-[#1A112E] text-black">
      <div className="flex flex-row gap-2 p-8 absolute">
        <LoginHeader label="Acesso" text="Puppy Care" />
      </div>

      <div className="flex flex-col justify-center items-center px-5 min-h-screen">
        <div className="bg-white items-center justify-center align-middle p-8 rounded-xl w-full max-w-lg shadow-lg">
          <div className="flex flex-col items-center justify-center gap-6">
           
            <form
              className="flex flex-col gap-4 w-full"
              onSubmit={handleSubmit}
            >
              <input
                name="username"
                type="email"
                placeholder="E-mail"
                className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#E72989] transition w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div className="relative group">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Senha"
                  className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#E72989] transition w-full"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#E72989]"
                  onClick={() => setShowPassword((prev) => !prev)}
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              <button
                type="submit"
                className="w-full bg-[#E72989] text-white rounded-lg p-3 hover:bg-[#dc197b] font-bold text-lg transition-transform hover:scale-105 will-change-auto transition-colors duration-300 cursor-pointer"
              >
                Entrar
              </button>
              <div className="h-0 text-red-600 font-semibold text-center flex items-center justify-center mt-2">
                {error || ""}
              </div>

              <div className="flex justify-between items-center mt-4">
                <span>
                  <p className="text-sm text-black">
                    <a href="/login/esqueci-a-senha" className="relative group">
                      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                      Esqueceu a senha?
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
