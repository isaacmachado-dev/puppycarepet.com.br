import { ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
    className?: string;
}

export default function HomeScreen({ children, className = "" }: SectionProps) {
    return (
        <div className="min-h-screen flex items-center justify-center mb-20">
            {children}
        </div>
    )
}