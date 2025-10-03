import { SectionYellow, SetupSection, PurpleButton } from "../components/ConfigSection";
import H2 from "../components/TextSection";
import { CarFront, ShowerHead, Dog, ShoppingCart, Info, Phone } from 'lucide-react';

export default function OurServices() {
    return (
        <SectionYellow>
            <SetupSection>

                <div className="bg-white rounded-lg mt-5 p-5">

                    <H2 className="text-black">
                        Conheça os nossos serviços
                    </H2>

                    <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                        z
                        <p className="max-w-[400px] sm:text-4xl font-semibold text-black text-left text-2xl">
                            Atendemos o seu animalzinho junto a
                            uma veterinária qualificada, garantindo
                            um trabalho com responsabilidade de quem entende.
                        </p>

                        <div className="grid grid-cols-2 gap-5">

                            <PurpleButton>

                                <div className="flex justify-center">
                                    <CarFront
                                        color="#FECE14" className="text-black w-7 h-7 sm:w-16 sm:h-16" />
                                </div>
                                <p className="text-white  sm:text-left">Leva e Traz</p>
                            </PurpleButton>

                            <PurpleButton>

                                <div className="flex justify-center">
                                    <ShowerHead color="#FECE14" className="text-black w-7 h-7 sm:w-16 sm:h-16" />
                                </div>
                                <p className="text-white  sm:text-left">Banho e Tosa</p>

                            </PurpleButton>


                            <PurpleButton>
                                <div className="flex-shrink-0">
                                    <Dog
                                        color="#FECE14"
                                        className="text-black w-7 h-7 sm:w-16 sm:h-16" />
                                </div>
                                <p className="text-white  sm:text-left">
                                    Cães e Gatos
                                    {/* Pacotes */}
                                    {/* Atendimento */}
                                    {/* Roupinhas != Acessórios */}
                                </p>
                            </PurpleButton>

                            <PurpleButton>
                                <div className="flex-shrink-0">
                                    <ShoppingCart color="#FECE14" className="text-black w-7 h-7 sm:w-16 sm:h-16" />
                                </div>

                                <div className="flex flex-col items-center sm:items-start sm:text-left h-full justify-center">
                                    <p className="text-white break-words hyphens-auto">
                                        Acessório
                                    </p>

                                    {/* IZinho */}
                                    <div className="absolute bottom-2 right-3 flex items-center gap-1">
                                        <a
                                            href="https://wa.me/c/5511913632394"
                                            target="_blank"
                                            className="text-sm text-[#FECE14] invisible group-hover:visible relative flex items-center gap-1"
                                        >
                                            Catálogo
                                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FECE14] transition-all duration-300 group-hover:w-full"></span>

                                            <Info color={"#FECE14"} size={20} className="visible" />
                                        </a>
                                    </div>
                                </div>

                            </PurpleButton>

                        </div>

                    </div>
                </div>
            </SetupSection>
            <div>
            </div>
        </SectionYellow >

    );
}
