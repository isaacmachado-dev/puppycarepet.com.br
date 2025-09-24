import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Login - Puppy Care",
    description: "Bla bla bla",
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
    return (
        <section className="">
            {children}
        </section>
    );
}
