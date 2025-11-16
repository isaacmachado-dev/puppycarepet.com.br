import { Dog } from "lucide-react";
import Image from "next/image";

export function Atendendo() {
    return (
        <div>
            <div className="p-2 border-2 border-black rounded-md w-max mx-auto">

                <div className="flex flex-col  items-center justify-center ">

                    <img
                        src="https://placehold.co/300x200?text=Imagem"
                        alt="Dog"
                        width={300}
                        height={300}
                    />

                    <div className="flex flex-row gap-2">
                        <Dog
                            className="w-8 h-8"
                        />
                        <span className="font-bold text-lg">
                            Malu
                        </span>
                    </div>
                

                </div>



            </div>
        </div>
    );
}
