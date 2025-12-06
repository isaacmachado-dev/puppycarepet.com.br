"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ThankYouPage() {
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
          <span className="bg-[#FECE14] p-2 rounded-md text-black">Atendimento</span>
          <p className="p-2 text-white">Puppy Care</p>
        </div>
        <div className="flex flex-col justify-center items-center px-5 min-h-screen">
          <div className="bg-white p-10 rounded-xl w-full max-w-3xl shadow-lg flex flex-col gap-6">
            <div className="flex items-center gap-2 mb-2">
              <button
                type="button"
                onClick={() => (window.location.href = "/cart/horario-de-atendimento")}
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </button>
              <h2 className="font-bold text-black text-2xl text-left">Obrigado pela sua atenção!</h2>
            </div>
            <p className="font-bold text-black text-lg text-left mb-2">
              Recebemos a sua resposta! Em breve entraremos em contato para confirmar o agendamento do atendimento do seu pet.
            </p>
            <h3 className="font-bold text-black text-lg text-left mb-2">Aguarde o retorno em horário comercial:</h3>
            <ul className="text-left text-gray-700 w-full list-disc list-inside mb-2">
              <li className="ml-4">Segunda a Sexta: 09:00 às 18:00.</li>
            </ul>
            <p className="text-left text-[#FF0000] w-full mb-2">
              <strong>Atenção:</strong> não realizamos o atendimento de animais agressivos
            </p>
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 w-full max-w-lg">
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit} className="w-full">
              <div className="flex w-full justify-end mt-6">
                <Button
                  type="submit"
                  className="bg-[#1A112E] text-white hover:bg-[#0A002E] transition px-8 py-4 text-lg rounded-lg font-bold flex items-center gap-2 h-[48px]"
                >
                  <Link href="/" className="flex items-center">
                    Concluir
                  </Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6 ml-2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 12H6.75m6 6 6-6-6-6" />
                  </svg>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  };

  return <ToolbarButtonGroup />;
}
