import type { AppProps } from "next/app";
import { Space_Grotesk } from "next/font/google";
import "@/styles/index.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
});

const App = ({ Component, pageProps }: AppProps) => (
  <div className={`${spaceGrotesk.className}`}>
    <Header />
    <main className={`flex flex-col min-h-screen`}>
      <Component {...pageProps} />
    </main>
    <Footer />
  </div>
);

export default App;
