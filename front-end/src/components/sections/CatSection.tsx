import Image from "next/image";
import { SectionPurple, SetupSection } from "../ui/custom/ConfigSection";
import H2 from "../ui/custom/TextSection";

export default function CatSection() {
    return (
        <SectionPurple>
            <SetupSection className="flex flex-col sm:flex-row gap-5 sm:gap-20 justify-center">

                {/* H2 Mobile */}
                <H2 className="text-center sm:hidden">
                    Atendemos <br /> Gatos
                </H2>

                {/* Coluna esquerda: Imagem Gato */}
                <div className="flex justify-center ">
                    <Image
                        src="/sections/cat-section/cat-section.png"
                        alt="Gato"
                        width={400}
                        height={400}
                        className="rounded-lg"
                    />
                </div>

                {/* Coluna direita: H2 desktop + P */}
                <div className="flex flex-col justify-center">
                    <H2 className="hidden sm:block text-left">
                        Atendemos <br /> Gatos
                    </H2>

                    <p className="max-w-[400px] text-4xl sm:mt-5 font-semibold">
                        Gatos também gostam de “limpeza”, alivie-os por estarem beeem limpinhos e cheirosos conosco!
                    </p>
                </div>

            </SetupSection>
        </SectionPurple>
    );
}
