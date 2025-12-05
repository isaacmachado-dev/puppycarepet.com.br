import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FooterClient from "../components/ui/custom/FooterClient";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Puppy Care",
  description: "Bla bla bla",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {

  // Esconde o rodapé nas rotas de login, criar-uma-nova-conta e esqueci-a-senha
  let hideFooter = false;
  if (typeof window !== "undefined") {
    const path = window.location.pathname;
    hideFooter = [
      "/login",
      "/login/crie-uma-nova-conta",
      "/login/esqueci-a-senha"
    ].some((segment) => path.startsWith(segment));
  }
  return (
    <html lang="pt-br" className={inter.variable}>
      <body>
        {children}
        {!hideFooter && <FooterClient />}
      </body>
    </html>
  );
}