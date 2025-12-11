import React from "react";


interface CartTitleHeaderProps {
  title: string;
  backStep?: keyof typeof cartSteps;
}


const cartStepOrder = [
  "cart",
  "horario-de-atendimento",
  "seu-pet-tem-pulga-ou-carrapato",
  "qual-e-o-temperamento-do-pet",
  "possui-alguma-alergia-ou-alguma-doenca",
  "servicos-disponiveis",
  "obrigado",
];

const cartSteps = {
  cart: "/cart",
  "horario-de-atendimento": "/cart/horario-de-atendimento",
  "seu-pet-tem-pulga-ou-carrapato": "/cart/seu-pet-tem-pulga-ou-carrapato",
  "qual-e-o-temperamento-do-pet": "/cart/qual-e-o-temperamento-do-seu-pet",
  "possui-alguma-alergia-ou-alguma-doenca": "/cart/possui-alguma-alergia-ou-alguma-doenca",
  "servicos-disponiveis": "/cart/servicos-disponiveis",
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
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </button>
      {title}
    </h2>
  );
};
