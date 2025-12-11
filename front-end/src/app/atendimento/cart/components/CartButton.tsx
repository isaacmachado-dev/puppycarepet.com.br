import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface CartButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  nextHref?: string; // nova prop para navegação
}

export const CartButton: React.FC<CartButtonProps> = ({
  label,
  nextHref,
  ...props
}) => {
  const router = useRouter();
  const [isObrigado, setIsObrigado] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsObrigado(window.location.pathname.includes("/cart/obrigado"));
    }
  }, []);

  const buttonText = isObrigado ? "Concluir" : "Continuar";

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (props.onClick) props.onClick(e);
    if (nextHref && router) {
      e.preventDefault();
      router.push(nextHref);
    }
  };

  return (
    <div className="flex justify-end mt-6">
      <button
        className="bg-[#1A112E] text-white hover:bg-[#0A002E] transition px-8 py-4 text-lg rounded-lg font-bold flex items-center gap-2 h-[48px]"
        aria-label={buttonText}
        style={{ width: 190, height: 56 }}
        onClick={handleClick}
        {...props}
      >
        {label ? label : ""}
        {buttonText}
        {label ? label : ""}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 48 48"
          strokeWidth={2}
          stroke="currentColor"
          className="w-12 h-12 ml-2"
        >
          <circle
            cx="24"
            cy="24"
            r="21"
            fill="#FFFFFF"
            fillOpacity="0"
            stroke="#FFFFFF"
            strokeWidth="3"
          />
          <path
            d="M18 15 L32 24 L18 33"
            stroke="#FFFFFF"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </button>
    </div>
  );
};
