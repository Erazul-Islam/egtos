import AuthenticationCompo from "@/app/authentication/components/authentication-page";
import Image from "next/image";
import React from "react";
import CompanyDetailsContent from "./company-details-content";

const CompanyDetails = () => {
  return (
    <AuthenticationCompo
      content={<CompanyDetailsContent />}
      heading="Welcome back, we’ve kept your seat warm"
      details="It’s good to see you again. Let’s pick up where you left off"
      image={
        <Image src={"/company/de-1.png"} width={409} height={335} alt="logo" />
      }
    />
  );
};

export default CompanyDetails;
