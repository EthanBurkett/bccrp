import Link from "next/link";
import { ScriptProps } from "next/script";
import React, { useEffect, useRef } from "react";
import { BiChevronDown } from "react-icons/bi";
type Props = {};
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = (props: ScriptProps) => {
  const [image, setImage] = React.useState<number>(0);
  const images = [
    "https://player.blaineccrp.com/static/img/bg_1.png",
    "https://player.blaineccrp.com/static/img/bg_2.png",
    "https://player.blaineccrp.com/static/img/bg_3.png",
  ];
  const imageEls = [
    useRef<HTMLImageElement>(null),
    useRef<HTMLImageElement>(null),
    useRef<HTMLImageElement>(null),
    useRef<HTMLImageElement>(null),
    useRef<HTMLImageElement>(null),
    useRef<HTMLImageElement>(null),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setImage((image) => {
        const prev = image;

        image = image > images.length ? 0 : image + 1;
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
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 1.2,
            delay: 3,
          }}
          viewport={{
            once: true,
          }}
          className="absolute hidden md:flex bottom-8 cursor-pointer z-50"
          onClick={() =>
            document.getElementById("main")!.scrollTo({
              top: document.getElementById("features")!.offsetTop,
              behavior: "smooth",
            })
          }
        >
          <BiChevronDown color={"white"} className="text-white text-7xl" />
        </motion.div>
        <div className="w-full h-full bg-[rgba(0,0,0,0.35)] absolute z-40"></div>
        {images.map((img, index) => (
          <>
            <img
              alt="background"
              src={img}
              ref={imageEls[index]}
              className={`w-full h-full object-cover absolute transition-[opacity] duration-75 ${
                index == 0 ? "opacity-100" : "opacity-0"
              }`}
            />
          </>
        ))}
        <div className="text z-40 flex justify-center items-center flex-col gap-6">
          <motion.h1
            initial={{
              opacity: 0,
              x: -100,
            }}
            viewport={{
              once: true,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1.2,
              delay: 0.6,
              ease: "easeOut",
            }}
            className="text-2xl md:text-4xl font-['Oswald'] tracking-[3px] uppercase text-[#EEEEEE]/80"
          >
            Welcome to
          </motion.h1>
          <motion.h1
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1.2,
              delay: 1.3,
              ease: "easeOut",
            }}
            viewport={{
              once: true,
            }}
            className="text-4xl text-center md:text-6xl font-['Oswald']  tracking-[6px] uppercase"
          >
            Blaine County Country Roleplay
          </motion.h1>
          <motion.p
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1.2,
              delay: 1.6,
              ease: "easeOut",
            }}
            viewport={{
              once: true,
            }}
            className="text-lg w-1/2 text-center font-light"
          >
            One of the best roleplay servers that you can find on FiveM. active
            departments and professional staff.
          </motion.p>
          <br />
        </div>
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.2,
            delay: 2,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
          }}
          className="bottom-[25vh] z-50 absolute hidden md:flex gap-6 flex-row justify-center items-center"
        >
          <Link href="fivem://connect/play.blaineccrp.com">
            <p
              title={`If this doesn't work, connect to "play.blaineccrp.com" `}
              className="bg-hover relative orange flex flex-row  items-center text-center justify-evenly gap-2 cursor-pointer p-2 px-6 border-2 border-[var(--color)] uppercase font-light transition-all"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mr-2"
                fill="#EEEEEE"
              >
                <path d="M22.4 24h-5.225c-.117 0-.455-1.127-1.026-3.375-1.982-6.909-3.124-10.946-3.417-12.12l3.37-3.325h.099c.454 1.42 2.554 7.676 6.299 18.768ZM12.342 7.084h-.048a3.382 3.385 0 0 1-.098-.492v-.098a102.619 102.715 0 0 1 3.272-3.275c.13.196.196.356.196.491v.05a140.694 140.826 0 0 1-3.322 3.324ZM5.994 10.9h-.05c.67-2.12 1.076-3.209 1.223-3.275L14.492.343c.08 0 .258.524.533 1.562zm1.37-4.014h-.05C8.813 2.342 9.612.048 9.71 0h4.495v.05a664.971 664.971 0 0 1-6.841 6.839Zm-2.69 7.874h-.05c.166-.798.554-1.418 1.174-1.855a312.918 313.213 0 0 1 5.71-5.717h.05c-.117.672-.375 1.175-.781 1.52zM1.598 24l-.098-.05c1.399-4.172 2.148-6.322 2.248-6.45l6.74-6.694v.05C10.232 11.88 8.974 16.263 6.73 24Z" />
              </svg>
              Join Server
            </p>
          </Link>
          <Link href="https://discord.gg/bccrp">
            <p
              title="Join the discord server"
              className="bg-hover relative blurple flex flex-row  items-center text-center justify-evenly cursor-pointer border-2 border-[var(--color)] p-2 px-6 uppercase font-light transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-discord w-6 h-6 mr-4"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />{" "}
              </svg>
              Discord
            </p>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
