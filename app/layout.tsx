import type { Metadata } from "next";
import { Playfair_Display, Lora } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"]
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"]
});

export const metadata: Metadata = {
  title: "Aurelia Café – Boutique Coffee & Bakery",
  description:
    "Aurelia Café is a sunlit corner of the city serving thoughtfully roasted coffee, slow breakfasts, and seasonal pastries in a warm, linen-and-wood interior."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${lora.variable} font-body bg-cream`}>
        {children}
      </body>
    </html>
  );
}
