import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import SportLight from "../components/common/SportLight";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Eagle Links",
  description: "Eagles Digital marketing agency",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={cn("h-full", "dark", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      {/* <SportLight/> */}
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
