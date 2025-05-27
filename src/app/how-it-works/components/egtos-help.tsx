import EgtosButton from "@/components/custom/egtos-button";
import HeadingButton from "@/components/custom/heading-button";
import Image from "next/image";
import React from "react";
import EgtosCard from "./egtos-card";

const EgtosHelp = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-3 md:px-3">
      <div className="flex flex-col  justify-between md:flex-row gap-4">
        <div className="md:py-12  py-6">
          <HeadingButton value="How EGTOS Helps" />
          <p className="md:text-5xl py-4 text-2xl md:py-8 font-semibold text-[#1A1A1A]">
            Simple Steps Toward <br /> Better Teams
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
          <EgtosCard
            details={"Use earned EGTOS Tokens to access pre-vetted professionals."}
            cdTitle3={"Faster, Cost-Efficient Hiring"}
            cdTitle1={"AI-Powered Talent Matching"}
            cdTitle2={"Token-Based Engagement"}
            cdImage3={"/how/s-3-3.png"}
            cdImage2={"/how/s-3-2.png"}
            cdImage1={"/how/s-3-1.png"}
            headingDetails={
              "EGTOS uses AI to match your project needs with expert talent, letting you instantly engage pre-vetted professionals using earned tokens—no costly hiring required."
            }
            heading={"Accessing Expertise with EGTOS Tokens."}
            step={"Step 3"}
            headingImage={"/how/step-3.png"}
          />
        </div>
        <div>
          <EgtosCard
            details={"Gain value from shared talent through token rewards."}
            cdTitle3={"Access External Skills"}
            cdTitle1={"Optimize Idle Capacity"}
            cdTitle2={"Earn EGTOS Tokens"}
            cdImage3={"/how/step-2-3.png"}
            cdImage2={"/how/step-2-2.png"}
            cdImage1={"/how/step-2-1.png"}
            headingDetails={
              "EGTOS enables smart reassignment of underused staff to partner projects, earning tokens that unlock access to external talent."
            }
            heading={"Intelligent Capacity Assignment that Earns You Tokens"}
            step={"Step 2"}
            headingImage={"/how/step-2.png"}
          />
          <EgtosCard
            details={"Engage single specialists or entire teams as required."}
            cdTitle3={"Network + Global Pool"}
            cdTitle1={"Rapid Team Assembly"}
            cdTitle2={"Flexible Talent Access"}
            cdImage3={"/how/s-4-3.png"}
            cdImage2={"/how/s-4-2.png"}
            cdImage1={"/how/s-4-1.png"}
            headingDetails={
              "EGTOS enables fast, flexible team building by combining your network and global talent, powered by token-based access to experts."
            }
            heading={"Building Expert Teams OnDemand"}
            step={"Step 4"}
            headingImage={"/how/s-4.png"}
          />
        </div>
      </div>
    </div>
  );
};

export default EgtosHelp;
