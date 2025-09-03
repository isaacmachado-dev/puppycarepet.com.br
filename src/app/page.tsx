import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-screen p-5 sm:p-20">

      <main>
        <div className="sm:items-start">
          <p className="text-2xl font-bold">Banho & Tosa</p>

          <div className="hidden sm:flex flex-col">
            <div className="flex flex-row items-center gap-10 p-1 flex-wrap sm:flex-nowrap">
              <div className="ml-20 mr-20">
                <Image
                  src="/puppycare-logo.png"
                  alt="Petshop Puppy Care"
                  width="800"
                  height="150"
                  className="object-contain"
                  priority
                />
              </div>

              <div className="text-5xl sm:text-6xl font-medium">
                <h2>Cuidando do seu pet como se fosse <span className="text-yellow-400">nosso</span></h2>
              </div>
            </div>

            <div className="flex flex-row items-center gap-10 p-1 flex-wrap sm:flex-nowrap">

              <div className="ml-17 mr-20">
                <Image
                  className="object-contain"
                  src="/letter-puppycare.png"
                  alt="Letra da logo Puppy Care"
                  width="300"
                  height="200"
                  priority
                />
              </div>

            </div>
          </div>



        </div>

      </main >


    </div >
  );
}
