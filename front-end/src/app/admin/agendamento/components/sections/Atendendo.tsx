import { Dog } from "lucide-react";

export function Atendendo() {
    return (
        <div>
            <div className="flex gap-2 items-center p-2 border-2 border-black rounded-md">

                <div className="flex gap-2 items-center">
                    <Dog />
                    Malu
                </div>

                <div className="m-2">
                    <span className="text-gray-500"> - Banho e Tosa </span>
                </div>


            </div>
        </div>
    );
}