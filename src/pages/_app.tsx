import type { AppProps } from "next/app";
import { Space_Grotesk, Pixelify_Sans } from "next/font/google";
import "@/styles/index.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const pixelifySans = Pixelify_Sans({
  subsets: ["latin"],
  variable: "--font-pixelify-sans",
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <body
      className={`${spaceGrotesk.variable} ${pixelifySans.variable} font-brand`}
    >
      <Header />
      <main className={`flex flex-col min-h-screen`}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </body>
  );
};

export default App;
