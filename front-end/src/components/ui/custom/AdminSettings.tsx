export function AdminBlock({ children, className = " " }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={`bg-[#d1d6d2] dark:bg-[#3A3A3A] p-[2rem] mt-10 rounded-[2rem] ${className}`}>
            {children}
        </div>
    );
}

export function AdminBlockTitle({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="flex justify-left text-7xl mb-5 text-[1.85rem] dark:text-white">
            {children}
        </h2>
    );
}

