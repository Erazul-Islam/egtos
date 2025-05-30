import AuthenticationCompo from "@/app/authentication/components/authentication-page";
import Image from "next/image";
import React from "react";
import UploadProfileContent from "./upload-profile-content";

const UploadProfile = () => {
  return (
    <AuthenticationCompo
      image={
        <Image src={"/up-1.png"} width={440} height={459} alt="" />
      }
      details="Add your profile and cover to show the world who you are."
      heading="Make It Yours"
      content={<UploadProfileContent />}
    />
  );
};

export default UploadProfile;
