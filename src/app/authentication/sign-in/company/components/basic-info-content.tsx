"use client"

import AuthButton from "@/app/authentication/components/auth-button";
import {
  Completed,
  Progress,
  ProgressButton,
} from "@/app/authentication/components/progress";
import SignInHeading from "@/app/authentication/components/sign-in-heading";
import HeadingDetails from "@/components/custom/heading-details";
import { Label } from "@/components/ui/label";
import { MoveLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const BasicInfoContent = () => {

    const router = useRouter()

  return (
    <div className="md:order-2 order-1">
      <div className="px-4 py-4">
        <Image src={"/logo.svg"} width={149} height={51} alt="logo" />
        <div className="px-4 lg:px-16 my-6 md:my-12">
          <div className="flex mt-4 md:flex-row flex-col items-center">
            <Completed />
            <p className="md:h-[1px] w-[1px] h-4 md:w-4 bg-[#51F7E4]"></p>
            <Progress value={"Basic Information"} />
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
          <SignInHeading value="Basic Information" />
          <HeadingDetails value="Input your basic information and next move to Verification " />
          <div>
            <Label className="text-[#667085] font-normal text-base">
              Email
            </Label>
            <input
              type="email"
              className="border mt-2  w-full rounded-[12px] py-2 px-4 text-[#101828] shadow border-[#EAECF0] focus:outline-none focus:border-[#00A099]"
            />
          </div>
          <div className="my-3">
            <Label className="text-[#667085] font-normal text-base">
              Password
            </Label>
            <input
              type="password"
              className="border mt-2  w-full rounded-[12px] py-2 px-4 text-[#101828] shadow border-[#EAECF0] focus:outline-none focus:border-[#00A099]"
            />
          </div>
          <div className="my-3">
            <Label className="text-[#667085] font-normal text-base">
              Confirm Password
            </Label>
            <input
              type="password"
              className="border mt-2  w-full rounded-[12px] py-2 px-4 text-[#101828] shadow border-[#EAECF0] focus:outline-none focus:border-[#00A099]"
            />
          </div>
          <div className="flex mt-2 items-center gap-2">
            <div className="flex gap-2">
              <input type="checkbox" />
              <p className="text-[#667085] text-xs font-medium">I accept</p>
            </div>
            <p className="text-[#F79009] text-xs font-medium">
              Terms and Conditions <span className="text-[#667085]">&</span>{" "}
              Privacy Policy
            </p>
          </div>
          <div className="my-5 flex gap-4 md:my-10">
            <Link href={'/authentication/sign-in'}><button className="py-2 cursor-pointer rounded-[12px] text-[#98A2B3] px-8 border flex items-center gap-4 border-[#D0D5DD] bg-[#FFFFFF]">
              <MoveLeft color="#98A2B3" /> Back
            </button></Link>
            <AuthButton onClick={() => router.push('/authentication/sign-in/company/verification')} href='/authentication/sign-in/company/verification' className="w-full" value="Continue" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfoContent;
