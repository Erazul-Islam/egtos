import HeadingButton from "@/components/custom/heading-button";
import React from "react";
import TabContentButton from "../tab-content-button";
import Image from "next/image";

const SaveCosts = () => {
  return (
    <div className="max-w-[1440px] py-6 flex flex-col md:flex-row justify-between mx-auto px-3 md:px-5">
      <div className="max-w-[666px] w-full">
        <HeadingButton value="Save Costs" />
        <p className="py-3 md:py-6 text-3xl md:text-5xl font-medium text-[#1A1A1A]">
          Reduce Cost , <br /> Not Capability
        </p>
        <div className="flex flex-col max-w-[240px] md:max-w-[550px]  md:flex-row gap-6 md:gap-12 md:items-center">
            <button className="bg-[#F5FEFD] rounded-xl px-2 py-1 text-2xl font-semibold text-[#475467]">
                Saved 60%
            </button>
            <span className="text-[#00A099] text-center font-semibold text-2xl">Vs </span>
            
            <button className="bg-[#F5FEFD] rounded-xl px-2 py-1 text-2xl font-semibold text-[#475467]">
                Traditional Hiring
            </button>
        </div>
        <div className="my-6">
            <TabContentButton href="" value="Join Now" />
        </div>
      </div>
      <div>
        <Image src={"/tabs/ex-5.png"} width={580} height={495} alt="" />
      </div>
    </div>
  );
};

export default SaveCosts;
