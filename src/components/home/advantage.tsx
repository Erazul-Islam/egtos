import Image from "next/image";
import React from "react";
import HeadingButton from "../custom/heading-button";
import HeadingDetails from "../custom/heading-details";
import EgtosButton from "../custom/egtos-button";
import { MoveUpRight } from "lucide-react";

const EgtosAdvantage = () => {
  return (
    <div className="bg-[url('/home/advantage-bg.jpg')] md:h-[636px] bg-cover bg-center  object-cover overflow-hidden">
      <div className="max-w-[1440px] mx-auto pt-10 md:pt-20 px-3 md:px-5">
        <HeadingButton value={"The EGTOS Advantage"}></HeadingButton>
        <div className="flex flex-col md:flex-row  justify-between">
          <div className="max-w-[620px] w-full">
            <p className="text-[#1A1A1A] mt-5 md:my-5  md:text-5xl font-semibold">
              Keeping Your Hiring Costs Down—and Your Staff Happy—All In One
              Place
            </p>
            <HeadingDetails
              className="md:my-4"
              value={`We help clients in all industries accelerate growth with our global expert teams. Here are some ways we can help.`}
            ></HeadingDetails>
            <EgtosButton className="md:my-4 mb-5 md:mb-0" value="Try our Demo"></EgtosButton>
          </div>
          <div className="relative">
            <Image className="md:h-[331px] h-[191px] " src={"/home/Subtract.svg"} width={619} height={331} alt="" />
            <Image
              className="absolute top-3 left-2 md:w-[175px] md:h-[147px] w-[100px] h-[80px] md:top-5 md:left-10"
              src={"/home/advantage-2.png"}
              width={175}
              height={147}
              alt=""
            />
            <h1 className="md:text-2xl text-base absolute left-2 top-[85px] md:top-48 md:left-10 font-semibold text-[#1A1A1A]">
              Maximize Productivity, Minimize Waste.
            </h1>
            <HeadingDetails
              className="max-w-[490px] absolute bottom-1 left-2 md:left-10 md:bottom-12"
              value={`Transform underused employee time into a valuable asset by smoothly trading capacity within a secure network.
`}
            ></HeadingDetails>
            <div className="md:w-14 w-8 h-8 absolute right-0 top-2 md:h-14 border border-[#D0D5DD] flex justify-center items-center rounded-full bg-[#FBFBFB]">
              <MoveUpRight color="#1A1A1A" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EgtosAdvantage;
