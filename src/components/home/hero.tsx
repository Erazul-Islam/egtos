import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full md:my-4 ">
      <video
        className="w-full md:h-[795px] h-[70vh]  object-cover"
        autoPlay
        muted
        loop
        playsInline
        src="/home/hero.mp4"
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(104.07deg, 
          rgba(228, 255, 254, 0.608) 5.5%, 
          rgba(255, 255, 255, 0.95) 20.46%, 
          rgba(242, 246, 255, 0.703) 35.08%, 
          rgba(236, 255, 254, 0.7125) 43.38%, 
          rgba(241, 255, 254, 0.95) 66.09%, 
          rgba(240, 255, 254, 0.896516) 66.4%, 
          rgba(239, 248, 255, 0.798) 85.8%, 
          rgba(255, 255, 255, 0.95) 95.56%)`,
        }}
      >
        <div className="max-w-[1440px] lg:py-40 md:py-20 mx-auto px-3 md:px-5">
          <div className="flex md:flex-row flex-col items-center justify-between">
            <div className="">
            <p className="text-[#1A1A1A] md:leading-[100px] md:text-7xl font-semibold">
              {" "}
              <span className="text-[#00A099] ">Dynamic</span> Teams. Experts
              Only. <br /> <span className="text-[#00A099]">Global</span> Reach
            </p>
            <p className="text-[#344054] py-4 font-normal text-base"><span>The Intelligent Marketplace for Talent Acquisition Avoid hiring</span> <br /> <span>costs and layoffs by trading talent within a trusted network”</span></p>
          </div>
          <Image src={"/home/hero-1.png"} width={620} height={416} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
