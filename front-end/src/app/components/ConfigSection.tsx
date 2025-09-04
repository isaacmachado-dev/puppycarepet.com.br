import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export function SectionYellow({ children, className = "" }: SectionProps) {
  return (
    <section className={`bg-[#FECE14] py-25 sm:py-30 p-5 sm:p-10 flex flex-col justify-center text-black ${className}`}>
      {children}
    </section>
  );
}

export function SectionPurple({ children, className = "" }: SectionProps) {
  return (
    <section className={`bg-[#1A112E] py-25 sm:py-30 p-5 sm:p-10 flex flex-col justify-center items-center ${className}`}>
      {children}
    </section>
  );
}

export function SetupSection({ children, className = "" }: SectionProps) {

  return (
    <div className={`w-full max-w-[1200px] mx-auto px-5 sm:px-10 ${className}`}>
      {children}
    </div>
  );

}