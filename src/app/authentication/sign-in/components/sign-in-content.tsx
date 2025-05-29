"use client"

import Image from "next/image";
import React, { useState } from "react";
import SignInHeading from "../../components/sign-in-heading";
import HeadingDetails from "@/components/custom/heading-details";
import { Progress, ProgressButton } from "../../components/progress";
import AuthButton from "../../components/auth-button";
import { useRouter } from "next/navigation";


const SignInContent = () => {

  const [value,setValue] = useState("company")
  const router = useRouter()

  return (
    <div className="md:order-2 order-1">
      <div className="px-4 py-4">
        <Image src={"/logo.svg"} width={149} height={51} alt="logo" />
      </div>
      <div className="px-4 lg:px-16">
        <SignInHeading value="Select Profile Type" />
        <HeadingDetails value="select profile and next move to basic information" />
        <div className="flex mt-4 md:flex-row flex-col items-center">
          <Progress value={"Profile Type"} />
          <p className="md:h-[1px] w-[1px] h-4 md:w-4 bg-[#51F7E4]"></p>
          <ProgressButton value={"Basic Information"} />
          <p className="md:h-[1px] w-[1px] h-4 md:w-4 bg-[#EAECF0]"></p>
          <ProgressButton value={"Verification"} />
          <p className="md:h-[1px] w-[1px] h-4 md:w-4 bg-[#EAECF0]"></p>
          <ProgressButton value={"Company Details"} />
          <p className="md:h-[1px] w-[1px] h-4 md:w-4 bg-[#EAECF0]"></p>
          <ProgressButton value={"Location"} />
          <p className="md:h-[1px] w-[1px] h-4 md:w-4 bg-[#EAECF0]"></p>
          <ProgressButton value={"Profile & Cover"} />
          <p className="md:h-[1px] w-[1px] h-4 md:w-4 bg-[#EAECF0]"></p>
          <ProgressButton value={"Subscription"} />
        </div>
        <div className="md:my-12 my-6">
           <div onClick={() => setValue("company")} className="my-6 flex justify-between items-center shadow py-6 px-6 cursor-pointer border border-[#EAECF0] rounded-xl">
              <div className="flex gap-4 items-center">
                <Image src={'/company/profile-1.svg'} width={24} height={24} alt="" />
                <div>
                   <p className="text-[#1A1A1A] font-semibold">Company</p>
                   <p className="text-[#667085]">Continue as a company.</p>
                </div>
              </div>
               <div className={`rounded-full w-5 h-5 ${value === "company" ? "border-[#00A099]  border-[7px]" : 'border border-[#98A2B3]' }`}>
              </div>

           </div>
           <div onClick={() => setValue("consultation")} className="my-6 flex justify-between items-center shadow py-6 px-6 cursor-pointer border border-[#EAECF0] rounded-xl">
              <div className="flex gap-4 items-center">
                <Image src={'/company/profile-1.svg'} width={24} height={24} alt="" />
                <div>
                   <p className="text-[#1A1A1A] font-semibold">Consultant Firm</p>
                   <p className="text-[#667085]">Continue as a company.</p>
                </div>
              </div>
              <div className={`rounded-full w-5 h-5 ${value === "consultation" ? "border-[#00A099]  border-[7px]" : 'border border-[#98A2B3]' }`}>
              </div>
           </div>
           <div onClick={() => setValue("independent")} className="md:my-6 flex justify-between items-center shadow py-6 px-6 cursor-pointer border border-[#EAECF0] rounded-xl">
              <div className="flex gap-4 items-center">
                <Image src={'/company/profile-3.svg'} width={24} height={24} alt="" />
                <div>
                   <p className="text-[#1A1A1A] font-semibold">Independent Consultant</p>
                   <p className="text-[#667085]">Continue as a company.</p>
                </div>
              </div>
              <div className={`rounded-full w-5 h-5 ${value === "independent" ? "border-[#00A099]  border-[7px]" : 'border border-[#98A2B3]' }`}>
              </div>
           </div>
        </div>
        <AuthButton onClick={() => router.push(`/authentication/sign-in/${value}`)} className="w-full" value="Continue"/>
      </div>
    </div>
  );
};

export default SignInContent;
