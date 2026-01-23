import { useState } from "react";
import { Atendendo } from "../sections/Atendendo";
import { Proximos } from "../sections/Proximos";
import { Revisar } from "../sections/Revisar";
import Disponibilidade from "../sections/Disponiblidade";

const BUTTONS = [
    { id: "Atendendo", label: "Atendendo" },
    { id: "Proximos", label: "Próximos" },
    { id: "Revisar", label: "Revisar" },
    { id: "Disponibilidade", label: "Disponiblidade" }
];

export default function SectionChoices() {
    const [active, setActive] = useState(BUTTONS[0].id);
    const activeIndex = BUTTONS.findIndex(btn => btn.id === active);

    return (
        <>
            {/* 👇 DESKTOP: Todos os 4 botões 👇 */}
            <div className="hidden md:flex flex-row gap-6 justify-center mt-[40px] relative z-[10]">
                {BUTTONS.map((btn, index) => (
                    <div key={btn.id} className="flex py-3 flex-shrink-0">
                        <button
                            className={`cursor-pointer py-3 px-8 transition-all duration-300 rounded-t-full font-bold ${active === btn.id
                                ? "bg-[#FFFFFF] dark:bg-[#171717] text-black dark:text-white font-extrabold"
                                : "bg-transparent text-gray-500"
                                }`}
                            onClick={() => setActive(btn.id)}
                            disabled={active === btn.id}
                            style={active === btn.id ? { opacity: 1, cursor: "default" } : {}}
                        >
                            {btn.label}
                        </button>
                    </div>
                ))}
            </div>

            {/* 👇 MOBILE:  */}
            <div className="flex md:hidden flex-row gap-6 justify-center mt-[40px] relative z-[10]">
                {/* ... <= ESQUERDA  */}
                {activeIndex > 0 && (
                    <div className="flex py-3 flex-shrink-0">
                        <button
                            className="cursor-pointer py-3 px-2 bg-transparent text-gray-500 rounded-t-full text-xs w-[40px] truncate transition-all"
                            onClick={() => setActive(BUTTONS[activeIndex - 1].id)}
                            title={BUTTONS[activeIndex - 1].label}
                        >
                            {BUTTONS[activeIndex - 1].label}
                        </button>
                    </div>
                )}

                {/* Botões centrais */}
                <div className="flex">
                    {/* ATIVO sempre */}
                    <div className="flex py-3 flex-shrink-0">
                        <button
                            className="cursor-pointer py-3 px-8 transition-all duration-300 bg-[#FFFFFF] dark:bg-[#171717] text-black dark:text-white rounded-t-full font-extrabold"
                            disabled
                            style={{ opacity: 1, cursor: "default" }}
                        >
                            {active}
                        </button>
                    </div>

                    {/*  => ... PRÓXIMO (só se tem) */}
                    {activeIndex < BUTTONS.length - 1 && (
                        <div className="flex py-3 flex-shrink-0">
                            <button
                                className="cursor-pointer py-3 px-2 bg-transparent text-gray-500 rounded-t-full text-xs w-[40px] truncate transition-all"
                                onClick={() => setActive(BUTTONS[activeIndex + 1].id)}
                                title={BUTTONS[activeIndex + 1].label}
                            >
                                {BUTTONS[activeIndex + 1].label}
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <div className="transition-all">
                <div className="bg-[#ffffff] dark:bg-[#171717] -mt-[15px] p-[2rem] rounded-[16px]">
                    <div key={active} className="fade-slide-in">
                        {active === "Atendendo" && <Atendendo />}
                        {active === "Proximos" && <Proximos />}
                        {active === "Revisar" && <Revisar />}
                        {active === "Disponibilidade" && <Disponibilidade />}
                    </div>
                </div>
            </div>
        </>
    );
}
