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
import { EgtosSelect } from "@/components/form-elements/form-elements";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const ProfessionContent = () => {
  const router = useRouter();

  return (
    <div className="md:order-2 flex flex-col order-1">
      <div className=" px-4 py-4">
        <Image src={"/logo.svg"} width={149} height={51} alt="logo" />
      </div>
      <div className="">
        <div className="px-4 md:px-16">
          <SignInHeading
            className="text-3xl items-center"
            value="Select Profession"
          />
          <HeadingDetails value="Set Up Your Credentials" />
          <div className="flex mt-4 md:flex-row flex-col justify-center items-center">
            <Completed />
            <p className="md:h-[1px] w-[1px] h-4 md:w-4 bg-[#51F7E4]"></p>
            <Completed />
            <p className="md:h-[1px] w-[1px] h-4 md:w-4 bg-[#51F7E4]"></p>
            <Completed />
            <p className="md:h-[1px] w-[1px] h-4 md:w-4 bg-[#51F7E4]"></p>
            <Completed />
            <p className="md:h-[1px] w-[1px] h-4 md:w-4 bg-[#51F7E4]"></p>
            <Progress value={"Select profession"} />
            <p className="md:h-[1px] w-[1px] h-4 md:w-4 bg-[#EAECF0]"></p>
            <ProgressButton value={"Certificate"} />
          </div>
          <EgtosSelect
            placeholder="Select Category"
            options={["Teacher", "Student", "Doctor", "Employee"]}
            label="Profession Category"
          />
          <EgtosSelect
            placeholder="Select Job"
            options={["Teacher", "Student", "Doctor", "Employee"]}
            label="Field"
          />
          <div className="flex py-4 md:py-8 gap-4">
            <BackButton href="/authentication/sign-in/independent/profile-cover" />
            <AuthButton
              onClick={() =>
                router.push("/authentication/sign-in/independent/certificate")
              }
              className="w-full"
              value="Continue"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionContent;
