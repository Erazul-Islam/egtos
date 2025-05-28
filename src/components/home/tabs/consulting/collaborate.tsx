import HeadingButton from "@/components/custom/heading-button";
import Image from "next/image";
import React from "react";

const Collaborate = () => {
  return (
    <div className="max-w-[1440px] py-6 md:py-12  flex flex-col md:flex-row justify-between mx-auto px-3 md:px-5">
      <Image className="order-2 md:order-1" src={"/tabs/mo-6.png"} width={661} height={431} alt="" />
      <div className="max-w-[574px] md:order-2 order-1 py-4 md:py-0 w-full">
        <HeadingButton value="Collaborate" />
        <p className="md:text-5xl pt-4 md:pt-4 font-medium text-[#1A1A1A] text-2xl">
          Expand Your Service Footprint
        </p>
        <div className="flex gap-4 py-3 md:py-6 items-center ">
            <Image src={"/tabs/mo-7.png"} width={32} height={32} alt="" />
            <p className="md:text-2xl text-xl font-semibold text-[#1A1A1A]">Collaborate cross-industry for new business</p>
        </div>
      </div>
    </div>
  );
};

export default Collaborate;
