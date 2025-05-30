import AuthenticationCompo from "@/app/authentication/components/authentication-page";
import Image from "next/image";
import React from "react";
import BasicInfoContent from "./basic-info-content";

const ConsultBasicInfo = () => {
  return (
    <AuthenticationCompo
      image={<Image src={"/consult/consult-1.png"} width={416} height={518} alt="logo" />}
      details="Just verify your email to enter a world of possibilities"
      heading="One step closer to something great."
      content={<BasicInfoContent />}
    />
  );
};

export default ConsultBasicInfo;
