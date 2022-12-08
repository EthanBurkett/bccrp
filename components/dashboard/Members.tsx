import { motion } from "framer-motion";
import { ScriptProps } from "next/script";
import React from "react";
import { GuildMember } from "discord.js";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import axios from "axios";
import { apiUrl } from "../../utils/api";
import { validateCookies } from "../../utils/helpers";

const swal = withReactContent(Swal);

interface Member {
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
}

type Props = {
  members: Member[];
};
const Members = (props: Props) => {
  const messagePrompt = (userId: string) => {
    swal
      .fire({
        title: "Message User",
        input: "text",
        inputPlaceholder: "Reason",
        showCancelButton: true,
        confirmButtonText: "Message",
      })
      .then(async ({ value }) => {
        if (!value)
          return swal.fire({
            title: "Error",
            text: "Please provide a message",
          });

        const data = await axios
          .post(`${apiUrl}/discord/message/${userId}/${value}`)
          .catch((e) => {
            swal.fire({
              title: "Error",
              text: "Could not message user, DMs could be off",
            });
          })
          .then((data) => data);
        if (data && data.statusText == "OK")
          return swal.fire({
            title: "Success",
            text: "User has been messaged",
          });

        return swal.fire({
          title: "Error",
          text: "Could not message user, DMs could be off",
        });
      });
  };

  const sendDeclaration = async (userId: string) => {
    const data = await axios
      .post(`${apiUrl}/discord/declarationofindependence/${userId}`)
      .catch((e) => {
        swal.fire({
          title: "Error",
          text: "Could not message user, DMs could be off",
        });
      })
      .then((data) => data);
    if (data && data.statusText == "OK")
      return swal.fire({
        title: "Success",
        text: "User has been messaged",
      });

    return swal.fire({
      title: "Error",
      text: "Could not message user, DMs could be off",
    });
  };

  return (
    <div className="hide-scroll w-1/2 md:w-full left-52 md:left-0 md:justify-center items-center h-3/4 p-5 absolute flex flex-col md:flex-wrap md:flex-row gap-6 flex-shrink-0 overflow-y-scroll overflow-x-hidden">
      {props.members.map((member, i) => (
        <Member index={i} key={member.displayName}>
          <div className="w-full flex flex-row items-center justify-between gap-2">
            <div className="flex flex-row items-center justify-center gap-2">
              <img
                src={member.displayAvatarURL}
                className="w-16 h-16 rounded-full"
              />

              <div>
                <h1></h1>
              </div>

              <div className="flex flex-col gap-1">
                <div className="text-lg md:text-2xl max-w-1/2 whitespace-pre-wrap font-normal">
                  {member.displayName}
                </div>
                {/* <div className="text-sm md:text-xl font-light text-right uppercase">
                {app.app.status}
              </div> */}
              </div>
            </div>
            <div className="flex flex-row gap-2 justify-center items-center">
              <Button
                onClick={() => messagePrompt(member.userId)}
                className="bg-[#ff5722] transition-all w-24 h-8"
              >
                Message
              </Button>
              <Button
                className="bg-[#222831] transition-all w-full"
                onClick={() => sendDeclaration(member.userId)}
              >
                Send Declaration of Independence
              </Button>
            </div>
          </div>
        </Member>
      ))}
    </div>
  );
};

// He has refused his Assent to Laws, the most wholesome and necessary for the public good.
// He has forbidden his Governors to pass Laws of immediate and pressing importance, unless suspended in their operation till his Assent should be obtained; and when so suspended, he has utterly neglected to attend to them.
// He has refused to pass other Laws for the accommodation of large districts of people, unless those people would relinquish the right of Representation in the Legislature, a right inestimable to them and formidable to tyrants only.
// He has called together legislative bodies at places unusual, uncomfortable, and distant from the depository of their public Records, for the sole purpose of fatiguing them into compliance with his measures.
// He has dissolved Representative Houses repeatedly, for opposing with manly firmness his invasions on the rights of the people.
// He has refused for a long time, after such dissolutions, to cause others to be elected; whereby the Legislative powers, incapable of Annihilation, have returned to the People at large for their exercise; the State remaining in the mean time exposed to all the dangers of invasion from without, and convulsions within.
// He has endeavoured to prevent the population of these States; for that purpose obstructing the Laws for Naturalization of Foreigners; refusing to pass others to encourage their migrations hither, and raising the conditions of new Appropriations of Lands.
// He has obstructed the Administration of Justice, by refusing his Assent to Laws for establishing Judiciary powers.
// He has made Judges dependent on his Will alone, for the tenure of their offices, and the amount and payment of their salaries.
// He has erected a multitude of New Offices, and sent hither swarms of Officers to harrass our people, and eat out their substance.
// He has kept among us, in times of peace, Standing Armies without the Consent of our legislatures.
// He has affected to render the Military independent of and superior to the Civil power.
// He has combined with others to subject us to a jurisdiction foreign to our constitution, and unacknowledged by our laws; giving his Assent to their Acts of pretended Legislation:
// For Quartering large bodies of armed troops among us:
// For protecting them, by a mock Trial, from punishment for any Murders which they should commit on the Inhabitants of these States:
// For cutting off our Trade with all parts of the world:
// For imposing Taxes on us without our Consent:
// For depriving us in many cases, of the benefits of Trial by Jury:
// For transporting us beyond Seas to be tried for pretended offences
// For abolishing the free System of English Laws in a neighbouring Province, establishing therein an Arbitrary government, and enlarging its Boundaries so as to render it at once an example and fit instrument for introducing the same absolute rule into these Colonies:
// For taking away our Charters, abolishing our most valuable Laws, and altering fundamentally the Forms of our Governments:
// For suspending our own Legislatures, and declaring themselves invested with power to legislate for us in all cases whatsoever.
// He has abdicated Government here, by declaring us out of his Protection and waging War against us.
// He has plundered our seas, ravaged our Coasts, burnt our towns, and destroyed the lives of our people.
// He is at this time transporting large Armies of foreign Mercenaries to compleat the works of death, desolation and tyranny, already begun with circumstances of Cruelty & perfidy scarcely paralleled in the most barbarous ages, and totally unworthy the Head of a civilized nation.
// He has constrained our fellow Citizens taken Captive on the high Seas to bear Arms against their Country, to become the executioners of their friends and Brethren, or to fall themselves by their Hands.
// He has excited domestic insurrections amongst us, and has endeavoured to bring on the inhabitants of our frontiers, the merciless Indian Savages, whose known rule of warfare, is an undistinguished destruction of all ages, sexes and conditions.

const Button = ({ children, className, onClick }: ScriptProps) => (
  <button
    onClick={onClick as any}
    className={`flex justify-center items-center text-center px-2 py-1 text-xl rounded-lg ${className}`}
  >
    {children}
  </button>
);

const Member = ({ children, index }: { index: number } & ScriptProps) => (
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
    animate={{
      opacity: 1,
      y: 0,
    }}
    className={`bg-light w-full md:w-1/4 h-28 rounded-full flex p-5 items-center`}
  >
    {children}
  </motion.div>
);

export default Members;
