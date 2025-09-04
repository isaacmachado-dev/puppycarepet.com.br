import Image from "next/image";

export default function DogSection() {
    return (
        <section className=" py-20 sm:py-50  max-h-[700] bg-[#FECE14] p-5 sm:p-10 flex flex-col justify-center">

            <div className="w-full max-w-[1000px] mx-auto px-5 sm:px-10 text-black">
                <h2 className="text-5xl font-bold text-center sm:text-left">
                    Atendemos Cachorros
                </h2>

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
            </div>
        </section>
    );
}
