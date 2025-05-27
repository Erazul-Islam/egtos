import React from "react";

import Image from "next/image";
import HeadingDetails from "@/components/custom/heading-details";
import EgtosButton from "@/components/custom/egtos-button";

const Talent = () => {
  return (
    <div className="max-w-[1440px] my-12  mx-auto px-3 md:px-5">
      <div className="max-h-[390px] flex justify-between px-4 md:px-8 py-8 border bg-[#F5FFFECF] border-[#51F7E4] rounded-xl bg-cover bg-center h-full bg-[url('/home/career.jpg')]">
        <div className="">
          <div className="max-w-[906px] w-full">
            <h1 className="md:text-6xl text-3xl font-semibold">
              Become Part of The Future of{" "}
              <span className="text-[#00A099]">Talent</span> Acquisition
            </h1>
            <HeadingDetails
              className="text-[18px]"
              value="Join EGTOS and build resilient, efficient, and more cost-effective teams for your projects."
            />
            <div className="flex items-center gap-2">
              <EgtosButton value={"Get Started"} />
              <button
                className={` text-[16px] cursor-pointer font-medium  px-3 text-[#00A099] bg-[#FFFFFF]  py-3 rounded-2xl shadow-[0px_-2px_1px_0px_#0C19282E_inset,0px_7px_15px_-3px_#647C9933,0px_2px_4px_0px_#647C994D,0px_2px_1px_0px_#FFFFFF1A_inset] transition duration-200 hover:brightness-105 active:brightness-95`}
              >Try our Demo</button>
            </div>
          </div>
        </div>
        <Image
          className="md:block hidden"
          src={"/f.svg"}
          width={126}
          height={124}
          alt="egtos"
        />
      </div>
    </div>
  );
};

export default Talent;
