import HeadingButton from "@/components/custom/heading-button";
import Image from "next/image";
import React from "react";

const StartGrowth = () => {
  return (
    <div className="bg-[#FFFFFF]/20">
      <div className="max-w-[1440px] gap-8 flex flex-col md:py-12 py-6 items-center md:flex-row justify-between mx-auto px-3 md:px-5">
        <div className="max-w-[578px] w-full px-3 md:px-6 py-3 md:py-6 rounded-2xl bg-[#F9F9F9]">
          <HeadingButton value="Start Growth" />
          <p className="py-3 md:py-6 text-3xl md:text-5xl font-medium text-[#1A1A1A]">
            Access Experts <br /> Instantly
          </p>
          <div className="bg-[#FFFFFF] shadow-md rounded-xl px-4 py-6">
            <div className="flex gap-4 px-3 rounded-xl py-2 bg-[#F9F9F9] items-center">
              <Image src={"/tabs/t-5.svg"} width={32} height={32} alt="" />
              <p className="text-[#1A1A1A] font-semibold text-base">
                Choose Projects
              </p>
            </div>
            <div className="flex gap-4 px-3 rounded-xl my-6 shadow-md py-2 bg-[#FFF] items-center">
              <Image src={"/tabs/t-6.svg"} width={32} height={32} alt="" />
              <p className="text-[#1A1A1A] font-semibold text-base">
                Set Your Schedule
              </p>
            </div>
            <div className="flex gap-4 px-3 rounded-xl py-2 bg-[#F9F9F9] items-center">
              <Image src={"/tabs/t-7.svg"} width={32} height={32} alt="" />
              <p className="text-[#1A1A1A] font-semibold text-base">
                Remote-first
              </p>
            </div>
          </div>
        </div>
        <div>
          <Image src={"/tabs/t-4.png"} width={701} height={348} alt="" />
        </div>
      </div>
    </div>
  );
};

export default StartGrowth;
