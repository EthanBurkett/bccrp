import React from "react";
import { SocialIcon } from "react-social-icons";
import { FaDiscord, FaTiktok } from "react-icons/fa";
import Link from "next/link";
import { AiFillCopyrightCircle } from "react-icons/ai";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="absolute bg-dark h-[25vh] w-screen flex justify-center items-center">
      <div className="flex flex-row gap-4 w-1/2 justify-evenly items-center">
        <div className="flex flex-col gap-4 justify-center">
          <h1 className="text-4xl">Socials</h1>
          <div className="flex flex-col">
            <Link href="https://www.discord.gg/bccrp">
              <p className="text-xl flex flex-row items-center gap-3">
                <FaDiscord size={24} color={"#EEEEEE"} />
                Discord
              </p>
            </Link>
            <Link href="https://www.tiktok.com/@official_bccrp?_t=8XwQkwlB6DO&_r=1">
              <p className=" text-xl flex flex-row items-center gap-3 ">
                <FaTiktok size={24} color={"#EEEEEE"} />
                TikTok
              </p>
            </Link>
          </div>
        </div>
        <h1 className="darker-text flex flex-row justify-center items-center text-lg gap-6">
          <div className="flex flex-row justify-center items-center gap-1">
            Copyright 2022
            <AiFillCopyrightCircle size={16} />
          </div>
          Blaine County Country RP
        </h1>
      </div>
    </div>
  );
};

export default Footer;
