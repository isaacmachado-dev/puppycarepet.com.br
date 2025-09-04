import Image from "next/image";

export default function CatSection() {
    return (
        <section className="py-20 sm:py-50 bg-[#1A112E] p-5 sm:p-10 flex flex-col justify-center ">

            <div className="w-full max-w-[1000px] mx-auto px-5 sm:px-10 text-white">
                <h2 className="text-5xl font-semibold text-center sm:text-left">
                    Atendemos Gatos
                </h2>

                <div className="flex flex-col-reverse sm:flex-row items-center gap-10 sm:gap-20 mx-auto">

                    <p className="max-w-[400px] text-4xl justify-center">
                        Gatos também gostam de “limpeza”,  alivie-os por estarem beeeeem limpinhos e cheirosos conosco!
                    </p>

                    <Image
                        src="/CatSection/cat-section.png"
                        alt="Gato"
                        width={400}
                        height={400}
                        className="rounded-lg mt-5"
                    />


                </div>
            </div>
        </section>
    );
}
