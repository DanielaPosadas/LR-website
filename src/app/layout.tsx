import "./globals.css";
import "next/font/google";
import { Outfit } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
const outfit = Outfit({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  });
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body className={`${outfit.className} relative`}>
          <Navbar />
          {children}</body>
      </html>
    )
  }