import AuthenticationCompo from "@/app/authentication/components/authentication-page";
import Image from "next/image";
import React from "react";
import BasicInfoContent from "./basic-info-content";

const BasicInformation = () => {
  return (
    <AuthenticationCompo
      image={
        <Image
          src={"/company/basic-info.png"}
          width={460}
          height={500}
          alt=""
        />
      }
      heading="One step closer to something great."
      details="Just verify your email to enter a world of possibilities"
      content={<BasicInfoContent/>}
    />
  );
};

export default BasicInformation;
