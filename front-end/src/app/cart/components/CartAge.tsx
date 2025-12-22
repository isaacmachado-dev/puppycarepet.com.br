import React from 'react';

interface CartAgeProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
export const CartAge: React.FC<CartAgeProps> = ({ label, ...props }) => (
  <div className="flex flex-col col-span-1">
    <label>{label}</label>
    <input
      suppressHydrationWarning
      type="number"
      min="0"
        className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#E72989] transition w-full"
        {...props}
    />
  </div>
);