import HeadingDetails from "@/components/custom/heading-details";
import Image from "next/image";
import React from "react";

const AboutHero = () => {
  return (
    <div className="bg-[url('/about/about-cover.jpg')] my-5 py-10 md:py-20  bg-cover ">
      <div className="flex max-w-[1440px] items-center px-3 md:px-5 mx-auto flex-col md:flex-row justify-between">
        <div className="max-w-[626px] w-full">
          <p className="md:text-7xl md:pb-9 text-3xl font-semibold text-[#1A1A1A]">
            The Future of <span className="text-[#00A099]">Talent</span>{" "}
            Exchange
          </p>
          <HeadingDetails value="The EGTOS platform is transforming how businesses approach talent acquisition and resource management. With mass layoffs causing major societal disruptions—and with billions being lost annually due to idle employee time—EGTOS is a groundbreaking solution that addresses both issues simultaneously." />
          <HeadingDetails value="We provide a dynamic marketplace where companies can strategically trade the availability of their skilled workforce within trusted networks. This innovative system not only maximizes resource use, transforming a cost center into a potential revenue stream, but also reduces the impact of moraledamaging layoffs." />
        </div>
        <div>
          <Image src={"/about/about-1.png"} width={573} height={495} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
