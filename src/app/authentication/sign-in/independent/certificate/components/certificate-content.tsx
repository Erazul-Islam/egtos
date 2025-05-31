"use client";
import AuthButton from "@/app/authentication/components/auth-button";
import { Completed, Progress } from "@/app/authentication/components/progress";
import SignInHeading from "@/app/authentication/components/sign-in-heading";
import { BackButton } from "@/components/custom/back-button";
import HeadingDetails from "@/components/custom/heading-details";
import {
  EgtosDatePicker,
  EgtosSelect,
} from "@/components/form-elements/form-elements";
import { MoveLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";

const CertificateContent = () => {
  const router = useRouter();
  const coverInputRef = useRef<HTMLInputElement>(null);
  const [coverImage, setCoverImage] = useState<string | null>();

  const handleCoverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCoverImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="md:order-2 flex flex-col order-1">
      <div className=" px-4 py-4">
        <Image src={"/logo.svg"} width={149} height={51} alt="logo" />
      </div>
      <div className="flex px-4  lg:px-16 xl:px-32 2xl:px-64 flex-col justify-center items-center">
        <SignInHeading
          className="text-3xl text-center"
          value="Upload Certificate"
        />
        <HeadingDetails
          className="text-center"
          value="Set Up Your Credentials"
        />
        <div className="flex mt-4 md:flex-row flex-col justify-center items-center">
          <Completed />
          <p className="md:h-[1px] w-[1px] h-4 md:w-4 bg-[#51F7E4]"></p>
          <Completed />
          <p className="md:h-[1px] w-[1px] h-4 md:w-4 bg-[#51F7E4]"></p>
          <Completed />
          <p className="md:h-[1px] w-[1px] h-4 md:w-4 bg-[#51F7E4]"></p>
          <Completed />
          <p className="md:h-[1px] w-[1px] h-4 md:w-4 bg-[#51F7E4]"></p>
          <Completed />
          <p className="md:h-[1px] w-[1px] h-4 md:w-4 bg-[#51F7E4]"></p>
          <Progress value={"Certificate"} />
        </div>
        <EgtosSelect
          className="md:w-[600px] w-full"
          placeholder="Select Job"
          options={[
            "UI UX Designer",
            "FrontEnd Developer",
            "Backend Developer",
          ]}
          label="Certificate Names"
        />
        <div className="flex md:w-[600px] mt-3 w-full gap-4">
          <EgtosDatePicker
            className="md:w-[300px] w-full"
            placeholder="Select Start Date"
            label="Start Date"
          />
          <EgtosDatePicker
            className="md:w-[300px] w-full"
            placeholder="Select End Date"
            label="End Date"
          />
        </div>
        <div
          onClick={() => coverInputRef.current?.click()}
          className="bg-[#F9F9F9] flex flex-col md:w-[600px] mt-8 w-full border-dotted border-2 border-[#00A099] justify-center items-center rounded-2xl h-[200px] relative cursor-pointer"
        >
          {coverImage ? (
            <Image
              src={coverImage}
              alt="cover"
              fill
              className="object-cover rounded-xl"
            />
          ) : (
            <>
              <Image
                src="/company/CameraPlus.svg"
                width={40}
                height={40}
                alt=""
              />
              <p className="text-[#292D32] text-center font-normal text-[14px]">
                Choose a file or drag & drop it here
              </p>
              <p className="text-[#667085] font-normal text-[14px]">
                JPEG, PNG formats, up to 50MB
              </p>
            </>
          )}

          <input
            type="file"
            accept="image/*"
            className="hidden"
            ref={coverInputRef}
            onChange={handleCoverChange}
          />
        </div>
        <button className="py-2 mt-4 w-full text-center justify-center md:mt-8 cursor-pointer rounded-[12px] text-[#98A2B3] px-8 border flex items-center gap-4 border-[#D0D5DD] bg-[#F2F4F7]">
          {" "}
          <MoveLeft /> Add
        </button>
        <div className="flex py-4 max-w-[600px] w-full md:py-8 gap-4">
          <BackButton href="/authentication/sign-in/independent/profile-cover" />
          <AuthButton
            onClick={() => router.push("/authentication/success")}
            className="w-full"
            value="Continue"
          />
        </div>
      </div>
    </div>
  );
};

export default CertificateContent;
