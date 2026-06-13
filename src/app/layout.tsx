import type { Metadata } from "next";
import "./globals.css";
import "./light-effects.css";

export const metadata: Metadata = {
  title: "Viktor Iliev | Portfolio",
  description: "Personal portfolio built with Next.js, TypeScript and TailwindCSS."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}