export function AdminBlock({ children, className = " " }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={`bg-[#d1d6d2] dark:bg-[#3A3A3A] p-[2rem] mt-10 rounded-[2rem] ${className}`}>
            {children}
        </div>
    );
}

export function AdminBlockTitle({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="flex justify-left text-7xl mb-5 text-[1.85rem] dark:text-white justify-center items-center mx-auto">
            {children}
        </h2>
    );
}

export function AdminSectionTitle({ children }: { children: React.ReactNode }) {
    return (
        <h3 className="flex justify-left text-5xl mb-5 text-[1.5rem] dark:text-white">
            {children}
        </h3>
    );
}

export function AdminSectionDescription({ children }: { children: React.ReactNode }) {
    return (
        <p className="flex justify-left text-3xl mb-5 text-[1.2rem] dark:text-white">
            {children}
        </p>
    );
}

export function AdminHistoricList({ children }: { children?: React.ReactNode }) {
    return (
        <p className="flex justify-left text-3xl mb-5 text-[1.2rem] dark:text-white">
            {children}
        </p>
    );
};