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

  return (
    <html lang="pt-br" className={inter.variable}>
      <body>
        {children}
        <FooterClient />
      </body>
    </html>
  );
}