import { SectionYellow, SetupSection } from "../components/ConfigSection";
import H2 from "../components/TextSection";

import { CarFront, ShowerHead, Dog, ShoppingCart } from 'lucide-react';

export default function OurServices() {
    return (
        <SectionYellow>
            <SetupSection>

                <H2>
                    Conheça os nossos serviços
                </H2>

                <div className="flex flex-col sm:flex-row gap-5 justify-center items-start mt-5">
                    <p className="max-w-[400px] text-4xl text-left">
                        Atendemos o seu animalzinho junto a
                        uma veterinária qualificada, garantindo
                        um trabalho com responsabilidade de quem entende.
                    </p>

                    <div className="grid grid-cols-2 gap-5 mt-5 sm:mt-0">
                        <div className="px-5 py-2.5 bg-[#B3B3B3] rounded-lg text-xl sm:text-2xl text-black font-normal flex gap-3 items-center justify-center h-[150px]">
                            <CarFront size={40} className="text-black" />
                            <p>Leva e Traz</p>
                        </div>

                        <div className="px-5 py-2.5 bg-[#B3B3B3] rounded-lg text-xl sm:text-2xl text-black font-normal flex gap-3 items-center justify-center h-[150px]">
                            <ShowerHead size={40} className="text-black" />
                            <p>Banho e Tosa</p>
                        </div>

                        <div className="px-5 py-2.5 bg-[#B3B3B3] rounded-lg text-xl sm:text-2xl text-black font-normal flex gap-3 items-center justify-center h-[150px]">
                            <Dog size={40} className="text-black" />
                            <p>Cães e Gatos</p>
                        </div>

                        <div className="px-5 py-2.5 bg-[#B3B3B3] rounded-lg text-xl sm:text-2xl text-black font-normal flex gap-3 items-center justify-center h-[150px]">
                            <ShoppingCart size={40} className="text-black" />
                            <p>Roupinhas</p>
                        </div>
                    </div>

                </div>
            </SetupSection>

            <div>

            </div>

        </SectionYellow >
    );
}
