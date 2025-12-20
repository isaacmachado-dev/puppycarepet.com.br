import { AtendimentoProvider } from "./AtendimentoContext";
import { CartHeader } from "./components/CartHeader";

export default function CartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AtendimentoProvider>
      <section className="min-h-screen bg-[#1A112E] text-black pb-10">
        <div className="flex flex-row gap-2 p-8">
          <CartHeader label="Atendimento" text="Puppy Care" />
        </div>
        <div className="flex flex-col justify-center items-center px-5">
          {children}
        </div>
      </section>
    </AtendimentoProvider>
  );
}
