import React from "react";
import HeadingDetails from "../custom/heading-details";
import Image from "next/image";
import EgtosButton from "../custom/egtos-button";

const Career = () => {
  return (
    <div className="max-w-[1440px] my-12  mx-auto px-3 md:px-5">
      <div className="max-h-[390px] flex justify-between px-4 md:px-8 py-8 border bg-[#F5FFFECF] border-[#51F7E4] rounded-xl bg-cover bg-center h-full bg-[url('/home/career.jpg')]">
        <div className="">
          <div className="max-w-[906px] w-full">
            <h1 className="md:text-6xl text-3xl font-semibold">
              {" "}
              <span className="text-[#00A099]">EGTOS</span> – Keeping Companies
              and Careers Healthy
            </h1>
            <HeadingDetails
              className="text-[18px]"
              value="Discover how the EGTOS recruitment platform can optimize your workforce, connecting you with the right people, at the right time, at the right price."
            />
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
        </div>
        <Image className="md:block hidden" src={"/f.svg"} width={126} height={124} alt="egtos" />
      </div>
    </div>
  );
};

export default Career;
