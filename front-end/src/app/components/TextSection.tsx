import { ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
    className?: string;
}

export default function H2({ children, className = "" }: SectionProps) {
    return (
        <h2 className={`text-5xl font-bold ${className}`}>
            {children}
        </h2>
    )
}