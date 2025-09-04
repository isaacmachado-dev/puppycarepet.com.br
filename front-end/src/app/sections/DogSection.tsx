import Image from "next/image";
import { SectionYellow, SetupSection } from "../components/ConfigSection";
import H2 from "../components/TextSection";

export default function DogSection() {
    return (
        <SectionYellow>

            <SetupSection>

                <H2>
                    Atendemos Cachorros
                </H2>

                <div className="flex flex-col-reverse sm:flex-row items-center gap-10 sm:gap-20 mx-auto">
                    <p className="max-w-[400px] text-4xl justify-center">
                        Uma vez confiando em nós, damos cheirinho e charme ao seu pet, seja ele quem for, da idade que for!
                    </p>

                    <Image
                        src="/DogSection/dog-section.png"
                        alt="Cachorro"
                        width={400}
                        height={400}
                        className="rounded-lg mt-5"
                    />
                </div>
            </SetupSection>

        </SectionYellow>
    );
}
