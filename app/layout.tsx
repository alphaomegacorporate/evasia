import type { Metadata } from "next";
import "./globals.css";
import "./brand.css";
import { Header, Footer } from "@/components/header";
export const metadata: Metadata = { title: { default: "EVASIA TRAVEL & CONSULTING | Voyagez. Découvrez. Explorez.", template: "%s | EVASIA TRAVEL & CONSULTING" }, description: "EVASIA vous accompagne dans vos projets d’études, de voyage, de mobilité et de travail à l’international.", applicationName: "EVASIA TRAVEL & CONSULTING" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="fr"><body><Header/><main>{children}</main><Footer/></body></html>; }
