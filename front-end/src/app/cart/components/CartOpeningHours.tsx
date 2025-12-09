import React from "react";
import { Button } from "@/components/ui/button";
interface CartOpeningHoursProps {
  label: string;
  activeOption: string;
  setActiveOption: (value: string) => void;
}

export const CartOpeningHours: React.FC<CartOpeningHoursProps> = ({
  label,
  activeOption,
  setActiveOption,
}) => {
  return (
    <div className="flex flex-col col-span-1">
      <label>{label}</label>
      <span className="flex gap-4 h-full items-end mt-2">
        {["09:30", "11:00", "12:30", "14:00", "15:30", "17:00"].map((hour) => (
          <Button
            key={hour}
            variant={activeOption === hour ? "default" : "outline"}
            onClick={() => setActiveOption(hour)}
            aria-pressed={activeOption === hour}
            className={`h-[48px] min-w-[100px] text-base px-8 py-4 font-bold flex items-center justify-center transition
            ${
              activeOption === hour
                ? "bg-[#1A112E] text-white hover:bg-[#0A002E]"
                : "bg-white text-[#1A112E] border-2 border-[#1A112E] hover:bg-[#f3f3f3]"
            }
            `}
          >
            {hour}
          </Button>
        ))}
      </span>
    </div>
  );
};
