import EgtosButton from "@/components/custom/egtos-button";
import HeadingButton from "@/components/custom/heading-button";
import Image from "next/image";
import React from "react";
import EgtosCard from "./egtos-card";

const EgtosHelp = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-3 md:px-3">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:py-12 py-6">
          <HeadingButton value="How EGTOS Helps" />
          <p className="md:text-5xl py-4 text-2xl md:py-8 font-semibold text-[#1A1A1A]">
            Simple Steps Toward Better Teams
          </p>
          <div className="flex items-center gap-2">
            <EgtosButton value={"Get Started"} />
            <EgtosButton
              className="px-2"
              value={<Image src={"/arrow.png"} width={24} height={24} alt="" />}
            />
          </div>
          <EgtosCard
            details={"Access external skills without traditional hiring costs"}
            cdTitle3={"Shared Talent Pool"}
            cdTitle1={"Trusted Partner Network"}
            cdTitle2={"Cost-Effective Expertise"}
            cdImage3={"/how/f-3.png"}
            cdImage2={"/how/f-2.png"}
            cdImage1={"/how/f-1.png"}
            headingDetails={
              "Create a secure network of trusted partners to share talent, optimize resources, and access external expertise cost-effectively."
            }
            heading={"Building Your Professional Network"}
            step={"Step 1"}
            headingImage={"/how/egtos-help-1.png"}
          />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default EgtosHelp;
