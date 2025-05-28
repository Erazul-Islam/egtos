import HeadingButton from "@/components/custom/heading-button";
import HeadingDetails from "@/components/custom/heading-details";
import Image from "next/image";
import React from "react";
import TabContentButton from "../tab-content-button";

const JoinNetWork = () => {
  return (
    <div className="bg-[#F5FEFD]">
      <div className="max-w-[1440px] gap-8 flex flex-col md:py-12 py-6 items-center md:flex-row justify-between mx-auto px-3 md:px-5">
        <div className="max-w-[645] w-full px-4 md:px-8 py-4 md:py-8 rounded-2xl shadow-md bg-[#FFFFFF]">
          <Image src={"/tabs/t-1.png"} width={589} height={388} alt="" />
          <div className="md:order-1 order-2 py-6 w-full">
            <HeadingButton value="Find Matches" />
            <p className="md:text-5xl pt-4 md:pt-4 font-medium text-[#1A1A1A] text-2xl">
              Tap Into Expertise When You Need It
            </p>
            <HeadingDetails
              className="py-6"
              value="AI-powered suggestions based on your profile"
            />
            <TabContentButton href="" value="Explore Now" />
          </div>
        </div>
        <div className="max-w-[645] w-full px-4 md:px-8 py-4 md:py-8 rounded-2xl shadow-md bg-[#FFFFFF]">
            <div className="md:order-1 order-2 py-6 w-full">
            <HeadingButton value="Join Network" />
            <p className="md:text-5xl pt-4 md:pt-4 font-medium text-[#1A1A1A] text-2xl">
              Be Part of Something Bigger
            </p>
            <HeadingDetails
              className="py-6"
              value="Peer reviews, growth sessions, networking"
            />
            <TabContentButton href="" value="Join the Expert Network" />
          </div>
          <Image src={"/tabs/t-2.png"} width={589} height={388} alt="" />
        </div>
      </div>
    </div>
  );
};

export default JoinNetWork;
