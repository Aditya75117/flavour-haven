import type { Metadata } from "next";
import { Playfair_Display, Lora, Pacifico } from "next/font/google";
import "@/styles/globals.scss";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const pacifico = Pacifico({
  subsets: ["latin"],
  variable: "--font-pacifico",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Flavour Haven — Fine Dining Restaurant",
  description:
    "Experience exquisite cuisine crafted with passion. Flavour Haven offers a warm ambiance, seasonal menus, and unforgettable dining moments.",
  keywords: ["restaurant", "fine dining", "cuisine", "food", "reservations"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${lora.variable} ${pacifico.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
