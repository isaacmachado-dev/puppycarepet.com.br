import { AtendimentoProvider } from "./AtendimentoContext";
import { CartHeader } from "./components/CartHeader";

export default function CartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AtendimentoProvider>
      <section className="min-h-screen bg-[#1A112E] text-black">
        <div className="flex flex-row gap-2 p-8 absolute">
          <CartHeader label="Atendimento" text="Puppy Care" />
        </div>
        <div className="flex flex-col justify-center items-center px-5 min-h-screen">
          {children}
        </div>
      </section>
    </AtendimentoProvider>
  );
}
