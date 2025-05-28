import HeadingButton from "@/components/custom/heading-button";
import HeadingDetails from "@/components/custom/heading-details";
import Image from "next/image";
import React from "react";
import TabContentButton from "../tab-content-button";

const GainValue = () => {
  return (
    <div className="max-w-[1440px] flex flex-col md:flex-row justify-between mx-auto px-3 md:px-5">
      <Image
        src={"/home/capacity-1.png"}
        width={661}
        height={431}
        alt=""
      />
      <div className="max-w-[529px] py-4 md:py-0 w-full">
        <HeadingButton value="Gain Value" />
        <p className="md:text-5xl pt-4 md:pt-4 font-medium text-[#1A1A1A] text-2xl">
          Your Workforce, Fully Utilized
        </p>
        <HeadingDetails value="Convert idle employee time into value." />
        <TabContentButton href="" value="Try Our Demo" />
      </div>
    </div>
  );
};

export default GainValue;
