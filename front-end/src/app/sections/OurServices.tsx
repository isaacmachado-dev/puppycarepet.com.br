import { SectionYellow, SetupSection } from "../components/ConfigSection";
import H2 from "../components/TextSection";

import { CarFront, ShowerHead, Dog, ShoppingCart } from 'lucide-react';

export default function OurServices() {
    return (
        <SectionYellow>
            <SetupSection>

                <div className="bg-white rounded-lg mt-5 p-5">

                    <H2 className="mb-5">
                        Conheça os nossos serviços
                    </H2>


                    <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                        <p className="max-w-[400px] sm:text-4xl text-left text-2xl">
                            Atendemos o seu animalzinho junto a
                            uma veterinária qualificada, garantindo
                            um trabalho com responsabilidade de quem entende.
                        </p>

                        <div className="grid grid-cols-2 gap-5">

                            <div className="px-5 py-2.5 bg-[#B3B3B3] rounded-lg sm:text-2xl text-black font-medium flex items-center gap-3 h-auto sm:h-[150px]">

                                <div className="flex justify-center">
                                    <CarFront
                                        color="black" className="text-black w-7 h-7 sm:w-16 sm:h-16" />
                                </div>
                                <p className="text-black text-center sm:text-left">Leva e Traz</p>
                            </div>

                            <div className="px-5 py-2.5 bg-[#B3B3B3] rounded-lg sm:text-2xl text-black font-medium flex items-center gap-3 h-auto sm:h-[150px]">

                                <div className="flex justify-center">
                                    <ShowerHead color="black" className="text-black w-7 h-7 sm:w-16 sm:h-16" />
                                </div>
                                <p className="text-black text-center sm:text-left">Banho e Tosa</p>

                            </div>

                            <div className="px-5 py-2.5 bg-[#B3B3B3] rounded-lg sm:text-2xl text-black font-medium flex items-center gap-3 h-auto sm:h-[150px]">
                                <div className="flex-shrink-0">
                                    <Dog
                                        color="black"
                                        className="text-black w-7 h-7 sm:w-16 sm:h-16" />
                                </div>
                                <p className="text-black text-center sm:text-left">
                                    Cães e Gatos
                                </p>
                            </div>

                            <div className="px-5 py-2.5 bg-[#B3B3B3] rounded-lg sm:text-2xl text-black font-medium flex items-center gap-3 h-auto sm:h-[150px]">
                                <div className="flex-shrink-0">
                                    <ShoppingCart
                                        color="black"
                                        className="text-black w-7 h-7 sm:w-16 sm:h-16" />
                                </div>
                                <p className="text-black break-words hyphens-auto text-center sm:text-left">
                                    Roupi&shy;nhas
                                </p>
                            </div>

                        </div>


                    </div>
                </div>
            </SetupSection>

            <div>

            </div>

        </SectionYellow >
    );
}
