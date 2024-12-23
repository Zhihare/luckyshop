import type { Metadata } from "next";
import {Unbounded, Roboto_Mono} from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components/shared";

const geistSans = Unbounded({
  subsets: ['cyrillic'],
  variable: "--font-unbounded",
  weight: ["400", "500", "600", "900"],
});

const geistMono = Roboto_Mono({
  subsets: ['cyrillic'],
  variable: "--font-roboto",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Next shop",
  description: "Generated by create next app",
  icons: {
    icon: '/Man_lucky_shop.ico',
    // Путь к файлу иконки в папке public
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header className="" />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer/>
        
      </body>
    </html>
  );
}
