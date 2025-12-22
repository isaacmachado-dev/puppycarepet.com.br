import React from "react";
import { Button } from "@/components/ui/button";

interface CartAvailableServicesProps {
  label: string;
  services: string;
  selected: string[];
  onChange: (selected: string[]) => void;
}

export const CartAvailableServices: React.FC<CartAvailableServicesProps> = ({
  services,
  selected,
  onChange,
}) => {
  const serviceOptions = (typeof services === "string" ? services : "")
    .split(",")
    .map((service) => service.trim())
    .filter(Boolean);

  // Handler para seleção/deseleção
  const handleSelect = (service: string) => {
    if (selected.includes(service)) {
      onChange(selected.filter((s) => s !== service));
    } else {
      onChange([...selected, service]);
    }
  };

  return (
    <div className="flex flex-wrap gap-4 w-full mt-2">
      {serviceOptions.map((service) => (
        <Button
          key={service}
          variant={selected.includes(service) ? "default" : "outline"}
          onClick={() => handleSelect(service)}
          aria-pressed={selected.includes(service)}
          className={`h-[48px] w-full text-base px-8 py-4 font-bold flex items-center justify-center cursor-pointer transition
        ${selected.includes(service)
              ? "bg-[#1A112E] text-white hover:bg-[#0A002E]"
              : "bg-white text-[#1A112E] border-2 border-[#1A112E] hover:bg-[#f3f3f3]"
            }
      `}
        >
          {service}
        </Button>
      ))}
    </div>
  );
};
