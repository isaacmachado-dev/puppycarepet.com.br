import { ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
    className?: string;
}

export default function HomeScreen({ children, className = "" }: SectionProps) {
    return (
        <div className={`min-h-screen -mt-10 sm:mt-0 flex items-center justify-center mb-20 ${className}`}>
            {children}
        </div>
    );
}