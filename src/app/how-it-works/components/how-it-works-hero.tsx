import EgtosButton from "@/components/custom/egtos-button";
import HeadingDetails from "@/components/custom/heading-details";
import Image from "next/image";
import React from "react";

const HowItWorksHero = () => {
  return (
    <div className="h-full md:py-28 py-8 relative w-full">
      <div className="absolute inset-0 opacity-15 bg-cover bg-center bg-[url('/how/how-bg.jpg')]"></div>
      <div className="max-w-[1440px] flex gap-8 md:flex-row flex-col justify-between mx-auto px-3 md:px-5">
        <div className="max-w-[626px] w-full">
          <h1 className="md:text-7xl  text-3xl font-semibold">
            Here’s How <span className="text-[#00A099]">EGTOS</span> Works
          </h1>
          <HeadingDetails
            className="md:py-12 py-6"
            value="The EGTOS platform addresses the inefficiencies of underutilized employee time and the costly, time-consuming quest for talent acquisition. An innovative talent marketplace, it allows businesses to trade their excess employee capacity and gain direct access to a global network of fully vetted experts."
          ></HeadingDetails>
          <EgtosButton value="Try our Demo" />
        </div>
        <div>
          <Image src={"/how/how-group.png"} width={573} height={435} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HowItWorksHero;
