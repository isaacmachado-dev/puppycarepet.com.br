import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Puppy Care",
  description: "Bla bla bla",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"></meta>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

      <body>{children}</body>
    </html>
  );
}
