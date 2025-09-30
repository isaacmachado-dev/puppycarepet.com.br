import Link from "next/link";

export default function AdminMenuItem({
    icon,
    label,
    href,
    isOpen,
    danger = false,
    className,
    onClick
}: {
    icon: React.ReactNode;
    label: string;
    href?: string;
    isOpen: boolean;
    danger?: boolean;
    className?: string;
    onClick?: () => void;
}) {
    const baseClasses = `flex items-center gap-3 rounded-md px-4 py-2 hover:bg-[#333] ${danger ? "bg-[#E45C5C] hover:bg-[#F63434]" : "bg-[#AAAAAA]"
        } ${className || ""}`;

    return href ? (
        <Link href={href} className={baseClasses}>
            {icon}
            {isOpen && <span className="text-currentColor hover:text-white">{label}</span>}
        </Link>
    ) : (
        <div onClick={onClick} className={`cursor-pointer ${baseClasses}`}>
            {icon}
            {isOpen && <span className="text-currentColor hover:text-white">{label}</span>}
        </div>
    );
}
