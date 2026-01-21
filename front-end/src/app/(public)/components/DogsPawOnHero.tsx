import { PawPrint, Sparkles } from "lucide-react";

export default function DogsPawOnHero() {

    return (
        <>
            <PawPrint
                className="absolute top-20 right-0 m-4"
                color="white"
                size={40}
                strokeWidth={1.5}
            />

            <PawPrint
                className="absolute top-20 left-0 m-4"
                color="white"
                size={40}
                strokeWidth={1.5}
            />


            <PawPrint
                className="absolute top-90 right-10 m-4"
                color="white"
                size={40}
                strokeWidth={1.5}
            />

            <PawPrint
                className="hidden sm:hidden md:absolute -top-5 right-30 m-4"
                color="white"
                size={40}
                strokeWidth={1.5}
            />

            <PawPrint
                className="absolute -top-10 right-30 m-4"
                color="white"
                size={40}
                strokeWidth={1.5}
            />

            <PawPrint
                className="absolute -bottom-15 right-30 m-4"
                color="white"
                size={40}
                strokeWidth={1.5}
            />

        </>
    );
}