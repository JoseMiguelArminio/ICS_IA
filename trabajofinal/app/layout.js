import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gestor de Equipos",
  description: "Aplicación de gestión de equipos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        <nav style={{ padding: 20, borderBottom: "1px solid #ccc" }}>
          <Link href="/">Inicio</Link>{" | "}
          <Link href="/equipos">Equipos</Link>{" | "}
          <Link href="/nuevo-equipo">Nuevo Equipo</Link>
        </nav>

        <main style={{ flex: 1, padding: 20 }}>
          {children}
        </main>

      </body>
    </html>
  );
}
