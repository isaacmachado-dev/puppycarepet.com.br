import Image from "next/image";
import Link from "next/link";
import DogSection from "./sections/DogSection";
import CatSection from "./sections/CatSection";
import OurServices from "./sections/OurServices";
import HomeScreen from "./components/HomeScreen";
import { SetupSection } from "./components/ConfigSection";

export default function Home() {
  return (
    <div className="font-sans bg-[#1A112E] text-white">
      <main>

        <HomeScreen>
          <SetupSection>
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

              <div className="text-5xl sm:text-7xl font-semibold order-3 sm:order-2 text-center sm:text-left">
                <h1 className="max-w-[650px]">
                  Cuidando do seu pet como se fosse <span className="text-yellow-400">nosso</span>
                </h1>
              </div>

            </div>

            <div className="flex flex-row">
              {/* Letter PC Abaixo da logo: */}
              <div className="hidden sm:block ml-30">
                <Image
                  src="/only-letter-puppycare.png"
                  alt="Letra da logo Puppy Care"
                  width={400}
                  height={200}
                  className="object-contain"
                  priority
                />
              </div>

              <div className="flex justify-center items-center w-full place-self-auto">

                <Link
                  href="#"
                  className="rounded-md bg-[#E72989] px-10 py-4 hover:bg-[#dc197b] text-white font-bold tracking-[2] transform transition-transform duration-200 hover:scale-120 will-change-auto mt-5 mx-auto"
                >
                  Agende agora
                </Link>

              </div>
            </div>

            {/* Banho & Tosa PC */}
            <p className="text-sm ml-48 font-bold hidden sm:block">Banho & Tosa</p>
          </SetupSection>
        </HomeScreen>

        <div>
          <DogSection />
        </div>

        <div>
          <CatSection />
        </div>

        <div>
          <OurServices />
        </div>

      </main >

    </div >
  );
}
