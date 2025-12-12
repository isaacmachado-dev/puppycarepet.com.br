import React, { useState } from "react";
import { Button } from "@/components/ui/button";

interface CartAlergicSickProps {
  label: string;
}

export const CartAlergicSick: React.FC<CartAlergicSickProps> = ({ label }) => {
  // Estados separados para alergia e doença
  const [alergiaOption, setAlergiaOption] = useState("Não");
  const [doencaOption, setDoencaOption] = useState("Não");

  return (
    <div className="flex flex-row gap-16">
      <div className="flex flex-col col-span-1 min-h-[120px] w-full">
        <label className="font-bold mb-2">{label}</label>
        <div className="flex flex-1 flex-row gap-4 items-end mt-auto">
          <Button
            variant={alergiaOption === "Sim" ? "default" : "outline"}
            onClick={() => setAlergiaOption("Sim")}
            aria-pressed={alergiaOption === "Sim"}
            className={`cursor-pointer h-[48px] min-w-[100px] text-base px-8 py-4 font-bold flex items-center justify-center transition ${alergiaOption === "Sim"
              ? "bg-[#1A112E] text-white hover:bg-[#0A002E]"
              : "bg-white text-[#1A112E] border-2 border-[#1A112E] hover:bg-[#f3f3f3]"
              }`}
          >
            Sim
          </Button>
          <div className="flex flex-col items-center justify-end h-full">
            <label htmlFor="alergia" className="text-[#1A112E] mb-1">Qual?</label>
            <select
              className="h-[48px] min-w-[80px] text-sm px-3 py-1 font-bold border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1A112E] transition bg-white disabled:bg-gray-100 disabled:text-gray-400"
              disabled={alergiaOption !== "Sim"}
              id="alergia"
              name="alergia"
            >
              <option value="">Selecione a alergia</option>
              <option value="pulgas">Pulgas</option>
              <option value="piolhos">Piolhos</option>
              <option value="alimentos">Alimentos</option>
              <option value="outros">Outros</option>
            </select>
          </div>
          <Button
            variant={alergiaOption === "Não" ? "default" : "outline"}
            onClick={() => setAlergiaOption("Não")}
            aria-pressed={alergiaOption === "Não"}
            className={`cursor-pointer h-[48px] min-w-[80px] text-base px-8 py-3 font-bold flex items-center justify-center transition ${alergiaOption === "Não"
              ? "bg-[#1A112E] text-white hover:bg-[#0A002E]"
              : "bg-white text-[#1A112E] border-2 border-[#1A112E] hover:bg-[#f3f3f3]"
              }`}
          >
            Não
          </Button>
        </div>
      </div>

      <div className="flex flex-col col-span-1 min-h-[120px] w-full">
        <label className="font-bold mb-2">Tem alguma doença?  </label>
        <div className="flex flex-1 flex-row gap-4 items-end mt-auto">
          <Button
            variant={doencaOption === "Sim" ? "default" : "outline"}
            onClick={() => setDoencaOption("Sim")}
            aria-pressed={doencaOption === "Sim"}
            className={`cursor-pointer h-[48px] min-w-[100px] text-base px-8 py-4 font-bold flex items-center justify-center transition ${doencaOption === "Sim"
              ? "bg-[#1A112E] text-white hover:bg-[#0A002E]"
              : "bg-white text-[#1A112E] border-2 border-[#1A112E] hover:bg-[#f3f3f3]"
              }`}
          >
            Sim
          </Button>
          <div className="flex flex-col items-center justify-end h-full">
            <label htmlFor="doenca" className="text-[#1A112E] mb-1">Qual?</label>
            <select
              className="h-[48px] min-w-[80px] text-sm px-3 py-1 font-bold border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1A112E] transition bg-white disabled:bg-gray-100 disabled:text-gray-400"
              disabled={doencaOption !== "Sim"}
              id="doenca"
              name="doenca"
            >
              <option value="">Selecione a doença</option>
              <option value="doenca1">Doença 1</option>
              <option value="doenca2">Doença 2</option>
              <option value="doenca3">Doença 3</option>
              <option value="outros">Outros</option>
            </select>
          </div>
          <Button
            variant={doencaOption === "Não" ? "default" : "outline"}
            onClick={() => setDoencaOption("Não")}
            aria-pressed={doencaOption === "Não"}
            className={`cursor-pointer h-[48px] min-w-[100px] text-base px-8 py-4 font-bold flex items-center justify-center transition ${doencaOption === "Não"
              ? "bg-[#1A112E] text-white hover:bg-[#0A002E]"
              : "bg-white text-[#1A112E] border-2 border-[#1A112E] hover:bg-[#f3f3f3]"
              }`}
          >
            Não
          </Button>
        </div>
      </div>
    </div>
  );
};
