import Image from "next/image";

export default function Footer() {
    return (
        <footer className="flex p-20 justify-center bg-[#171717]">
            <Image src="/Footer/footer-puppycare.png" alt="Footer logo letrada Puppy Care"
                width={300}
                height={300}

            />
        </footer>
    );
}