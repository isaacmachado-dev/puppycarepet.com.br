"use client";
import Image from "next/image";
import H2 from "@/app/components/TextSection";
import { useRouter } from 'next/navigation';


export default function LoginPage() {
    const router = useRouter();
    const handleLoginClick = () => {
        router.push('/admin');
    }

    return (

        <section className="min-h-screen bg-[#1A112E] text-black">

            <div className="flex flex-row gap-2 p-5">
                <span className="bg-[#FECE14] p-2 rounded-md text-black">Admin</span>
                <p className="p-2 text-white">Puppy Care</p>
            </div>

            <div className="flex flex-col justify-center items-center px-5">
                <div className="bg-white p-8 rounded-xl w-full max-w-md shadow-lg">


                    <div className="flex flex-col items-center justify-center gap-3">
                        <Image
                            src="/logos/brand/logo-redondo-maior-rosa.png"
                            alt="Petshop Puppy Care"
                            width={300}
                            height={300}
                            className="object-contain"
                            priority
                        />

                        <h1 className="font-bold text-black text-xl">Login Administrativo</h1>

                        <form className="flex flex-col gap-4 w-full">
                            <input
                                name="username"
                                placeholder="Usuário"
                                className="border border-gray-300 rounded-xl p-2 placeholder-gray-500 focus:outline focus:outline-2 focus:outline-black"
                            />

                            <input
                                name="password"
                                type="password"
                                placeholder="Senha"
                                className="border border-gray-300 rounded-xl p-2 placeholder-gray-500 focus:outline focus:outline-2 focus:outline-black"
                            />

                            <button
                                type="submit"
                                className="bg-[#E72989] text-white rounded-md p-2 hover:bg-[#dc197b] font-bold tracking-[2] transition-transform hover:scale-105 will-change-auto transition-colors duration-300 cursor-pointer"
                                onClick={handleLoginClick}
                            >
                                Entrar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    )

}
