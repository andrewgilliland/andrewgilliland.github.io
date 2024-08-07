import type { Metadata } from "next";
import { Space_Grotesk, Pixelify_Sans } from "next/font/google";
import "@/styles/index.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Drawer } from "@/components/Drawer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const pixelifySans = Pixelify_Sans({
  subsets: ["latin"],
  variable: "--font-pixelify-sans",
});

export const metadata: Metadata = {
  title: "Andrew Gilliland",
  description: "A community-taught Full Stack Mobile and Web Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${pixelifySans.variable} font-brand`}
      >
        <Header />
        <Drawer />
        <main className="flex flex-col pt-[82px] md:pt-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
