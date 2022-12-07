import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Squash } from "hamburger-react";
import { FaHome } from "react-icons/fa";
import { MdFeaturedPlayList } from "react-icons/md";
import { RiDashboardFill } from "react-icons/ri";
import { ScriptProps } from "next/script";

type Props = {};

const Navbar = (props: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setOpen(!open);
    const menu = document.getElementById("mobile-menu")!;

    menu.classList.toggle("h-screen");
    menu.classList.toggle("h-0");
  };

  return (
    <div
      id="navbar"
      className="w-screen h-14 flex items-center justify-between fixed p-12 z-[60] transition-all"
    >
      <div className="flex flex-row gap-6 justify-center items-center">
        {/* <h1>logo</h1> */}
        <h1 className="text-4xl tracking-[3px] uppercase font-['Oswald']">
          bccrp
        </h1>
      </div>
      <div className="md:flex flex-row gap-4 md:gap-12 justify-center items-center">
        <div className="hidden md:flex flex-row gap-4 md:gap-12 justify-center items-center">
          <p
            onClick={() =>
              document.getElementById("main")!.scrollTo({
                top: document.getElementById("hero")!.offsetTop,
                behavior: "smooth",
              })
            }
            className="nav-item cursor-pointer text-md md:text-xl tracking-[3px] uppercase font-['Oswald']"
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
            className="nav-item cursor-pointer text-md md:text-xl tracking-[3px] uppercase font-['Oswald']"
          >
            Features
          </p>
          <Link href="https://player.blaineccrp.com/@me">
            <p className="nav-item cursor-pointer text-md md:text-xl tracking-[3px] uppercase font-['Oswald']">
              Dashboard
            </p>
          </Link>
        </div>
        <div className="md:hidden flex flex-row gap-4 justify-center items-center z-50 relative">
          <Squash toggled={open} toggle={handleToggle} />
        </div>
        <div
          id="mobile-menu"
          className="w-screen h-0 bg-[#222831] fixed top-0 left-0 flex flex-col justify-evenly items-center z-40"
        >
          <MobileNavItem
            functions={{
              setOpen,
              handleToggle,
            }}
            onClick={() =>
              document.getElementById("main")!.scrollTo({
                top: document.getElementById("hero")!.offsetTop,
                behavior: "smooth",
              })
            }
            text="Home"
            icon={<FaHome size={48} />}
          />
          <MobileNavItem
            text="Features"
            functions={{
              setOpen,
              handleToggle,
            }}
            onClick={() =>
              document.getElementById("main")!.scrollTo({
                top: document.getElementById("features")!.offsetTop,
                behavior: "smooth",
              })
            }
            icon={<MdFeaturedPlayList size={48} />}
          />
          <MobileNavItem
            functions={{
              setOpen,
              handleToggle,
            }}
            text="Dashboard"
            url="https://player.blaineccrp.com/@me"
            icon={<RiDashboardFill size={48} />}
          />
        </div>
      </div>
    </div>
  );
};

interface Functions {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleToggle: () => void;
}

const MobileNavItem = (
  props: {
    text: string;
    icon: JSX.Element;
    url?: string;
    functions: Functions;
  } & ScriptProps
) => {
  return (
    <div
      onClick={(e) => {
        props.functions.setOpen(false);
        props.functions.handleToggle();

        if (props.url) {
          window.location.href = props.url;
        } else if (props.onClick) {
          props.onClick(e as React.MouseEvent<any, MouseEvent>);
        }
      }}
      className="cursor-pointer focus:bg-[#37414f] active:bg-[#37414f] hover:bg-[#37414f] transition-all flex flex-row gap-6 justify-center items-center active w-screen h-1/5"
    >
      <div className="icon">{props.icon}</div>
      <h1 className="text-3xl">{props.text}</h1>
    </div>
  );
};

export default Navbar;
