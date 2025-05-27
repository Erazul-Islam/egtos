import React, { ReactNode } from "react";
import HeadingDetails from "../custom/heading-details";
import Image from "next/image";

interface footer {
    heading : ReactNode,
    details : string,
    button1 : ReactNode,
    button2 : ReactNode
}

const CustomFooter : React.FC<footer> = ({ heading, details, button1, button2 }) => {
  return (
    <div className="max-w-[1440px] my-12  mx-auto px-3 md:px-5">
      <div className="max-h-[390px] flex justify-between px-4 md:px-8 py-8 border bg-[#F5FFFE]/[.81] border-[#51F7E4] rounded-xl bg-cover bg-center h-full bg-[url('/home/career.jpg')]">
        <div className="max-w-[906px] w-full">
          <h1 className="md:text-6xl text-3xl font-semibold">
            {heading}
          </h1>
          <HeadingDetails className="text-[18px]" value={details} />
          <div className="flex items-center gap-2">
            {button1}
            {button2}
          </div>
        </div>

        <Image
          className="md:block hidden"
          src={"/f.svg"}
          width={126}
          height={124}
          alt="egtos"
        />
      </div>
    </div>
  );
};

export default CustomFooter;
