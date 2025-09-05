import { SectionYellow, SetupSection } from "../components/ConfigSection";
import H2 from "../components/TextSection";

import { CarFront, ShowerHead, Dog, ShoppingCart } from 'lucide-react';

export default function OurServices() {
    return (
        <SectionYellow>
            <SetupSection>

                <div className="bg-white p-15 rounded-lg mt-5">

                    <H2 className="mb-5">
                        Conheça os nossos serviços
                    </H2>


                    <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                        <p className="max-w-[400px] text-4xl text-left">
                            Atendemos o seu animalzinho junto a
                            uma veterinária qualificada, garantindo
                            um trabalho com responsabilidade de quem entende.
                        </p>

                        <div className="grid grid-cols-2 gap-5 mt-5 sm:mt-0">

                            <div className="px-5 py-2.5 bg-[#B3B3B3] rounded-lg text-xl sm:text-2xl text-black font-medium grid grid-cols-[60px_1fr] items-center h-[150px]">

                                <div className="flex justify-center">
                                    <CarFront size={50} color="black" className="text-black" />
                                </div>
                                <p className="text-black">Leva e Traz</p>

                            </div>

                            <div className="px-5 py-2.5 bg-[#B3B3B3] rounded-lg text-xl sm:text-2xl text-black font-medium grid grid-cols-[60px_1fr] items-center h-[150px]">

                                <div className="flex justify-center">
                                    <ShowerHead size={50} color="black" className="text-black" />
                                </div>
                                <p className="text-black">Banho e Tosa</p>

                            </div>

                            <div className="px-5 py-2.5 bg-[#B3B3B3] rounded-lg text-xl sm:text-2xl text-black font-medium grid grid-cols-[60px_1fr] items-center h-[150px]">

                                <div className="flex justify-center">
                                    <Dog size={50} color="black" className="text-black" />
                                </div>
                                <p className="text-black">Cães e Gatos</p>

                            </div>

                            <div className="px-5 py-2.5 bg-[#B3B3B3] rounded-lg text-xl sm:text-2xl text-black font-medium grid grid-cols-[60px_1fr] items-center h-[150px]">

                                <div className="flex justify-center">
                                    <ShoppingCart size={50} color="black" className="text-black" />
                                </div>
                                <p className="text-black hyphens-auto break-words">Roupi <br /> nhas</p>

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
