import type { AppProps } from "next/app";
import { Noto_Sans, Space_Grotesk } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-noto-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-space-grotesk",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${notoSans.variable} font-sans`}>
      <Header />
      <main className={`flex flex-col min-h-screen`}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
