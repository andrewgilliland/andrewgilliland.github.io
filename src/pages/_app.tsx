import type { AppProps } from "next/app";
import { Space_Grotesk, VT323 } from "next/font/google";
import "@/styles/index.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const vt323 = VT323({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-vt323",
});

const App = ({ Component, pageProps }: AppProps) => {
  console.log("spaceGrotesk: ", spaceGrotesk);
  console.log("vt323: ", vt323);

  return (
    <body className={`${spaceGrotesk.variable} ${vt323.variable} font-brand`}>
      <Header />
      <main className={`flex flex-col min-h-screen`}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </body>
  );
};

export default App;
