import HeadingButton from "@/components/custom/heading-button";
import HeadingDetails from "@/components/custom/heading-details";
import Image from "next/image";
import React from "react";
import TabContentButton from "../tab-content-button";

const BoostCareer = () => {
  return (
    <div className="bg-[#F5FEFD] md:my-12 my-4">
      <div className="max-w-[1440px] flex flex-col md:flex-row justify-between py-6 md:py-12 mx-auto px-3 md:px-5">
        <Image src={"/tabs/ex-6.png"} width={661} height={431} alt="" />
        <div className="max-w-[529px] py-4 md:py-0 w-full">
          <HeadingButton value="Boost Careers" />
          <p className="md:text-5xl pt-4 md:pt-4 font-medium text-[#1A1A1A] text-2xl">
            Build a Trusted Talent <br /> Network
          </p>
          <HeadingDetails value="Invite partners & exchange talent internally" />
          <TabContentButton href="" value="Explore How It Works" />
        </div>
      </div>
    </div>
  );
};

export default BoostCareer;
