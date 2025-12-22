import React from "react";
import { formatPhone } from "../utils/formatPhone";

interface CartInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const CartInput: React.FC<CartInputProps> = ({ label, ...props }) => {
  // Se for campo telefone, aplica máscara formatPhone
  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    if (props.type === "tel" && props.name === "telephone") {
      const input = e.currentTarget;
      input.value = formatPhone(input.value);
    }
    if (props.onInput) props.onInput(e);
  };

  return (
    <div className="flex flex-col col-span-1">
      <label>{label}</label>
      <input
        suppressHydrationWarning
        className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#E72989] transition w-full"
        {...props}
        onInput={handleInput}
      />
    </div>
  );
};
