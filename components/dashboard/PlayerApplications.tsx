import { GuildMember } from "discord.js";
import { ScriptProps } from "next/script";
import React from "react";
import { Application } from "../../utils/types";
import { motion } from "framer-motion";

type Props = {
  apps: {
    user: {
      guildId: string;
      joinedTimestamp: number;
      premiumSinceTimestamp: number;
      nickname: string;
      pending: boolean;
      communicationDisabledUntilTimestamp: any;
      userId: string;
      avatar: string;
      displayName: string;
      roles: string[];
      avatarURL: string;
      displayAvatarURL: string;
    };
    app: Application;
  }[];
  selected: number;
  functions: {
    setSelected: React.Dispatch<React.SetStateAction<number>>;
  };
};

const Applications = (props: Props) => {
  return (
    <div className="hide-scroll w-1/2 md:w-full left-52 md:left-0 md:justify-center items-center h-1/2 p-5 absolute flex flex-col md:flex-wrap md:flex-row gap-6 flex-shrink-0 overflow-y-scroll overflow-x-">
      {props.apps.map((app, i) => (
        <ApplicationButton
          app={app}
          props={props}
          index={i}
          key={app.user.displayName}
        >
          <div className="w-full flex flex-row items-center justify-between gap-2">
            <div className="flex flex-row gap-2">
              <img
                src={app.user.displayAvatarURL}
                className="w-16 h-16 rounded-full"
              />
            </div>

            <div>
              <h1></h1>
            </div>

            <div className="flex flex-col gap-1">
              <div className="text-lg md:text-4xl font-normal">
                {app.user.displayName}
              </div>
              <div className="text-sm md:text-xl font-light text-right uppercase">
                {app.app.status}
              </div>
            </div>
          </div>
        </ApplicationButton>
      ))}
    </div>
  );
};

const ApplicationButton = ({
  props,
  children,
  app,
  index,
}: { props: Props; app: any; index: number } & ScriptProps) => {
  return app.app.status === "pending" ? (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      transition={{
        delay: 0 + index * 0.05,
        duration: 1,
        ease: "easeOut",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      className={`border-2 border-[#f2ff80] bg-light w-full md:w-1/4 h-28 rounded-full flex p-12 items-center cursor-pointer`}
    >
      {children}
    </motion.div>
  ) : app.app.status == "approved" ? (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      transition={{
        delay: 0 + index * 0.05,
        duration: 1,
        ease: "easeOut",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      className={`border-2 border-[#80ff8c] bg-light w-full md:w-1/4 h-28 rounded-full flex p-12 items-center cursor-pointer`}
    >
      {children}
    </motion.div>
  ) : (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      transition={{
        delay: 0 + index * 0.05,
        duration: 1,
        ease: "easeOut",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      className={`border-2 border-[#ff5c5c] bg-light w-full md:w-1/4 h-28 rounded-full flex p-12 items-center cursor-pointer`}
    >
      {children}
    </motion.div>
  );
};

export default Applications;
