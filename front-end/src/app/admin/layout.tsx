'use client';
import { ThemeProvider } from "next-themes";



export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>

            <section className="bg-[#E3E3E3] dark:bg-[#242424]">
                {children}
            </section>

        </ThemeProvider>

    );
}
