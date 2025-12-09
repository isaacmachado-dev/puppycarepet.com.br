import { AtendimentoProvider } from "./AtendimentoContext";
import { CartHeader } from "./components/CartHeader";

export default function CartLayout({ children }: { children: React.ReactNode }) {
  return (
    <AtendimentoProvider>
      <section className="min-h-screen bg-[#1A112E] text-black">
        <CartHeader />
        <div className="flex flex-col justify-center items-center px-5 min-h-screen">
          <div className="bg-white p-10 rounded-xl w-full max-w-3/4 h-1/2 shadow-lg flex flex-col gap-6">
            {children}
          </div>
        </div>
      </section>
    </AtendimentoProvider>
  );
}