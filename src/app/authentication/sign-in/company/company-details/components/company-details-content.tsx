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
import { EgtosInput } from "@/components/form-elements/form-elements";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const CompanyDetailsContent = () => {
  const router = useRouter();

  return (
    <div className="md:order-2 order-1">
      <div className=" px-4 py-4">
        <Image src={"/logo.svg"} width={149} height={51} alt="logo" />
      </div>
      <div className="px-4 md:px-16">
        <div className="flex mt-4 md:flex-row flex-col items-center">
          <Completed />
          <p className="md:h-[1px] w-[1px] h-4 md:w-4 bg-[#51F7E4]"></p>
          <Completed />
          <p className="md:h-[1px] w-[1px] h-4 md:w-4 bg-[#51F7E4]"></p>
          <Completed />
          <p className="md:h-[1px] w-[1px] h-4 md:w-4 bg-[#51F7E4]"></p>
          <Progress value={"Company Details"} />

          <p className="md:h-[1px] w-[1px] h-4 md:w-4 bg-[#EAECF0]"></p>
          <ProgressButton value={"Location"} />
          <p className="md:h-[1px] w-[1px] h-4 md:w-4 bg-[#EAECF0]"></p>
          <ProgressButton value={"Profile & Cover"} />
          <p className="md:h-[1px] w-[1px] h-4 md:w-4 bg-[#EAECF0]"></p>
          <ProgressButton value={"Subscription"} />
        </div>
        <SignInHeading value="Enter Company Details." />
        <HeadingDetails value="Set Up Your Credentials" />
        <form className="w-full">
          <EgtosInput
            label="Company Name"
            className="w-full my-2"
            placeholder={"company name"}
          />
          <EgtosInput
            label="Description"
            className="w-full h-[140px] my-2"
            placeholder={"Enter your description"}
          />
          <div className="my-5 flex gap-4 md:my-10">
            <BackButton href="/authentication/sign-in/company/verificatio" />
            <AuthButton
              onClick={() =>
                router.push("/authentication/sign-in/company/verification")
              }
              href="/authentication/sign-in/company/verification"
              className="w-full"
              value="Next"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompanyDetailsContent;
