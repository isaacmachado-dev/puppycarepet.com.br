import React from "react";

interface CartSizeSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
}

const sizes = [
  { value: "Pequeno", label: "Pequeno" },
  { value: "Médio", label: "Médio" },
  { value: "Grande", label: "Grande" },
];

export const CartSizeSelect: React.FC<CartSizeSelectProps> = ({ label, ...props }) => (
  <div className="flex flex-col col-span-1">
    <label>{label}</label>
    <select
      className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#E72989] transition w-full cursor-pointer"
      {...props}
    >
      <option value="" disabled>
        Selecione o porte do seu pet
      </option>
      {sizes.map((opt) => (
        <option key={opt.value} value={opt.value}>

          <div >
            {opt.label}
          </div>

        </option>
      ))}
    </select>
  </div>
);
