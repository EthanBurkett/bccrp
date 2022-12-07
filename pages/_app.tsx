import { ParallaxProvider } from "react-scroll-parallax";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import "../styles/globals.scss";
import Head from "next/head";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  const changeNavbarColor = () => {
    const el = document.getElementById("main")!;
    const hero = document.getElementById("hero")!;
    if (el.scrollTop >= hero.scrollHeight / 8) {
      document.getElementById("navbar")!.classList.add("bg-[#2D4059]");
    } else {
      document.getElementById("navbar")!.classList.remove("bg-[#2D4059]");
    }
  };

  return (
    <div
      id="main"
      className="w-screen h-screen bg-[#222831] text-[#EEEEEE] absolute overflow-x-hidden snap-y snap-always"
      onScroll={changeNavbarColor}
    >
      <Navbar />
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400&family=Roboto&display=swap"
        ></link>
        <meta property="og:title" content="Blaine County Roleplay" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://blaineccrp.com/" />
        <meta
          property="og:image"
          content="https://player.blaineccrp.com/static/img/gta.png"
        />
        <meta
          property="og:description"
          content="One of the best roleplay servers that you can find on FiveM. active departments and professional staff."
        />
        <meta property="og:site_name" content="Blaine County Roleplay" />
        <meta property="og:locale" content="en_US" />
        <meta name="theme-color" content="#FF5722" />
      </Head>

      <section id="hero" className="snap-center scroll-smooth">
        <Hero />
      </section>

      <section id="features" className="snap-center scroll-smooth">
        <Features />
      </section>

      <section id="footer" className="snap-center scroll-smooth">
        <Footer />
      </section>
    </div>
  );
}

export default MyApp;
