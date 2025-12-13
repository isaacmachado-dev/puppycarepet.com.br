import Image from "next/image";
import { SectionYellow, SetupSection } from "./components/ConfigSection";
import H2 from "./components/TextSection";

export default function DogSection() {
    return (
        <SectionYellow>
            <SetupSection className="flex flex-col sm:flex-row-reverse gap-5 sm:gap-20 justify-center">

                {/* H2 Mobile */}
                <H2 className="text-center sm:hidden">
                    Atendemos <br /> Cachorros
                </H2>

                {/* Imagem */}
                <div className="flex justify-center">
                    <Image
                        src="/sections/dog-section/dog-section.png"
                        alt="Cachorro"
                        width={400}
                        height={400}
                        className="rounded-lg sm:mt-0"
                    />
                </div>

                {/* Coluna do texto */}
                <div className="flex flex-col justify-center">
                    <H2 className="hidden sm:block text-left">
                        Atendemos <br /> Cachorros
                    </H2>

                    <p className="max-w-[400px] text-4xl font-semibold sm:mt-5">
                        Uma vez confiando em nós, damos cheirinho e charme ao seu pet, seja ele quem for, da idade que for!
                    </p>
                </div>

            </SetupSection>
        </SectionYellow>
    );
}
