"use client";

import Image from "next/image";
import React, { useState } from "react";
import SignInHeading from "../../components/sign-in-heading";
import HeadingDetails from "@/components/custom/heading-details";
import AuthButton from "../../components/auth-button";
import { useRouter } from "next/navigation";
import {
  CompanyProgress,
  ConsultantProgress,
  IndependentProgress,
} from "./progress-condition";

const SignInContent = () => {
  const [value, setValue] = useState("company");
  const router = useRouter();

  return (
    <div className="md:order-2 order-1">
      <div className="px-4 py-4">
        <Image src={"/logo.svg"} width={149} height={51} alt="logo" />
      </div>
      <div className="px-4 lg:px-16">
        <SignInHeading value="Select Profile Type" />
        <HeadingDetails value="select profile and next move to basic information" />
        {(value === "company" && <CompanyProgress />) ||
          (value === "consultation" && <ConsultantProgress />) ||
          (value === "independent" && <IndependentProgress />)}
        <div className="md:my-12 my-6">
          <div
            onClick={() => setValue("company")}
            className="my-6 lg:w-[735px] flex justify-between items-center shadow py-6 px-6 cursor-pointer border border-[#EAECF0] rounded-xl"
          >
            <div className="flex gap-4 items-center">
              <Image
                src={"/company/profile-1.svg"}
                width={24}
                height={24}
                alt=""
              />
              <div>
                <p className="text-[#1A1A1A] font-semibold">Company</p>
                <p className="text-[#667085]">Continue as a company.</p>
              </div>
            </div>
            <div
              className={`rounded-full w-5 h-5 ${
                value === "company"
                  ? "border-[#00A099]  border-[7px]"
                  : "border border-[#98A2B3]"
              }`}
            ></div>
          </div>
          <div
            onClick={() => setValue("consultation")}
            className="my-6 flex lg:w-[735px] justify-between items-center shadow py-6 px-6 cursor-pointer border border-[#EAECF0] rounded-xl"
          >
            <div className="flex gap-4 items-center">
              <Image
                src={"/company/profile-1.svg"}
                width={24}
                height={24}
                alt=""
              />
              <div>
                <p className="text-[#1A1A1A] font-semibold">Consultant Firm</p>
                <p className="text-[#667085]">Continue as a company.</p>
              </div>
            </div>
            <div
              className={`rounded-full w-5 h-5 ${
                value === "consultation"
                  ? "border-[#00A099]  border-[7px]"
                  : "border border-[#98A2B3]"
              }`}
            ></div>
          </div>
          <div
            onClick={() => setValue("independent")}
            className="md:my-6 flex lg:w-[735px] justify-between items-center shadow py-6 px-6 cursor-pointer border border-[#EAECF0] rounded-xl"
          >
            <div className="flex gap-4 items-center">
              <Image
                src={"/company/profile-3.svg"}
                width={24}
                height={24}
                alt=""
              />
              <div>
                <p className="text-[#1A1A1A] font-semibold">
                  Independent Consultant
                </p>
                <p className="text-[#667085]">Continue as a company.</p>
              </div>
            </div>
            <div
              className={`rounded-full w-5 h-5 ${
                value === "independent"
                  ? "border-[#00A099]  border-[7px]"
                  : "border border-[#98A2B3]"
              }`}
            ></div>
          </div>
        </div>
        <AuthButton
          onClick={() => router.push(`/authentication/sign-in/${value}`)}
          className="lg:w-[735px]"
          value="Continue"
        />
      </div>
    </div>
  );
};

export default SignInContent;
