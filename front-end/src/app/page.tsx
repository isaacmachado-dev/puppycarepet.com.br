import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans min-h-screen p-5 sm:p-10 bg-[#1A112E] text-white">
      <main>

        <div className="mx-auto max-w-[1000px]">
          <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-center sm:gap-10">

            <div className="order-1 sm:ml-10 justify-center">
              <Image
                src="/logo-puppycare.png"
                alt="Petshop Puppy Care"
                width={600}
                height={100}
                className="object-contain"
                priority
              />
            </div>

            {/* Letter Mobile invertendo ordem */}
            <div className="order-2 sm:hidden -mt-5">
              <Image
                src="/only-letter-puppycare.png"
                alt="Letra da logo Puppy Care"
                width={150}
                height={100}
                className="object-contain"
                priority
              />
              {/* Banho & Tosa Mobile */}
              <p className="text-sm ml-[8vw] font-bold sm:block">Banho & Tosa</p>
            </div>

            <div className="text-5xl sm:text-7xl font-medium order-3 sm:order-2 text-center sm:text-left">
              <h2 className="max-w-[650px]">
                Cuidando do seu pet como se fosse <span className="text-yellow-400">nosso</span>
              </h2>
            </div>

          </div>

          <div className="flex flex-row">
            {/* Letter PC Abaixo da logo: */}
            <div className="hidden sm:block ml-43">
              <Image
                src="/only-letter-puppycare.png"
                alt="Letra da logo Puppy Care"
                width={200}
                height={200}
                className="object-contain"
                priority
              />
            </div>

            <div className="flex justify-center items-center w-full m-5">

              <Link
                href="#"
                className="rounded-md bg-[#E72989] px-10 py-2.5 hover:bg-[#dc197b] text-white font-[650] tracking-[2] transform transition-transform duration-200 hover:scale-105 will-change-auto"
              >
                Agende
              </Link>

            </div>
          </div>

          {/* Banho & Tosa PC */}
          <p className="text-sm ml-48 font-bold hidden sm:block">Banho & Tosa</p>

        </div>

      </main >

    </div >
  );
}
