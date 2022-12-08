import Head from "next/head";
import React, { useEffect, useRef } from "react";
import { Parallax } from "react-scroll-parallax";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

type Props = {};

const page = (props: Props) => {
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
};

export default page;
