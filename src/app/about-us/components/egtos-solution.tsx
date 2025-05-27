import HeadingButton from "@/components/custom/heading-button";
import HeadingDetails from "@/components/custom/heading-details";
import Image from "next/image";
import React from "react";

const EgtosSolution = () => {
  return (
    <div className="bg-[#F5FEFD]">
      <div className="flex justify-between px-3 bg-[#F5FEFD] md:px-5 max-w-[1440px] mx-auto md:py-14 py-7 my-10 md:my-20 flex-col md:flex-row gap-6">
        <Image src={"/about/about-3.png"} width={589} height={399} alt="" />
        <div className="max-w-[699px] md:order-2 order-1 w-full">
          <HeadingButton value="Our Solutions" />
          <p className="md:text-5xl text-3xl py-3 md:py-6 text-[#1A1A1A] font-semibold">
            Flexible Solutions For Every Stage of{" "}
            <span className="text-[#00A099]">Company Growth</span>
          </p>
          <HeadingDetails value="EGTOS operates on a flexible SaaS model, offering tiered access that caters to the diverse needs of modern businesses. Whether you're looking to optimize internal resource allocation, tap into a global talent pool, or smoothly integrate expertise from leading consulting firms, our platform is engineered for agility and scalability" />
          <HeadingDetails value="Join us in shaping the future of work. More than just an employment platform, EGTOS is a strategic partner designed to help you build effective, agile, high-performing teams while simultaneously achieving major cost savings in the process." />
        </div>
      </div>
    </div>
  );
};

export default EgtosSolution;
