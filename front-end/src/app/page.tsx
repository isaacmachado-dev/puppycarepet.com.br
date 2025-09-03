import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-screen p-5 sm:p-16">
      <main>
        <p className="text-2xl font-bold">Banho & Tosa</p>

        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-center sm:gap-10">

            <div className="order-1">
              <Image
                src="/logo-puppycare.png"
                alt="Petshop Puppy Care"
                width={800}
                height={150}
                className="object-contain"
                priority
              />
            </div>

            {/* Letter Mobile invertendo ordem */}
            <div className="order-2 sm:hidden">
              <Image
                src="/letter-puppycare.png"
                alt="Letra da logo Puppy Care"
                width={200}
                height={100}
                className="object-contain"
                priority
              />
            </div>

            <div className="text-5xl sm:text-6xl font-medium order-3 sm:order-2 text-center sm:text-left">
              <h2>
                Cuidando do seu pet como se fosse <span className="text-yellow-400">nosso</span>
              </h2>
            </div>

          </div>

        </div>

        {/* Letter PC Abaixo da logo: */}
        <div className="hidden sm:block sm:w-full">
          <Image
            src="/letter-puppycare.png"
            alt="Letra da logo Puppy Care"
            width={300}
            height={200}
            className="object-contain ml-10"
            priority
          />
        </div>


      </main>
    </div>
  );
}
