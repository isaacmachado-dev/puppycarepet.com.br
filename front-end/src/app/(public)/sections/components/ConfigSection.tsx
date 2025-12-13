import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export function SectionYellow({ children, className = "" }: SectionProps) {
  return (
    <section className={`bg-[#1A112E] py-15 sm:py-30 sm:p-10 flex flex-col justify-center text-white ${className}`}>
      {children}
    </section>
  );
}

export function SectionPurple({ children, className = "" }: SectionProps) {
  return (
    <section className={`bg-[#20123F] py-15 sm:py-30 p-5 sm:p-10 flex flex-col justify-center items-center ${className}`}>
      {children}
    </section>
  );
}

export function SetupSection({ children, className = "" }: SectionProps) {

  return (
    <div className={`w-full max-w-[1200px] mx-auto p-5 sm:px-10 ${className}`}>
      {children}
    </div>
  );
}

export function PurpleButton({ children, className = "" }: SectionProps) {
  return (
    <div className={`group relative border-3 border-transparent hover:border-[#FECE14] px-5 py-2.5 bg-[#1A112E] rounded-lg sm:text-2xl text-black font-medium flex items-center gap-3 h-[120px] sm:h-[150px] cursor-pointer ${className}`}>
      {children}
    </div>
  );
}
