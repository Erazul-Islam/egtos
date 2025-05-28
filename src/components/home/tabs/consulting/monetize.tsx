import HeadingButton from "@/components/custom/heading-button";
import HeadingDetails from "@/components/custom/heading-details";
import Image from "next/image";
import React from "react";
import EgtosButton from "@/components/custom/egtos-button";
import TabButton from "@/components/custom/tab-button";

const MonetizeYourBranch = () => {
  return (
    <div className="max-w-[1440px] gap-8 flex flex-col md:flex-row justify-between mx-auto px-3 md:px-5">
      <Image className="order-2 md:order-1" src={"/tabs/mo-2.png"} width={661} height={431} alt="" />
      <div className="max-w-[445px] md:order-2 order-1 py-4 md:py-0 w-full">
        <HeadingButton value="Monetize Your Bench" />
        <p className="md:text-5xl pt-4 md:pt-4 font-medium text-[#1A1A1A] text-2xl">
          Put Your Bench to Work
        </p>
        <HeadingDetails
          className="py-6"
          value="Temporarily allocate underused consultants"
        />
        <div className="flex gap-4 items-center pb-6">
            <Image src={"/tabs/mo-3.png"} width={32} height={32} alt="" />
            <p className="md:text-2xl text-xl font-semibold text-[#1A1A1A]">Earn tokens while staying billable</p>
        </div>
        <div className="flex gap-4">
          <EgtosButton value="Join the Network" />
          <TabButton isActive={false} width="w-[124px]" onClick={() => console.log('hello')}  label="Talk to Us" />
        </div>
      </div>
    </div>
  );
};

export default MonetizeYourBranch;
