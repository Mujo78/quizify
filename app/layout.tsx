import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import ModalProvider from "./components/Modal/ModalProvider";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["900", "700", "500", "400"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Quizify",
  description: "Quiz game, test your knowledge right here, right now!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <ModalProvider />
        <main className="min-h-screen w-full flex flex-col">{children}</main>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
