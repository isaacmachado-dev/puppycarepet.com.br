import Image from "next/image";

export default function Footer() {
    return (
        <footer className="flex flex-col p-20 bg-[#171717]">

            <div className="flex justify-center">
                <Image src="/footer/footer-puppycare.png"
                    alt="Footer logo letrada Puppy Care"
                    width={300}
                    height={300}
                    className=""

                />
            </div>

            <div className="flex flex-row justify-center gap-x-10">
                <div>
                    <a href="https://www.instagram.com/puppycare_pet/">
                        <Image src="/logos/third-party/instagram.png"
                            alt="Logo Instagram"
                            width={50}
                            height={50}
                            className=""
                        />
                    </a>
                </div>

                <div>
                    <a href="https://www.tiktok.com/@puppycare_pet">
                        <Image src="/logos/third-party/tiktok.png"
                            alt="Logo TikTok"
                            width={50}
                            height={50}
                            className=""
                        />
                    </a>
                </div>

                <div>
                    <a href="#">
                        <Image src="/logos/third-party/whatsapp.png"
                            alt="Logo WhatsApp"
                            width={50}
                            height={50}
                            className=""
                        />
                    </a>
                </div>
            </div>

        </footer>


    );
}