import HeadingButton from "@/components/custom/heading-button";
import HeadingDetails from "@/components/custom/heading-details";
import Image from "next/image";
import React from "react";
import TabContentButton from "../tab-content-button";

const UseCase = () => {
  return (
    <div className="bg-[#F5FEFD]">
      <div className="max-w-[1440px] gap-8 flex flex-col md:py-12 py-6 items-center md:flex-row justify-between mx-auto px-3 md:px-5">
        <div className="max-w-[445px] md:order-1 order-2 py-4 md:py-0 w-full">
          <HeadingButton value="See Use Cases" />
          <p className="md:text-5xl pt-4 md:pt-4 font-medium text-[#1A1A1A] text-2xl">
            Tap Into Expertise When You Need It
          </p>
          <HeadingDetails
            className="py-6"
            value="Projects that need quick scale-up"
          />
          <div className="flex gap-4 items-center pb-6">
            <Image src={"/tabs/mo-5.png"} width={32} height={32} alt="" />
            <p className="md:text-2xl text-xl font-semibold text-[#1A1A1A]">
              No long-term hire risk
            </p>
          </div>
            <TabContentButton href="" value="See Use Cases" />
        </div>
        <Image
          className="order-1 md:order-2"
          src={"/tabs/mo-4.png"}
          width={661}
          height={431}
          alt=""
        />
      </div>
    </div>
  );
};

export default UseCase;
