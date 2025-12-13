'use client';
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";



export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-br">
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>

                <section className="bg-[#E3E3E3] dark:bg-[#242424]">
                    {children}
                </section>

            </ThemeProvider>

        </html>
    );
}
