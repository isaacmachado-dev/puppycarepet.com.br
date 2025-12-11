"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CartHeader } from "./cart/components/CartHeader";
import { Phone } from "lucide-react";

export default function AtendimentoPage() {
    return (
        <section>
            <div className="flex flex-row gap-2 p-8 absolute">
                <CartHeader label="Atendimento" text="Puppy Care" />
            </div>

            <div className="flex flex-col justify-center items-center px-5 min-h-screen">
                <div className="bg-white p-10 rounded-xl shadow-lg">

                    <h1 className="text-4xl font-bold text-black w-120">Onde você deseja seguir o atendimento?</h1>
                    <div className="flex flex-col gap-3 mt-5">
                        <Button className="cursor-pointer w-50 bg-0 border-2 border-black text-black mx-auto hover:bg-primary hover:text-white transition-colors duration-300">

                            <Link href="/atendimento/cart">
                                Autoatendimento
                            </Link>

                        </Button>

                        <Button className="cursor-pointer w-50 bg-0 border-2 border-black text-black mx-auto hover:bg-primary hover:text-white transition-colors duration-300">

                            <Link href="https://wa.me/551100000000" target="_blank" rel="noopener noreferrer">
                                <div className="flex flex-row gap-3 m-2">
                                    WhatsApp
                                </div>
                            </Link>

                        </Button>

                    </div>
                </div>

            </div>
        </section >
    );
}