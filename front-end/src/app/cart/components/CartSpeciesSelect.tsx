import React from "react";
import { Button } from "@/components/ui/button";

interface CartSpeciesSelectProps {
  label: string;
  value: string;
  setValue: (value: string) => void;
}

export const CartSpeciesSelect: React.FC<CartSpeciesSelectProps> = ({ label, value, setValue }) => {
  return (
    <div className="flex flex-col col-span-1">
      <label className="mb-1">{label}</label>
      <div className="flex gap-2">
        {species.map((specie) => (
          <Button
            key={specie.label}
            variant={value === specie.label ? "default" : "outline"}
            onClick={() => setValue(specie.label)}
            aria-pressed={value === specie.label}
            className={`px-8 py-4 text-lg rounded-lg font-bold flex items-center gap-2 h-[48px] border-2 transition-colors cursor-pointer ${value === specie.label
              ? specie.color
              : "bg-white text-black border-gray-300 hover:bg-gray-100"
              }`}
          >
            {specie.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

const species = [
  { label: "Cão", color: "bg-[#1A112E] text-white border-[#1A112E] hover:bg-[#0A002E]" },
  { label: "Gato", color: "bg-[#1A112E] text-white border-[#1A112E] hover:bg-[#0A002E]" },
];

