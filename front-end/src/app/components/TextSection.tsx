import { ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
    className?: string;
}

export default function H2({ children, className = "" }: SectionProps) {
    return (
        <h2 className={`text-5xl font-bold text-center sm:text-left ${className}`}>
            {children}
        </h2>
    )
}