"use client";
import { useState } from "react";
import Link from "next/link"
import Image from "next/image";
import { CalendarDays, Users, ChartNoAxesColumn, Notebook, Settings, X } from "lucide-react";

export default function AdminPage() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="flex p-5">

            <div className="flex flex-row gap-2 p-5">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-white rounded-md focus:outline-none z-10">
                    <Image
                        src="/logos/brand/logo-redondo-maior-rosa.png"
                        alt="Petshop Puppy Care"
                        width={50}
                        height={50}
                    />
                </button>

                <span className="flex p-2 bg-[#FECE14] rounded-md text-black items-center  z-10">Admin</span>
                <p className="p-2 text-white z-10">Puppy Care</p>

            </div>

            <main className="flex-1">
                {isOpen && (
                    <section>

                        <div className="absolute left-0 top-0 bg-[#1A112E] shadow-lg rounded-md p-40 z-5">
                            <ul className="flex flex-col gap-2">

                                <div className="flex flex-col bg-[#E3E3E3] p-10 rounded-md gap-2">

                                    <div className="flex gap-2 bg-[#AAAAAA] rounded-md p-2">
                                        <CalendarDays
                                            color="black"
                                        />

                                        <li className="">
                                            <Link href="#" className="text-black hover:text-[#FFFFFF]">Agendamentos</Link>
                                        </li>

                                    </div>

                                    <div className="flex gap-2 bg-[#AAAAAA] rounded-md p-2">
                                        <Users
                                            color="black"
                                        />

                                        <li className="">
                                            <Link href="/admin" className="text-black hover:text-[#FFFFFF]">Clientes</Link>
                                        </li>

                                    </div>

                                    <div className="flex gap-2 bg-[#AAAAAA] rounded-md p-2">
                                        < ChartNoAxesColumn
                                            color="black"
                                        />

                                        <li className="">
                                            <Link href="/login" className="text-black hover:text-[#FFFFFF]">Análise</Link>
                                        </li>
                                    </div>

                                    <div className="flex gap-2 bg-[#AAAAAA] rounded-md p-2">
                                        <Notebook
                                            color="black"
                                        />

                                        <li className="">
                                            <Link href="/login" className="text-black hover:text-[#FFFFFF]">Funcionários</Link>
                                        </li>
                                    </div>

                                    <div className="flex gap-2 bg-[#AAAAAA] rounded-md p-2">
                                        <Settings
                                            color="black"
                                        />

                                        <li className="">
                                            <Link href="/login" className="text-black hover:text-[#FFFFFF]">Opções</Link>
                                        </li>
                                    </div>

                                    <div className="flex gap-2 bg-[#E45C5C] rounded-md p-2">
                                        <X
                                            color="black"
                                        />
                                        <li className="">
                                            <Link href="/login" className="text-black hover:text-[#FFFFFF]">Sair</Link>
                                        </li>
                                    </div>
                                </div>
                            </ul>

                        </div>


                    </section>

                )}



            </main>

        </div>



    );
}