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
      <div className="flex flex-wrap md:flex-nowrap md:flex md:flex-row md:gap-20 gap-10">
        <div>
          <div className="flex flex-col col-span-1 min-h-[120px] w-full md:w-auto">
            <label className="font-bold mb-2">{label}</label>
            <div className="order-1 md:order-1 flex flex-col md:flex-row gap-4 items-start  mt-auto">
              <div className="flex flex-wrap md:flex-nowrap gap-2 items-end">
                <Button
                  variant={alergiaOption === "Sim" ? "default" : "outline"}
                  onClick={() => setAlergiaOption("Sim")}
                  aria-pressed={alergiaOption === "Sim"}
                  className={`w-full md:w-auto cursor-pointer h-[48px] min-w-[100px] text-base px-8 py-4 font-bold flex items-center justify-center transition ${alergiaOption === "Sim"
                    ? "bg-[#1A112E] text-white hover:bg-[#0A002E]"
                    : "bg-white text-[#1A112E] border-2 border-[#1A112E] hover:bg-[#f3f3f3]"
                    }`}
                >
                  Sim
                </Button>
                <div className="order-3 md:order-2 flex flex-col items-start justify-end h-full w-full md:w-auto">
                  <label htmlFor="alergia" className="text-[#1A112E] mb-1">Qual?</label>
                  <select
                    className="w-full md:w-auto h-[48px] min-w-[80px] text-sm px-3 py-1 font-bold border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1A112E] transition bg-white disabled:bg-gray-100 disabled:text-gray-400"
                    disabled={alergiaOption !== "Sim"}
                    id="alergia"
                    name="alergia"
                  >
                    <option value="perfume">Perfume</option>
                    <option value="pulgas">Pulgas</option>
                    <option value="lamina-de-tosagem">Lâmina de tosagem</option>
                    <option value="alimenticia">Alimentícia</option>

                  </select>
                </div>
                <Button
                  variant={alergiaOption === "Não" ? "default" : "outline"}
                  onClick={() => setAlergiaOption("Não")}
                  aria-pressed={alergiaOption === "Não"}
                  className={`w-full md:w-auto order-2 md:order-3 cursor-pointer h-[48px] min-w-[80px] text-base px-8 py-3 font-bold flex items-center justify-center transition ${alergiaOption === "Não"
                    ? "bg-[#1A112E] text-white hover:bg-[#0A002E]"
                    : "bg-white text-[#1A112E] border-2 border-[#1A112E] hover:bg-[#f3f3f3]"
                    }`}
                >
                  Não
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col col-span-1 min-h-[120px] w-full">
          <label className="font-bold mb-2">Tem ou já teve alguma doença?  </label>
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-end mt-auto">
            <div className="flex flex-wrap md:flex-nowrap gap-2 items-end">

              <Button
                variant={doencaOption === "Sim" ? "default" : "outline"}
                onClick={() => setDoencaOption("Sim")}
                aria-pressed={doencaOption === "Sim"}
                className={`w-full md:w-auto order-1 md:order-1 cursor-pointer h-[48px] min-w-[100px] text-base px-8 py-4 font-bold flex items-center justify-center transition ${doencaOption === "Sim"
                  ? "bg-[#1A112E] text-white hover:bg-[#0A002E]"
                  : "bg-white text-[#1A112E] border-2 border-[#1A112E] hover:bg-[#f3f3f3]"
                  }`}
              >
                Sim
              </Button>

              <div className="order-3 md:order-2 basis-full flex flex-col items-start mt-2">
                <label htmlFor="doenca" className="text-[#1A112E] mb-1">Qual?</label>
                <select
                  className="w-full md:w-auto h-[48px] min-w-[80px] text-sm px-3 py-1 font-bold border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1A112E] transition bg-white disabled:bg-gray-100 disabled:text-gray-400"
                  disabled={doencaOption !== "Sim"}
                  id="doenca"
                  name="doenca"
                >
                  <option value="doenca-de-pele">Doença de pele</option>
                  <option value="mobilidade-reduzida">Mobilidade reduzida</option>
                  <option value="fungo-sarna-bacteria">Fungo/sarna/bactéria</option>
                  <option value="ferida">Ferida</option>
                </select>
              </div>
              <Button
                variant={doencaOption === "Não" ? "default" : "outline"}
                onClick={() => setDoencaOption("Não")}
                aria-pressed={doencaOption === "Não"}
                className={`w-full md:w-auto order-2 md:order-3 cursor-pointer h-[48px] min-w-[100px] text-base px-8 py-4 font-bold flex items-center justify-center transition ${doencaOption === "Não"
                  ? "bg-[#1A112E] text-white hover:bg-[#0A002E]"
                  : "bg-white text-[#1A112E] border-2 border-[#1A112E] hover:bg-[#f3f3f3]"
                  }`}
              >
                Não
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
