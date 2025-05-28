import HeadingButton from "@/components/custom/heading-button";
import HeadingDetails from "@/components/custom/heading-details";
import Image from "next/image";
import React from "react";
import TabContentButton from "../tab-content-button";

const Security = () => {
  return (
    <div className="bg-[#F5FEFD]">
      <div className="max-w-[1440px] gap-8 flex flex-col md:py-12 py-6 items-center md:flex-row justify-between mx-auto px-3 md:px-5">
        <Image
          src={"/tabs/mo-8.png"}
          width={656}
          height={431}
          alt=""
        />
        <div className="max-w-[445px] py-4 md:py-0 w-full">
          <HeadingButton value="Security Control" />
          <p className="md:text-5xl pt-4 md:pt-4 font-medium text-[#1A1A1A] text-2xl">
            Built For Privacy & Control
          </p>
          <HeadingDetails
            className="py-6"
            value="Temporarily allocate underused consultants"
          />
          <div className="flex gap-4 items-center pb-6">
            <Image src={"/tabs/mo-9.svg"} width={32} height={32} alt="" />
            <p className="md:text-2xl text-xl font-semibold text-[#1A1A1A]">
              Private networks
            </p>
          </div>
          <div className="flex gap-4 items-center pb-6">
            <Image src={"/tabs/mo-10.svg"} width={32} height={32} alt="" />
            <p className="md:text-2xl text-xl font-semibold text-[#1A1A1A]">
              Encrypted collaboration
            </p>
          </div>
            <TabContentButton href="" value="Explore Platform Features" />
        </div>
      </div>
    </div>
  );
};

export default Security;
