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

      <span className="mt-2 flex flex-wrap gap-4">
        {["09:30", "11:00", "12:30", "14:00", "15:30", "17:00"].map((hour) => {
          const isActive = activeOption === hour;

          return (
            <Button
              key={hour}
              onClick={() => setActiveOption(hour)}
              aria-pressed={isActive}
              className={`
              h-12 w-20 text-sm font-bold
              flex items-center justify-center
              border-2 transition cursor-pointer
              mx-auto md:mx-0
              ${isActive
                  ? "bg-[#1A112E] text-white border-transparent hover:bg-[#0A002E]"
                  : "bg-white text-[#1A112E] border-[#1A112E] hover:bg-[#f3f3f3]"
                }
            `}
            >
              {hour}
            </Button>
          );
        })}
      </span>
    </div>
  );
};