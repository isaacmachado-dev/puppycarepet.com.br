import React from "react";
import { Button } from "@/components/ui/button";

interface CartFleaTickProps {
  label: string;
  value: string;
  setValue: (value: string) => void;
}

export const CartFleaTick: React.FC<CartFleaTickProps> = ({ label, value, setValue }) => {
  return (
    <div className="flex flex-col col-span-1">
      <label className="mb-1">{label}</label>
      <div className="flex flex-col gap-2">
        {fleaTickOptions.map((option) => (
          <Button
            key={option.label}
            variant={value === option.label ? "default" : "outline"}
            onClick={() => setValue(option.label)}
            aria-pressed={value === option.label}
            className={`px-8 py-4 text-lg rounded-lg font-bold flex items-center gap-2 cursor-pointer h-[48px] border-2 transition-colors ${value === option.label
              ? option.color
              : "bg-white text-black border-gray-300 hover:bg-gray-100"
              }`}
          >
            {option.label}
          </Button>
        ))}

      </div>
    </div>
  );
};

const fleaTickOptions = [
  { label: "Pulga", color: "bg-[#1A112E] text-white border-[#1A112E] hover:bg-[#0A002E]" },
  { label: "Carrapato", color: "bg-[#1A112E] text-white border-[#1A112E] hover:bg-[#0A002E]" },
  { label: "Não tem", color: "bg-[#1A112E] text-white border-[#1A112E] hover:bg-[#0A002E]" },
];
