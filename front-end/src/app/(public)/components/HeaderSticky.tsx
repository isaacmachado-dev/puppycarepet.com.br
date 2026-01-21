'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeaderSticky() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 800);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`
    fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out
    ${scrolled
                ? 'animate-slideDown p-4'
                : '-translate-y-24 opacity-0'
            }
  `}>
            <div className="-[80vw] mx-auto max-w-6xl flex items-center h-24 px-4 bg-[#E72989]/95 backdrop-blur-md shadow-2xl rounded-2xl">
                <Image
                    src="/logos/brand/logo-redondo-maior-rosa.png"
                    alt="Puppy Care"
                    width={80}
                    height={80}
                    className={`object-contain transition-transform ${scrolled ? 'scale-100' : 'scale-150'}`}
                    priority
                />

                <Image
                    src="/logos/brand/letter/only-letter-puppycare.png"
                    alt="Letra da logo Puppy Care"
                    width={80}
                    height={80}
                    className="object-contain"
                    priority
                />

                <Link
                    href="/cart"
                    className="bg-[#1A89A2] px-8 py-3 rounded-lg text-white font-semibold hover:bg-[#186E81] transition-all duration-300 hover:scale-105 shadow-lg text-base whitespace-nowrap ml-auto"
                >
                    Agende agora
                </Link>
            </div>
        </header>
    );
}
