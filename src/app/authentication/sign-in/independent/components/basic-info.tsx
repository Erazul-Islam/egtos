"use client";

import AuthButton from "@/app/authentication/components/auth-button";
import {
  Completed,
  Progress,
  ProgressButton,
} from "@/app/authentication/components/progress";
import SignInHeading from "@/app/authentication/components/sign-in-heading";
import { BackButton } from "@/components/custom/back-button";
import HeadingDetails from "@/components/custom/heading-details";
import {
  EgtosInput,
  EgtosSelect,
} from "@/components/form-elements/form-elements";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const BasicInfo = () => {
  const router = useRouter();

  return (
    <div className="md:order-2 order-1">
      <div className=" px-4 py-4">
        <Image src={"/logo.svg"} width={149} height={51} alt="logo" />
      </div>
      <div className="px-4 md:px-16">
        <SignInHeading value="Enter Indipendent  Details." />
        <HeadingDetails value="Set Up Your Credentials" />
        <div className="flex mb-4 md:flex-row flex-col items-center">
          <Completed />
          <p className="md:h-[1px] w-[1px] h-4 md:w-4 bg-[#51F7E4]"></p>
          <Progress value={"Basic Information"} />
          <p className="md:h-[1px] w-[1px] h-4 md:w-4 bg-[#EAECF0]"></p>
          <ProgressButton value={"Verification"} />
          <p className="md:h-[1px] w-[1px] h-4 md:w-4 bg-[#EAECF0]"></p>
          <ProgressButton value={"Profile & Cover"} />
          <p className="md:h-[1px] w-[1px] h-4 md:w-4 bg-[#EAECF0]"></p>
          <ProgressButton value={"Select Profession"} />
          <p className="md:h-[1px] w-[1px] h-4 md:w-4 bg-[#EAECF0]"></p>
          <ProgressButton value={"Certificate"} />
        </div>
        <form className="w-full">
          <EgtosInput
            label="First Name"
            className="w-full my-2"
            placeholder={"first name"}
          />
          <EgtosInput
            label="Last Name"
            className="w-full my-2"
            placeholder={"last name"}
          />
          <div className="flex justify-between gap-4">
            <EgtosSelect
              className="w-full"
              placeholder="Select a Country"
              options={["BD", "USA", "UAE", "AUS"]}
              label="Select country"
            />
            <EgtosSelect
              placeholder="Select a State"
              className="w-full"
              options={["DHAKA", "BARISHAL", "SYLHET"]}
              label="Select State"
            />
            <EgtosSelect
              placeholder="Select a City"
              className="w-full"
              options={["SAVAR", "UTTORA", "DHANMONDI"]}
              label="Select City"
            />
          </div>
          <div>
            <Label className="text-[#344054] my-1 font-normal text-base">
              Description
            </Label>
            <textarea
              placeholder="Enter a description"
              className="placeholder:text-[#98A2B3] w-full h-[140px] border mt-2 rounded-[12px] py-2 px-4 text-[#101828] shadow border-[#F2F4F7] focus:outline-none focus:border-[#00A099]"
            ></textarea>
          </div>
        </form>
        <div className="my-5 flex gap-4 md:my-10">
          <BackButton href="/authentication/sign-in" />
          <AuthButton
            onClick={() =>
              router.push("/authentication/sign-in/independent/verification")
            }
            className="w-full"
            value="Next"
          />
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
