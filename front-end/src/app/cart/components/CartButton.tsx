import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CircleChevronRight } from "lucide-react";

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
        className={`bg-[#1A112E] text-white hover:bg-[#0A002E] transition px-8 py-4 text-lg rounded-lg font-bold flex items-center gap-2 h-[48px] cursor-pointer`}
        aria-label={buttonText}
        style={{ width: 190, height: 56 }}
        onClick={handleClick}
        {...props}
      >
        {label ? label : ""}
        {buttonText}
        {label ? label : ""}

        <div className="ml-auto">
          <CircleChevronRight />
        </div>
      </button>
    </div>
  );
};
