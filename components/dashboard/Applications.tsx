import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { ScriptProps } from "next/script";
import React from "react";
import { getUser } from "../../utils/api";

type Props = {
  user: any;
};

const Applications = (props: Props) => {
  console.log(props.user);
  return (
    <div className="hide-scroll w-1/2 md:w-full left-52 md:left-0 md:justify-center items-center h-full p-5 absolute flex flex-col md:flex-wrap md:flex-row gap-6 flex-shrink-0 overflow-x-hidden overflow-y-scroll">
      <div className="w-1/4 rounded-md p-5 gap-6 flex flex-col justify-evenly items-start h-44 bg-light">
        <h1 className="text-4xl">Application</h1>
        <p className="font-light">Blah blah blah description here</p>
        <div className="flex flex-row gap-2 w-full justify-between items-center">
          <Button className="border-2 border-[#FF5722] px-5 transition-all hover:bg-[#FF5722]">
            Apply
          </Button>
          <div className="flex flex-row gap-3 justify-end items-center">
            <Button className="border-2 border-[#ff4545] px-5 transition-all hover:bg-[#ff4545]">
              Delete
            </Button>
            <Button className="border-2 border-[#4561ff] px-5 transition-all hover:bg-[#4561ff]">
              Edit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Button = ({ children, className, onClick }: ScriptProps) => (
  <button
    onClick={onClick as any}
    className={`flex justify-center items-center text-center px-2 py-1 text-xl rounded-lg ${className}`}
  >
    {children}
  </button>
);

export default Applications;
