import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CartDrawer } from "@/components/cart/cart-drawer";
import { ToastContainer } from "@/components/ui/toast";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: 'La Barra - Discoteca y Club Nocturno | San Salvador de Jujuy',
  description: 'La discoteca más exclusiva de San Salvador de Jujuy. Vive las mejores noches con música increíble y ambiente único. Abierto viernes y sábados.',
  keywords: ['discoteca jujuy', 'club nocturno jujuy', 'san salvador de jujuy', 'vida nocturna', 'la barra', 'discoteca', 'eventos jujuy'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${inter.variable} font-sans antialiased bg-black text-white min-h-screen`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <CartDrawer />
        <ToastContainer />
      </body>
    </html>
  );
}
