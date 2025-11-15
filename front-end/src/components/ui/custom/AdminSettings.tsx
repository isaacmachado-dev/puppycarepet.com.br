import { Children } from "react";

export function AdminBlock({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-[#E9EEEA] p-[2rem] mt-10 rounded-[2rem]">
            {children}
        </div>
    );
}

export function AdminBlockTitle({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="flex justify-left text-7xl mb-5 text-[1.85rem]">
            {children}
        </h2>
    );
}

