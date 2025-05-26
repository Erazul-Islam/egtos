import Image from "next/image";
import React from "react";
import HeadingDetails from "./heading-details";
import { MoveUpRight } from "lucide-react";
import HeadingButton from "./heading-button";
import EgtosButton from "./egtos-button";

const HowWorks = () => {
  return (
    <div className="max-w-[1440px] flex md:flex-row gap-6 md:gap-0 flex-col items-center justify-between py-16 md:py-32 mx-auto px-3 md:px-5">
      <Image src={"/home/how-works.png"} width={447} height={413} alt="" />
      <div className="relative h-auto ">
        <Image
          className=" "
          src={"/home/Subtract.svg"}
          width={619}
          height={534}
          alt=""
        />
        <div className="absolute top-2 left-2 md:top-8 md:left-8">
            <HeadingButton  value="How EGTOS Works" />
        </div>
        <h1 className="md:text-4xl text-base absolute left-2 top-16 md:top-20 md:left-8 font-semibold text-[#1A1A1A]">
          Simple Steps Toward Better Teams
        </h1>
        <HeadingDetails
          className="max-w-[490px] text-xs md:tex-base absolute top-20 left-2 md:left-8 md:top-28"
          value={`The EGTOS platform addresses the inefficiencies of underutilized employee time and the costly, time-consuming quest for talent acquisition. An innovative talent marketplace, it allows businesses to trade their excess employee capacity and gain direct access to a global network of fully vetted experts.
 
`}
        ></HeadingDetails>
        <div className="absolute md:mt-0 mt-6 md:left-8 md:bottom-4">
            <EgtosButton value="Try our Demo" />
        </div>
        <div className="md:w-14 w-8 h-8 absolute right-0 top-2 md:h-14 border border-[#D0D5DD] flex justify-center items-center rounded-full bg-[#FBFBFB]">
          <MoveUpRight color="#1A1A1A" />
        </div>
      </div>
    </div>
  );
};

export default HowWorks;

// object-cover bg-center bg-cover bg-[url('/home/cover.jpg')]
