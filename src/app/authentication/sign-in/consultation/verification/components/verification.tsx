"use client";

import AuthButton from "@/app/authentication/components/auth-button";
import {
  Completed,
  Progress,
  ProgressButton,
} from "@/app/authentication/components/progress";
import SignInHeading from "@/app/authentication/components/sign-in-heading";
import HeadingDetails from "@/components/custom/heading-details";
import { EgtosInput } from "@/components/form-elements/form-elements";
import {  MoveLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Verification = () => {
  const router = useRouter();
  return (
    <div className="bg-[#F7F7F7] min-h-screen flex flex-col">
      <div className="text-center flex justify-center pt-6">
        <Image src={"/logo.svg"} width={149} height={51} alt="logo" />
      </div>
      <div className="flex-1 flex justify-center items-center px-4">
        <div className="bg-white w-full max-w-[892px] rounded-lg md:py-10 shadow-md md:pl-20 flex justify-center items-center">
          <div className="w-full">
            <div className="flex mt-4 justify-center md:flex-row flex-col items-center">
              <Completed />
              <div className="md:h-[1px] w-[1px] h-4 md:w-4 bg-[#51F7E4]"></div>
              <Completed />
              <div className="md:h-[1px] w-[1px] h-4 md:w-4 bg-[#51F7E4] "></div>
              <Progress value={"Verification"} />
              <div className="md:h-[1px] w-[1px] h-4 md:w-4 bg-[#EAECF0] "></div>
              <ProgressButton value={"Company Details"} />
            </div>
            <SignInHeading
              className="text-center md:text-left"
              value="Enter Verification Code"
            />
            <HeadingDetails
              className="text-center md:text-left"
              value="We have sent a code to egtos@gmail.com"
            />
            <div className="flex justify-center gap-4">
              <EgtosInput className="w-[48px]" />
              <EgtosInput className="w-[48px]" />
              <EgtosInput className="w-[48px]" />
              <EgtosInput className="w-[48px]" />
            </div>
            <div>
              <p className="text-[#667085] text-center py-4">
                Your link expires in{" "}
                <span className="text-[#00A099]">14:59</span>{" "}
              </p>
            </div>
            <div className="my-5 md:pr-24 px-4 md:px-0 flex gap-4 md:my-10">
              <Link href={"/authentication/sign-in/consultation"}>
                <button className="py-2 cursor-pointer rounded-[12px] text-[#98A2B3] px-8 border flex items-center gap-4 border-[#D0D5DD] bg-[#FFFFFF]">
                  <MoveLeft color="#98A2B3" /> Back
                </button>
              </Link>
              <AuthButton
                onClick={() =>
                  router.push("/authentication/sign-in/consultation/company-details")
                }
                href="/authentication/sign-in/consultation/company-details"
                className="w-full"
                value="Verify"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verification;
