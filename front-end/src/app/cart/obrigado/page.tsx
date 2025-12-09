"use client";
import { useState } from "react";
import { CartButton } from "../components/CartButton";
import { CartTitleHeader } from "../components/CartTitleHeader";
import { CartSubTitleHeader } from "../components/CartSubTitleHeader";

export default function ThankYouPage() {
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    try {
      // Simulate form submission
      console.log("Formulário enviado");
    } catch (err) {
      console.error(err);
      setError("Erro ao enviar informações. Tente novamente.");
    }
  }

  const ToolbarButtonGroup = () => {
    return (
      <section>
        <CartTitleHeader title="Obrigado pela sua atenção!" />
        <CartSubTitleHeader subtitle="Recebemos a sua resposta! Em breve entraremos em contato para confirmar o agendamento do atendimento do seu pet." />
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 w-full max-w-lg">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex w-full justify-end mt-6">
            <CartButton nextHref="/" />
          </div>
        </form>
      </section>
    );
  };

  return <ToolbarButtonGroup />;
}
