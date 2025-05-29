import Image from "next/image";
import React from "react";
import SignInHeading from "../../components/sign-in-heading";
import HeadingDetails from "@/components/custom/heading-details";

const SignInContent = () => {
  return (
    <div className="md:order-2 order-1">
      <div className="px-4 py-4">
        <Image src={"/logo.svg"} width={149} height={51} alt="logo" />
      </div>
      <div className="px-4 md:px-8">
         <SignInHeading  value="Select Profile Type" />
         <HeadingDetails value="select profile and next move to basic information" />
      </div>
    </div>
  );
};

export default SignInContent;
