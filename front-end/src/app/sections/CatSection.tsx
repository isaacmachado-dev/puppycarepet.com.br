import Image from "next/image";
import { SectionPurple, SetupSection } from "../components/ConfigSection";
import H2 from "../components/TextSection";

export default function CatSection() {
    return (
        <SectionPurple>

            <SetupSection>
                <H2 className="sm:text-right mr-13">
                    Atendemos Gatos
                </H2>

                <div className="flex flex-col-reverse sm:flex-row items-center gap-10 sm:gap-20">

                    <Image
                        src="/CatSection/cat-section.png"
                        alt="Gato"
                        width={400}
                        height={400}
                        className="rounded-lg mt-5"
                    />

                    <p className="max-w-[400px] text-4xl">
                        Gatos também gostam de “limpeza”,  alivie-os por estarem beeem limpinhos e cheirosos conosco!
                    </p>

                </div>
            </SetupSection>

        </SectionPurple>
    );
}
