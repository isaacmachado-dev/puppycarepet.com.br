import React from "react";

interface CartSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { value: string; label: string }[];
}

export const CartSelect: React.FC<CartSelectProps> = ({ label, options, ...props }) => (
  <div className="flex flex-col col-span-1">
    <label>{label}</label>
    <select
      className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#E72989] transition w-full cursor-pointer"
      {...props}
    >
      <option value="" disabled>
        Selecione uma opção
      </option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </div>
);
