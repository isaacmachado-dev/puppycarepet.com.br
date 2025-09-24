import Link from "next/link";

export default function AdminMenuItem({
    icon,
    label,
    href,
    isOpen,
    danger = false,
    className
}: {
    icon: React.ReactNode;
    label: string;
    href: string;
    isOpen: boolean;
    danger?: boolean;
    className?: string;
}) {
    return (
        <Link
            href={href}
            className={`flex items-center gap-3 rounded-md px-4 py-2 hover:bg-[#2A2D34] ${danger
                ? "bg-[#E45C5C] hover:bg-[#F63434]"
                : "bg-[#AAAAAA]"
                } ${className || ""}`}
        >
            {icon}
            {isOpen && <span className="text-currentColor hover:text-white ">{label}</span>}
        </Link>
    );
}
