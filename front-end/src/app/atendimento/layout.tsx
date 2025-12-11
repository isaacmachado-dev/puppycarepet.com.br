import { CartHeader } from "./cart/components/CartHeader";


export default function AtendimentoLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="min-h-screen bg-[#1A112E] text-black">
            {children}
        </section>
    );
}
