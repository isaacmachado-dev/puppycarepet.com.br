"use client";
import Image from "next/image";
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
        <span className="bg-[#FECE14] p-2 rounded-md text-black">
          Recuperar Senha
        </span>
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
            <h2 className="text-2xl font-bold mb-6 text-center">
              Recuperar Senha
            </h2>
            <p className="mb-4 text-center text-gray-700">
              Digite seu e-mail cadastrado para receber instruções de
              recuperação.
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Seu e-mail"
                className="w-full p-2 mb-4 border-2 border-gray-400 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="w-full bg-[#E72989] text-white rounded-md p-2 hover:bg-[#dc197b] font-bold tracking-[2] transition-transform hover:scale-105 will-change-auto transition-colors duration-300 cursor-pointer"
              >
                Recuperar Senha
              </button>
              <div className="h-0 text-red-600 font-semibold text-center flex items-center justify-center">
                {error || ""}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
