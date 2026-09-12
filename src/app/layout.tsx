import type { Metadata } from "next";
import { MobileExperienceCollapse } from "@/components/MobileExperienceCollapse";
import "./globals.css";
import "./mobile-skills.css";
import "./project-separation.css";
import "./mobile-background.css";

export const metadata: Metadata = {
  title: "Viktor Iliev | Portfolio",
  description: "Personal portfolio built with Next.js, TypeScript and TailwindCSS.",
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <MobileExperienceCollapse />
        {children}
      </body>
    </html>
  );
}
