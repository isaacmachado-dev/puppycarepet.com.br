"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  // const router = useRouter();
  // const handleLoginClick = () => {
  //     router.push('/admin');
  // }

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
        <span className="bg-[#FECE14] p-2 rounded-md text-black">Acesso</span>
        <p className="p-2 text-white">Puppy Care</p>
      </div>

      <div className="flex flex-col justify-center items-center px-5 min-h-screen">
        <div className="bg-white items-center justify-center align-middle p-8 rounded-xl w-full max-w-md shadow-lg">
          <div className="flex flex-col items-center justify-center gap-3">
            <Image
              src="/logos/brand/logo-redondo-maior-rosa.png"
              alt="Petshop Puppy Care"
              width={300}
              height={300}
              className="object-contain"
              priority
            />

            <h1 className="font-bold text-black text-xl">Login</h1>

            <form
              className="flex flex-col gap-4 w-full"
              onSubmit={handleSubmit}
            >
              <input
                name="username"
                type="email"
                placeholder="E-mail"
                className="text-black bg-white rounded-md p-2 pl-4 placeholder-black hover:placeholder-black hover:text-black  transition-colors duration-300 focus:outline-2 focus:outline-black hover:outline-2 hover:outline-gray-200"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div className="relative group">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Senha"
                  className=" text-black bg-white  rounded-md p-2 pl-4 placeholder-black group-hover:text-black group-hover:placeholder-black group-hover:bg-gray-200/50 transition-colors duration-300 focus:outline-2 focus:outline-black hover:outline-2 hover:outline-gray-200 w-full pr-4 "
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  required
                />

                <div className="container">
                  <button
                    type="button"
                    className="text-black absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black cursor-pointer ease-in-out duration-300"
                    onClick={() => setShowPassword((v) => !v)}
                    tabIndex={-1}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="bg-[#E72989] text-white rounded-md p-2 hover:bg-[#dc197b] font-bold tracking-[2] transition-transform hover:scale-105 will-change-auto transition-colors duration-300 cursor-pointer"
              >
                Entrar
              </button>
              <div className="h-0 text-red-600 font-semibold text-center flex items-center justify-center">
                {error || ""}
              </div>

              <div className="flex justify-between items-center mt-4">
                <span>
                  <p className="text-sm text-black">
                    <a
                      href="/login/esqueci-a-senha"
                      className="relative group"
                    >
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
