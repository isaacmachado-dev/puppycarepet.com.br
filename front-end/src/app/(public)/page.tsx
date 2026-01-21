import Image from "next/image";
import DogSection from "./sections/DogSection";
import CatSection from "./sections/CatSection";
import OurServices from "./sections/OurServices";
import HomeScreen from "./components/HomeScreen";
import { SetupSection } from "./sections/components/ConfigSection";
// import { AdminButton } from "../components/ui/custom/AdminButton";
import FooterClient from "./components/FooterClient";
import Link from "next/link";
import { PawPrint } from "lucide-react";
import DogsPawOnHero from "./components/DogsPawOnHero";
import HeaderSticky from "./components/HeaderSticky";

export default function Home() {

  return (
    <div className="font-sans bg-[#E72989] text-white">
      <main>
        <HomeScreen>

          <div className="relative">

            <DogsPawOnHero />
            <HeaderSticky />

            <SetupSection>
              <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-center sm:gap-10">
                <div className="order-1 sm:ml-10 justify-center">
                  <Image
                    src="/logos/brand/logo-redondo-maior-rosa.png"
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
                    src="/logos/brand/letter/only-letter-puppycare.png"
                    alt="Letra da logo Puppy Care"
                    width={150}
                    height={100}
                    className="object-contain"
                    priority
                  />
                  {/* Banho & Tosa Mobile */}
                  <p className="text-sm mx-auto text-center font-bold sm:block">Banho & Tosa</p>
                </div>

                <div className="text-5xl sm:text-7xl font-bold order-3 sm:order-2 text-center sm:text-left">
                  <h1 className="max-w-[650px]">
                    Cuidando do seu pet como se fosse <span className="text-yellow-400">nosso</span>
                  </h1>
                </div>

              </div>

              <div className="flex flex-row">
                {/* Letter PC Abaixo da logo: */}
                <div className="hidden sm:block ml-30">
                  <Image
                    src="/logos/brand/letter/only-letter-puppycare.png"
                    alt="Letra da logo Puppy Care"
                    width={400}
                    height={200}
                    className="object-contain"
                    priority
                  />
                </div>

                <div className="flex justify-center items-center w-full place-self-auto">

                  <Link
                    href="/cart"
                    className="rounded-md bg-[#1A89A2] px-10 py-4 hover:bg-[#186E81] text-white font-semibold tracking-[2] transform transition-transform duration-200 hover:scale-120 will-change-auto mt-5 text-center sm:-mx-auto sm:text-xl"
                  >
                    Agende agora
                  </Link>

                </div>
              </div>

              {/* Banho & Tosa PC */}
              <p className="text-sm sm:ml-50 font-bold hidden sm:block">Banho & Tosa</p>
            </SetupSection>
          </div>

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

        {/* <div>
          <AdminButton />
        </div> */}

      </main>
      <FooterClient />
    </div>
  );
}