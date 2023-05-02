import type { AppProps } from "next/app";
import { Noto_Sans } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-noto-sans",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${notoSans.variable} font-sans`}>
      <Header />
      <main
        className={`flex flex-col min-h-screen border border-cyan-300 max-w-screen-lg mx-auto container pt-10`}
      >
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
