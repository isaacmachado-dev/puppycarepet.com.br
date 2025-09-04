import { SectionYellow, SetupSection } from "../components/ConfigSection";
import H2 from "../components/TextSection";


export default function OurServices() {
    return (
        <SectionYellow>
            <SetupSection>

                <H2>
                    Conheça os nossos serviços
                </H2>

                <div className="flex flex-col sm:flex-row gap-5 sm:gap-20 justify-center items-center mt-5">
                    <p className="max-w-[400px] text-4xl text-left justify-center">
                        Atendemos o seu animalzinho junto a
                        uma veterinária qualificada, garantindo
                        um trabalho com responsabilidade de quem entende.
                    </p>

                    <div className="grid grid-cols-2 gap-5 mt-5">

                        <p className="px-15 py-5 bg-[#B3B3B3] rounded-lg text-xl sm:text-2xl text-black font-normal flex items-center justify-center text-center min-h-[150px]">
                            Leva e traz
                        </p>

                        <p className="px-15 py-5 bg-[#B3B3B3] rounded-lg text-xl sm:text-2xl text-black font-normal flex items-center justify-center text-center min-h-[150px]">
                            Banho & Tosa
                        </p>

                        <p className="px-15 py-5 bg-[#B3B3B3] rounded-lg text-xl sm:text-2xl text-black font-normal flex items-center justify-center text-center min-h-[150px]">
                            Cães e Gatos
                        </p>

                        <p className="px-15 py-5 bg-[#B3B3B3] rounded-lg text-xl sm:text-2xl text-black font-normal flex items-center justify-center text-center min-h-[150px]">
                            Roupinhas & Acessórios
                        </p>
                    </div>

                </div>
            </SetupSection>

            <div>

            </div>

        </SectionYellow >
    );
}
