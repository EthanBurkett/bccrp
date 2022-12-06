import { ScriptProps } from "next/script";
import React, { useEffect, useRef } from "react";
import { BiChevronDown } from "react-icons/bi";
type Props = {};

const Hero = (props: ScriptProps) => {
  const [image, setImage] = React.useState<number>(1);
  const images = [
    "https://player.blaineccrp.com/static/img/bg_1.png",
    "https://player.blaineccrp.com/static/img/bg_2.png",
    "https://player.blaineccrp.com/static/img/bg_3.png",
  ];
  const imageEls = [
    useRef<HTMLImageElement>(null),
    useRef<HTMLImageElement>(null),
    useRef<HTMLImageElement>(null),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setImage((image) => {
        const prev = image;

        image = (image + 1) % 3;
        imageEls[image].current!.classList.add("opacity-100");
        imageEls[image].current!.classList.remove("opacity-0");
        imageEls[prev].current!.classList.remove("opacity-100");
        imageEls[prev].current!.classList.add("opacity-0");

        console.log(image);
        return image;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="container flex flex-col w-screen h-[100vh] relative justify-center ">
      <div className="w-screen h-full absolute flex justify-center items-center ">
        <div
          className="absolute bottom-8 cursor-pointer z-50"
          onClick={() =>
            document.getElementById("main")!.scrollTo({
              top: document.getElementById("features")!.offsetTop,
              behavior: "smooth",
            })
          }
        >
          <BiChevronDown color={"white"} className="text-white text-7xl" />
        </div>
        <div className="w-full h-full bg-[rgba(0,0,0,0.35)] absolute z-40"></div>
        {images.map((img, index) => (
          <>
            <img
              src={img}
              ref={imageEls[index]}
              className={`w-full h-full object-cover absolute transition-[opacity] duration-75 ${
                index == 0 ? "opacity-100" : "opacity-0"
              }`}
            />
          </>
        ))}
        <div className="text z-40 flex justify-center items-center flex-col gap-6">
          <h1 className="text-4xl font-['Oswald'] tracking-[3px] uppercase text-[#EEEEEE]/80">
            Welcome to
          </h1>
          <h1 className="text-6xl font-['Oswald'] tracking-[6px] uppercase">
            Blaine County Country Roleplay
          </h1>
          <p className="text-lg w-1/2 text-center font-light">
            One of the best roleplay servers that you can find on FiveM. active
            departments and professional staff.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
