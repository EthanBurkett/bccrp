import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import { ScriptProps } from "next/script";
import React from "react";
import Applications from "../../components/dashboard/Applications";
import CreateApplication from "../../components/dashboard/CreateApplication";
import Members from "../../components/dashboard/Members";
import PlayerApplications from "../../components/dashboard/PlayerApplications";
import Sidebar from "../../components/dashboard/Sidebar";
import Navbar from "../../components/Navbar";
import {
  getRoles,
  getPerms,
  getApps,
  getDiscordMembers,
  getUser,
} from "../../utils/api";

type Props = {
  perms: any;
  roles: any;
  apps: any;
  user: any;
  members: any;
};

const index = (props: Props) => {
  const [selected, setSelected] = React.useState<number>(0);

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
      className="w-screen h-screen bg-[#222831] text-[#EEEEEE] absolute overflow-hidden snap-y snap-always"
      onScroll={changeNavbarColor}
    >
      <Sidebar
        perms={props.perms}
        functions={{
          setSelected,
        }}
        selected={selected}
      />
      <div className="absolute left-0 top-0 flex justify-center items-center w-screen h-screen p-12">
        <Active active={selected} selected={0}>
          <Applications user={props.user} />
        </Active>
        <Active active={selected} selected={1}>
          <PlayerApplications
            apps={props.apps}
            functions={{
              setSelected,
            }}
            selected={selected}
          />
        </Active>
        <Active active={selected} selected={2}>
          <Members members={props.members} />
        </Active>
        <Active active={selected} selected={3}>
          <CreateApplication />
        </Active>
      </div>
    </div>
  );
};

const Active = ({
  children,
  active,
  selected,
}: ScriptProps & { active: any; selected: any }): JSX.Element => {
  return selected == active ? <>{children}</> : <></>;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const user = await getUser(context);
  const roles = await getRoles(context);
  const perms = await getPerms(context);
  const apps = await getApps(context);
  const members = await getDiscordMembers(context);
  if (roles.redirect || perms.redirect || apps.redirect || members.redirect)
    return {
      redirect: {
        destination:
          roles.redirect || perms.redirect || apps.redirect || members.redirect,
        permanent: false,
      },
    };

  return {
    props: {
      ...user,
      ...roles,
      ...perms,
      ...apps,
      ...members,
    },
  };
}

export default index;
