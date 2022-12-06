import { ScriptProps } from "next/script";
import React from "react";
import {
  BsFillPersonFill,
  BsFillAwardFill,
  BsFillCalendarEventFill,
} from "react-icons/bs";
import { GiFireAxe } from "react-icons/gi";
import { ImAirplane, ImHammer2 } from "react-icons/im";
import { FaCode, FaServer, FaAmbulance } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { RiHandCoinFill, RiLiveFill } from "react-icons/ri";

type Props = {};

const Features = (props: ScriptProps) => {
  return (
    <div className="flex flex-col h-[100vh] w-screen relative items-center justify-evenly text-center p-20">
      <h1 className="text-5xl uppercase tracking-[24px]">Features</h1>
      <div className="flex flex-row gap-12 items-center flex-shrink-0 w-3/4 h-[32rem] overflow-x-scroll overflow-y-hidden">
        <Feature
          title="Staff"
          description="
              We have a very large staff team that is on constantly moderating
              the server and discord. We have people from all around the world
              to ensure your roleplay stays amazing.
            "
          icon={<BsFillPersonFill color={"#2D4059"} size={64} />}
        />
        <Feature
          title="Law Enforcement"
          description="
              We have around 80 Law Enforcment Officers to patrol the state of
              San Andreas. There mission is to protect and serve.
            "
          icon={<BsFillAwardFill color={"#2D4059"} size={64} />}
        />
        <Feature
          title="SAFD"
          description="
              We have a very active and well trained fire department. San
              Andreas Fire Department attends both Fire and EMS calls.
            "
          icon={<GiFireAxe color={"#2D4059"} size={64} />}
        />
        <Feature
          title="FAA"
          description="
              Our server has an amazing Federal Aviation Administration. You can
              get certified from basic helicopers to advanced fighter jets.
            "
          icon={<ImAirplane color={"#2D4059"} size={64} />}
        />
        <Feature
          title="Development Team"
          description="
              In addition to our staff team we also have our Development Team.
              This is a small team that includes making and writing scripts to
              making web applications to texturing vehicles and EUP.
            "
          icon={<FaCode color={"#2D4059"} size={64} />}
        />
        <Feature
          title="24/7"
          description="
              We pride ourselves on having little to no down time. Some things
              to come up but we work fast to resolve any and all issues.
            "
          icon={<FaServer color={"#2D4059"} size={64} />}
        />
        <Feature
          title="AntiCheat"
          description="
              We have the best and most effective AntiCheat. We have this to
              ensure good roleplay for all server members.
            "
          icon={<ImHammer2 color={"#2D4059"} size={64} />}
        />
        <Feature
          title="VIP And Donators"
          description="
              We have a very advanced and fast donation program. You can buy VIP
              or donator cars on our
            "
          icon={<MdAttachMoney color={"#2D4059"} size={64} />}
        />
        <Feature
          title="Giveaways"
          description="
              Sometimes we do Discord Nitro or in game VIP giveaways.
            "
          icon={<RiHandCoinFill color={"#2D4059"} size={64} />}
        />
        <Feature
          title="Emergency Vehicles"
          description="
              All of our emergency vehicles are suited to our server, and they
              all work well for our departments.
            "
          icon={<FaAmbulance color={"#2D4059"} size={64} />}
        />
        <Feature
          title="Events"
          description="
              We have events all the time. Such as parties, concerts, races and
              more.
            "
          icon={<BsFillCalendarEventFill color={"#2D4059"} size={64} />}
        />
        <Feature
          title="Streaming And Recording"
          description="
              We love when people stream or record on our server. This is why we
              keep our server as streamer friendly as possible.
            "
          icon={<RiLiveFill color={"#2D4059"} size={64} />}
        />
      </div>
    </div>
  );
};

const Feature = (props: { title: string; description: string; icon: any }) => {
  return (
    <div className="flex flex-col flex-shrink-0 gap-6 justify-center items-center bg-[#2D4059] p-12 rounded-lg w-96 h-[28rem]">
      <div className=" flex justify-center items-center w-24 h-24 bg-[#EEEEEE] rounded-full">
        {props.icon}
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl uppercase tracking-[6px]">{props.title}</h1>
        <p className="text-lg">{props.description}</p>
      </div>
    </div>
  );
};

export default Features;
