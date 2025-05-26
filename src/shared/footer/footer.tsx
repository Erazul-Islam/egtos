import EgtosButton from "@/components/custom/egtos-button";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#F7F7F7] ">
      <div className="max-w-[1440px] py-4 md:pt-32  pt-6 px-3 md:px-5 mx-auto">
        <Image src={"/footer.svg"} width={638} height={220} alt="egtos" />
        <div className="lg:pt-20 flex flex-col md:flex-row justify-between md:pt-10">
          {/* Section 1 - Will appear second on mobile */}
          <div className="order-2 md:order-1 md:max-w-[448px] md:gap-0 md:py-0 py-6 w-full flex justify-between">
            <Image src={"/f.svg"} width={126} height={124} alt="egtos" />
            <div className="flex items-center gap-2">
              <EgtosButton value={"Get Started"} />
              <EgtosButton
                className="px-2"
                value={
                  <Image src={"/arrow.png"} width={24} height={24} alt="" />
                }
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="text-[#00A099] md:py-0 py-6 text-base flex flex-wrap md:flex-nowrap items-center justify-center gap-3 md:text-base">
              <p>Home</p>
              <p className="p-1 rounded-full bg-[#00A099]"></p>
              <p>How it Works</p>
              <p className="p-1 rounded-full bg-[#00A099]"></p>
              <p>Request a Demo</p>
              <p className="p-1 rounded-full bg-[#00A099]"></p>
              <p>Pricing</p>
              <p className="p-1 rounded-full bg-[#00A099]"></p>
              <p>About Us</p>
              <p className="p-1 rounded-full bg-[#00A099]"></p>
              <p>Contact Us</p>
            </div>

            <p className="text-2xl max-w-[457px] w-full md:py-10 font-semibold">
              Connect with an egtos expert to 
              explore how{" "}
              <span className="text-[#00A099]">
                our teams can drive your  business growth
              </span>
            </p>
            <p className="text-[#475467] md:py-0 py-6 max-w-[457px] w-full text-[18px]">
              Let us show you how egtos can transform your project 
              outcomes - speak to our team
            </p>
          </div>
        </div>

        <p className="bg-[#EAECF0] mt-4 md:mt-24 h-[1px]"></p>
      </div>
      <p className="pb-4 text-center text-base text-[#667085]">
        © 2025 egtos. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
