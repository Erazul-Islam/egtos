import React from "react";
import HeadingButton from "../custom/heading-button";
import EgtosButton from "../custom/egtos-button";
import HeadingDetails from "../custom/heading-details";
import Image from "next/image";
import ImageCardOverlay from "../custom/curve-shaped-card";

const StrategicBalance = () => {
  return (
    <div className="relative w-full md:h-[1132px] bg-[#F5FEFD] overflow-hidden">
      <div
        className="absolute inset-0 bg-[url('/home/strategic-balance.jpg')] bg-cover bg-center opacity-20"
        aria-hidden="true"
      ></div>
      <div className="max-w-[1440px]  mx-auto px-3 md:px-5">
        <div className="flex md:flex-row gap-4 md:gap-0 flex-col items-center justify-between py-10 md:py-20">
          <div className="max-w-[672px]  w-full">
            <HeadingButton value="Strategic & Balanced" />
            <p className="text-[#1A1A1A] mt-5 md:my-5  md:text-5xl font-semibold">
              The Smarter Way To Manage Talent
            </p>
            <p className="text-[#1A1A1A] font-semibold md:text-2xl">
              Talent <span className="text-[#00A099]">reallocation</span> , not{" "}
              <span className="text-[#00A099]">reduction</span>
            </p>
            <div className="bg-[#FFFFFF] md:px-2 flex md:flex-row flex-col gap-2 justify-between py-3 mt-3 rounded-2xl">
              <p className="px-2 py-2 rounded-3xl text-[#1A1A1A] bg-[#C7FFF7]">
                Trading Partners
              </p>
              <p className="px-2 py-2 rounded-3xl text-[#1A1A1A] ">
                Consulting Firms
              </p>
              <p className="px-2 py-2 rounded-3xl text-[#1A1A1A] ">
                Independent Specialists
              </p>
            </div>
            <HeadingDetails value="EGTOS allows companies to trade capacity, delivering continuous employee engagement and preserving skills. A fresh way to manage talent, EGTOS improves job security and reduces the societal impact of layoffs, creating a more stable workforce." />
            <EgtosButton value="Try our Demo" />
          </div>
          <div>
            <Image
              className="border-4 border-[#1A1A1A] rounded-xl"
              src={"/home/strategic-image.png"}
              width={600}
              height={534}
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-6 lg:gap-10 md:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <ImageCardOverlay
            overlaySrc="/home/s-1.png"
            title="Major Cost Savings"
            description="Achieve up to a 60% reduction in expenses compared to traditional consulting models by using EGTOS’ innovative capacity trading platform, eliminating unnecessary overheads and markups."
          />
          <ImageCardOverlay
            overlaySrc="/home/s-1.png"
            title="Tailored Flexibility and Results"
            description="Benefit from a flexible and outcome-oriented approach that adapts to your specific business challenges and objectives. 
"
          />
          <ImageCardOverlay
            overlaySrc="/home/s-1.png"
            title="Direct Access to Leading Specialists"
            description="Transform underused employee time into a valuable asset by smoothly trading capacity within a secure network.
"
          />
        </div>
      </div>
    </div>
  );
};

export default StrategicBalance;
