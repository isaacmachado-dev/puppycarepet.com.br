import { ChevronLeft } from "lucide-react";
import React from "react";


interface CartTitleHeaderProps {
  title: string;
  backStep?: keyof typeof cartSteps;
}


const cartStepOrder = [
  "cart",
  "servicos-disponiveis",
  "possui-alguma-alergia-ou-alguma-doenca",
  "seu-pet-tem-pulga-ou-carrapato",
  "horario-de-atendimento",
  "qual-e-o-temperamento-do-pet",
  "obrigado",
];

const cartSteps = {
  cart: "/cart",
  "servicos-disponiveis": "/cart/servicos-disponiveis",
  "possui-alguma-alergia-ou-alguma-doenca": "/cart/possui-alguma-alergia-ou-alguma-doenca",
  "seu-pet-tem-pulga-ou-carrapato": "/cart/seu-pet-tem-pulga-ou-carrapato",
  "horario-de-atendimento": "/cart/horario-de-atendimento",
  "qual-e-o-temperamento-do-pet": "/cart/qual-e-o-temperamento-do-seu-pet",
  obrigado: "/cart/obrigado",
};

export const CartTitleHeader: React.FC<CartTitleHeaderProps> = ({ title, backStep = "cart" }) => {
  // Descobre o passo anterior na ordem
  const currentIndex = cartStepOrder.indexOf(backStep);
  const prevStep = (currentIndex > 0 ? cartStepOrder[currentIndex - 1] : "cart") as keyof typeof cartSteps;
  const prevHref = cartSteps[prevStep] || "/cart";
  return (
    <h2 className="font-bold text-black text-2xl mb-4 text-left w-full flex items-center gap-2">
      <button
        type="button"
        onClick={() => (window.location.href = prevHref)}
        className="bg-[#FFFFFF] text-[#1A112E] hover:bg-[#FFFFFF] text-[#0A002E] transition rounded-full p-2 flex items-center justify-center cursor-pointer"
        aria-label="Voltar"
        style={{ width: 40, height: 40 }}
      >
        <ChevronLeft />
      </button>
      {title}
    </h2>
  );
};
