import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Admin - Puppy Care",
    description: "Bla bla bla",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <section className="">
            {children}
        </section>
    );
}
