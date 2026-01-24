import { useEffect, useState } from "react";
import { Typewriter } from "./Typewriter";
import "./dog-loader.css";

export default function AdminHomeLoading({ loaded, funcionario }: { loaded: boolean, funcionario: string }) {
    const [visible, setVisible] = useState(true);
    const [minPassed, setMinPassed] = useState(false);
    const [progress, setProgress] = useState(0);

    // Progress 0→100% em 6s (70ms por %)
    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                return prev + 1;
            });
        }, 70);

        return () => clearInterval(timer);
    }, []);

    // Timer 7s
    useEffect(() => {
        const timer = setTimeout(() => setMinPassed(true), 7000);
        return () => clearTimeout(timer);
    }, []);

    // Hide quando loaded + 7s
    useEffect(() => {
        if (loaded && minPassed) setVisible(false);
    }, [loaded, minPassed]);

    // Block scroll
    useEffect(() => {
        if (visible) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "";
        return () => { document.body.style.overflow = ""; };
    }, [visible]);

    // Skip com mouse/tecla
    useEffect(() => {
        if (!visible) return;
        const skipLoading = () => setVisible(false);
        window.addEventListener("mousedown", skipLoading);
        window.addEventListener("keydown", skipLoading);
        return () => {
            window.removeEventListener("mousedown", skipLoading);
            window.removeEventListener("keydown", skipLoading);
        };
    }, [visible]);

    if (!visible) return null;

    return (
        <div className="fixed inset-0 bg-[#1A112E] 
                        w-screen h-dvh z-[9999] 
                        flex flex-col p-2 sm:p-4 md:p-8 
                        gap-2 sm:gap-4 md:gap-8
                        overflow-hidden text-white ">

            {/* Typewriter TOP */}
            <div className="flex-1 min-h-[25vh] flex items-start justify-center pt-[30vh] md:pt-12">
                <Typewriter
                    texts={[`Bem vindo(a) ${funcionario}!`]}
                    typeSpeed={80}
                    deleteSpeed={50}
                    pauseAfterWrite={6000}
                    className="typewriter-font text-center 
                               text-6xl sm:text-[10rem] md:text-6xl lg:text-[10rem]"
                    style={{ lineHeight: 1 }}
                />
            </div>

            {/* Dog BOTTOM */}
            <div className="min-h-[35vh] flex items-end justify-center pb-8 sm:pb-12 md:pb-[10vh]">
                <div className="relative w-[250px] h-[250px] sm:w-auto ml-10 sm:ml-0 sm:h-auto sm:scale-110 origin-bottom max-w-[80vw]">
                    <div className="dog w-full h-full">
                        <div className="dog__paws">
                            <div className="dog__bl-leg leg">
                                <div className="dog__bl-paw paw"></div>
                                <div className="dog__bl-top top"></div>
                            </div>
                            <div className="dog__fl-leg leg">
                                <div className="dog__fl-paw paw"></div>
                                <div className="dog__fl-top top"></div>
                            </div>
                            <div className="dog__fr-leg leg">
                                <div className="dog__fr-paw paw"></div>
                                <div className="dog__fr-top top"></div>
                            </div>
                        </div>
                        <div className="dog__body">
                            <div className="dog__tail"></div>
                        </div>
                        <div className="dog__head">
                            <div className="dog__snout">
                                <div className="dog__eyes">
                                    <div className="dog__eye-l"></div>
                                    <div className="dog__eye-r"></div>
                                </div>
                            </div>
                        </div>
                        <div className="dog__head-c">
                            <div className="dog__ear-r"></div>
                            <div className="dog__ear-l"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SVG Progress 6s 100% */}
            <div className="absolute bottom-6 right-6">
                <svg width="40" height="40" viewBox="0 0 40 40">
                    {/* Base */}
                    <circle
                        cx="20" cy="20" r="16"
                        fill="transparent"
                        stroke="rgba(255,255,255,0.2)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        pathLength="1"
                    />
                    {/* Progress */}
                    <circle
                        cx="20" cy="20" r="16"
                        fill="transparent"
                        stroke="#fff"
                        strokeWidth="3"
                        strokeLinecap="round"
                        pathLength="1"
                        strokeDasharray="1"
                        strokeDashoffset={1 - progress / 100}
                        transform="rotate(-90 20 20)"
                    />
                </svg>
            </div>

        </div>
    );
}
