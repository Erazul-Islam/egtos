import HeadingButton from "@/components/custom/heading-button";
import Image from "next/image";
import React from "react";
import TabContentButton from "../tab-content-button";

const FirstExperts = () => {
  return (
    <div
    //   style={{ backgroundImage: "url('/home/capacity-bg.png')" }}
      className=" bg-[#F5FEFD] my-6 md:py-12 ]"
    >
      <div className="flex md:flex-row flex-col gap-6 justify-between items-center max-w-[1440px] mx-auto px-3 md:px-5">
        <div className="max-w-[462px] w-full px-3 md:px-6 py-3 md:py-6 rounded-2xl bg-[#F9F9F9]">
          <HeadingButton value="Find Experts" />
          <p className="py-3 md:py-6 text-3xl md:text-5xl font-medium text-[#1A1A1A]">
            Access Experts Instantly
          </p>
          <div className="bg-[#FFFFFF] shadow-md rounded-xl px-4 py-6">
            <div className="flex gap-4 px-3 rounded-xl py-2 bg-[#F9F9F9] items-center">
              <Image src={"/tabs/ex-1.png"} width={32} height={32} alt="" />
              <p className="text-[#1A1A1A] font-semibold text-base">
                Pre-vetted talent
              </p>
            </div>
            <div className="flex gap-4 px-3 rounded-xl my-6 shadow-md py-2 bg-[#FFF] items-center">
              <Image src={"/tabs/ex-2.png"} width={32} height={32} alt="" />
              <p className="text-[#1A1A1A] font-semibold text-base">
                No Recruitment Overhead
              </p>
            </div>
            <div className="flex gap-4 px-3 rounded-xl py-2 bg-[#F9F9F9] items-center">
              <Image src={"/tabs/ex-3.png"} width={32} height={32} alt="" />
              <p className="text-[#1A1A1A] font-semibold text-base">
                AI-Powered Matching
              </p>
            </div>
          </div>
          <p className="my-4 font-semibold text-2xl text-[#475467]">
            Build your Dream Team in <br /> Minutes — No <br /> Recruiters, No
            Delays.
          </p>
          <div className="my-8">
            <TabContentButton href="" value="Explore How It Works" />
          </div>
        </div>
        <div>
            <Image src={"/tabs/ex-4.png"} width={737} height={503} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FirstExperts;
