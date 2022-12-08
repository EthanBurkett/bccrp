import { ScriptProps } from "next/script";
import React from "react";
import { AiFillAppstore } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { RiUserSettingsFill } from "react-icons/ri";
import { BsArrowReturnRight } from "react-icons/bs";

type Props = {
  perms: ("view" | "create" | "delete" | "approve" | "deny")[];
  selected: number;
  functions: {
    setSelected: React.Dispatch<React.SetStateAction<number>>;
  };
};

const Sidebar = (props: Props) => {
  return (
    <div className="w-52 h-screen bg-dark flex flex-col justify-center items-center">
      <div className="w-full z-50">
        <SidebarItem
          vars={props}
          select={0}
          text="Applications"
          icon={<AiFillAppstore size={32} />}
        />
        {(props.selected == 0 || props.selected == 3) &&
        props.perms.includes("create") ? (
          <>
            {props.selected == 3 ? (
              <span className="border-l-4 border-[#ff5722] bg-[#222831] z-50 w-full h-12 flex justify-start items-center cursor-pointer transition-all p-3 font-light text-center">
                <div className="w-1/2 justify-self-center px-3 text-lg flex justify-between items-center ">
                  <BsArrowReturnRight />
                  Create
                </div>
              </span>
            ) : (
              <span
                onClick={() => props.functions.setSelected(3)}
                className="sidebar-item z-50 w-full h-12 border-l-0 flex justify-start items-center cursor-pointer transition-all p-3 font-light text-center"
              >
                <div className="w-1/2 justify-self-center px-3 text-lg flex justify-between items-center ">
                  <BsArrowReturnRight />
                  Create
                </div>
              </span>
            )}
          </>
        ) : (
          <></>
        )}
      </div>
      {props.perms.includes("view") ? (
        <SidebarItem
          select={1}
          vars={props}
          text="Player Apps"
          icon={<FaUserAlt size={32} />}
        />
      ) : (
        <></>
      )}
      {props.perms.includes("delete") ? (
        <SidebarItem
          select={2}
          vars={props}
          text="Members"
          icon={<RiUserSettingsFill size={32} />}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

const SidebarItem = ({
  text,
  icon,
  vars,
  select,
}: {
  text: string;
  icon: JSX.Element;
  vars: Props;
  select: number;
}) => {
  return vars.selected == select ? (
    <div
      onClick={() => vars.functions.setSelected(select)}
      className=" w-full h-14 z-50 bg-[#222831] transition-all cursor-pointer flex items-center justify-center relative"
    >
      <span className="border-l-4 border-[#ff5722] transition p-3 text-xl font-light text-center w-full flex items-center justify-between gap-2 group px-5">
        <p className="">{text}</p>
        <span className=" text-white transition-all">{icon}</span>
      </span>
    </div>
  ) : (
    <div
      onClick={() => vars.functions.setSelected(select)}
      className=" w-full h-14 z-50 bg-transparent transition-all cursor-pointer flex items-center justify-center relative"
    >
      <span className="sidebar-item w-full flex items-center justify-between gap-2 group px-5">
        <p className="">{text}</p>
        <span className="text-[#37414f] group-hover:text-white transition-all">
          {icon}
        </span>
      </span>
    </div>
  );
};

export default Sidebar;
