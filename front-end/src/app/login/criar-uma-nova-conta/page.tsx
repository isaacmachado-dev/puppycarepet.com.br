"use client";
import { LoginHeader } from "../components/LoginHeader";
import { useRouter } from "next/navigation";
import { useState } from "react";

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

export default function CreateNewAccount() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [telephone, setTelephone] = useState("");
  const [error, setError] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const router = useRouter();

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("http://localhost:4000/usuarios/criar-conta", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, telephone }),
      });
      const data = await res.json();
      if (res.ok) {
        router.replace("/login");
      } else {
        setError(data.message || data.error || "Erro ao criar conta");
      }
    } catch (err) {
      console.error(err);
      setError("Erro ao criar conta. Tente novamente.");
    }
  }

  return (
    <section className="min-h-screen bg-[#1A112E] text-black">
      <div className="flex flex-row gap-2 p-8 absolute">
       <LoginHeader label="Criar Conta" text="Puppy Care" />
      </div>
      <div className="flex flex-col justify-center items-center px-5 min-h-screen">
        <div className="bg-white items-center justify-center align-middle p-8 rounded-xl w-full max-w-4xl shadow-lg">
          <div className="flex flex-col items-center justify-center gap-3">

            <form onSubmit={handleSubmit}>
              {/* Primeira linha: Nome, E-mail, Senha */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="flex flex-col col-span-1">
                  <label className="font-semibold mb-2 text-sm text-gray-700">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    placeholder="Nome Completo"
                    className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#E72989] transition w-full"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col col-span-1">
                  <label className="font-semibold mb-2 text-sm text-gray-700">
                    E-mail
                  </label>
                  <input
                    type="email"
                    placeholder="Seu e-mail"
                    className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#E72989] transition w-full"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col col-span-1">
                  <label className="font-semibold mb-2 text-sm text-gray-700">
                    Senha
                  </label>
                  <input
                    type="password"
                    placeholder="Senha"
                    className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#E72989] transition w-full"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                  />
                </div>
              </div>
              {/* Segunda linha: Telefone, Nível de Acesso, Serviços Prestados */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="flex flex-col col-span-1">
                  <label className="font-semibold mb-2 text-sm text-gray-700">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    placeholder="Telefone"
                    className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#E72989] transition w-full"
                    value={telephone}
                    onChange={(e) => setTelephone(formatPhone(e.target.value))}
                    required
                  />
                </div>
                <div className="flex flex-col col-span-1">
                  <label className="font-semibold mb-2 text-sm text-gray-700">
                    Nível de Acesso
                  </label>
                  <select
                    className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#E72989] transition w-full"
                    defaultValue=""
                    onChange={(e) => console.log(e.target.value)}
                  >
                    <option value="" disabled>
                      Nível de Acesso
                    </option>
                    <option value="cliente">Cliente</option>
                    <option value="colaborador">Colaborador</option>
                  </select>
                </div>
                <div className="flex flex-col col-span-1">
                  <label className="font-semibold mb-2 text-sm text-gray-700">
                    Serviços Prestados
                  </label>
                  <div className="flex flex-row gap-4 mt-2">
                    <label className="flex items-center gap-1">
                      <input
                        type="radio"
                        name="ServiosPrestados"
                        value="Banho"
                        checked={selectedValue === "Banho"}
                        onChange={handleOptionChange}
                        className="accent-[#E72989]"
                      />{" "}
                      Banho
                    </label>
                    <label className="flex items-center gap-1">
                      <input
                        type="radio"
                        name="ServiosPrestados"
                        value="Tosa"
                        checked={selectedValue === "Tosa"}
                        onChange={handleOptionChange}
                        className="accent-[#E72989]"
                      />{" "}
                      Tosa
                    </label>
                    <label className="flex items-center gap-1">
                      <input
                        type="radio"
                        name="ServiosPrestados"
                        value="LevaeTraz"
                        checked={selectedValue === "LevaeTraz"}
                        onChange={handleOptionChange}
                        className="accent-[#E72989]"
                      />{" "}
                      Leva e Traz
                    </label>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-[#E72989] text-white rounded-lg p-3 hover:bg-[#dc197b] font-bold tracking-[2] transition-transform hover:scale-105 will-change-auto transition-colors duration-300 cursor-pointer text-lg mt-2"
              >
                Criar Nova Conta
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
                    <a href="/login/esqueci-a-senha" className="relative group">
                      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                      Esqueceu a senha?
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
