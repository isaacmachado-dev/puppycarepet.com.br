import React from 'react';
import { Button } from '@/components/ui/button';

interface CartYourPetTemperamentProps {
  label: string;
  activeOption: string;
  setActiveOption: (value: string) => void;
}

export const CartYourPetTemperament: React.FC<CartYourPetTemperamentProps> = ({
  label,
  activeOption,
  setActiveOption,
}) => {
  return (
    <div className="flex flex-col col-span-1">
      <label>{label}</label>
      <div className="flex gap-4 h-full items-end mt-2">
        {["Medroso", "Bonzinho", "Ansioso"].map((option) => (
          <Button
            key={option}
            variant={activeOption === option ? "default" : "outline"}
            onClick={() => setActiveOption(option)}
            aria-pressed={activeOption === option}
            className={`h-[48px] min-w-[100px] text-base px-8 py-4 font-bold flex items-center justify-center transition
                ${activeOption === option
                ? "bg-[#1A112E] text-white hover:bg-[#0A002E] cursor-pointer"
                : "bg-white text-[#1A112E] border-2 border-[#1A112E] hover:bg-[#f3f3f3] cursor-pointer"
              }
                `}
          >
            {option}
          </Button>
        ))}
      </div>
    </div>
  );
};


