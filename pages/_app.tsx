import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import "../styles/globals.scss";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
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
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
