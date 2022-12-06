import Link from "next/link";
import React, { useEffect } from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div
      id="navbar"
      className="w-screen h-14 flex items-center justify-between fixed p-12 z-50 transition-all"
    >
      <div className="flex flex-row gap-6 justify-center items-center">
        {/* <h1>logo</h1> */}
        <h1 className="text-4xl tracking-[3px] uppercase font-['Oswald']">
          bccrp
        </h1>
      </div>
      <div className="flex flex-row gap-12 justify-center items-center">
        <p
          onClick={() =>
            document.getElementById("main")!.scrollTo({
              top: document.getElementById("hero")!.offsetTop,
              behavior: "smooth",
            })
          }
          className="nav-item cursor-pointer text-xl tracking-[3px] uppercase font-['Oswald']"
        >
          Home
        </p>
        <p
          onClick={() =>
            document.getElementById("main")!.scrollTo({
              top: document.getElementById("features")!.offsetTop,
              behavior: "smooth",
            })
          }
          className="nav-item cursor-pointer text-xl tracking-[3px] uppercase font-['Oswald']"
        >
          Features
        </p>
        <Link href="https://player.blaineccrp.com/@me">
          <p className="nav-item cursor-pointer text-xl tracking-[3px] uppercase font-['Oswald']">
            Dashboard
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
