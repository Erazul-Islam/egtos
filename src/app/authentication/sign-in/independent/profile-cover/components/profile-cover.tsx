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
import { Camera } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";

const ProfileCover = () => {
  const router = useRouter();

  const [coverImage, setCoverImage] = useState<string | null>(null);
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const coverInputRef = useRef<HTMLInputElement>(null);
  const profileInputRef = useRef<HTMLInputElement>(null);

  const handleCoverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCoverImage(URL.createObjectURL(file));
    }
  };

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className=" h-screen bg-[#F7F7F7] w-full">
      <div className=" px-4 py-4">
        <Image src={"/logo.svg"} width={149} height={51} alt="logo" />
      </div>
      <div className="px-4 md:px-16">
        <SignInHeading
          className="text-center"
          value="Upload Profile and Cover"
        />
        <HeadingDetails
          className="text-center"
          value="Input your Profile and cover  move to Subscription"
        />
        <div className="flex mt-4 md:flex-row flex-col justify-center items-center">
          <Completed />
          <p className="md:h-[1px] w-[1px] h-4 md:w-4 bg-[#51F7E4]"></p>
          <Completed />
          <p className="md:h-[1px] w-[1px] h-4 md:w-4 bg-[#51F7E4]"></p>
          <Completed />
          <p className="md:h-[1px] w-[1px] h-4 md:w-4 bg-[#51F7E4]"></p>
          <Progress value={"Profile & Cover"} />
          <p className="md:h-[1px] w-[1px] h-4 md:w-4 bg-[#EAECF0]"></p>
          <ProgressButton value={"Select profession"} />
          <p className="md:h-[1px] w-[1px] h-4 md:w-4 bg-[#EAECF0]"></p>
          <ProgressButton value={"Certificate"} />
        </div>
        <div className="flex flex-col mt-4 md:mt-8 justify-center items-center">
          <div className="max-w-[761px] w-full relative rounded-4xl bg-[#FFFFFF] p-3">
            <div
              className="bg-[#F9F9F9] flex flex-col justify-center items-center rounded-tl-[24px] rounded-tr-[24px] h-[200px] relative cursor-pointer"
              onClick={() => coverInputRef.current?.click()}
            >
              {coverImage ? (
                <Image
                  src={coverImage}
                  alt="cover"
                  fill
                  className="object-cover rounded-tl-[24px] rounded-tr-[24px]"
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

              {/* Profile Image Upload */}
              <div
                className="absolute left-4 bottom-[-62px] cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  profileInputRef.current?.click();
                }}
              >
                <div className="relative w-[124px] h-[124px] rounded-full overflow-hidden shadow-md">
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    {!profileImage && <Camera color="#667085" size={32} />}
                  </div>
                  {profileImage ? (
                    <Image src={profileImage} alt="profile" fill className="" />
                  ) : (
                    <Image
                      src="/company/olivia.jpg"
                      alt="default profile"
                      fill
                      className="object-cover"
                    />
                  )}
                  <div
                    className={`${
                      !profileImage
                        ? "absolute inset-0 bg-white/40 backdrop-blur-[24px] z-0"
                        : ""
                    }`}
                  ></div>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  ref={profileInputRef}
                  onChange={handleProfileChange}
                />
              </div>
            </div>

            {/* Content */}
            <div className="pt-[72px] px-4">
              <p className="text-[#181D27] font-semibold text-xl">
                Egtos Technology.
              </p>
              <HeadingDetails
                className="pt-2"
                value={
                  <span>
                    Connecting tech talent with great companies through
                    community-driven hiring. <br /> Fast, smart, and built for
                    the future of work.
                  </span>
                }
              />
            </div>
          </div>
          <div className="my-5 max-w-[761px] w-full flex gap-4 md:my-10">
            <BackButton href="/authentication/sign-in/company/company-details" />
            <AuthButton
              onClick={() =>
                router.push("/authentication/sign-in/company/subscription")
              }
              // href="/authentication/sign-in/company/upload-profile"
              className="w-full"
              value="Next"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCover;
