import Image from "next/image";
import React from "react";
import SignInHeading from "../../components/sign-in-heading";
import HeadingDetails from "@/components/custom/heading-details";

const Success = () => {
  return (
    <div className="bg-[#F7F7F7] h-screen flex flex-col">
      {/* Logo at the top */}
      <div className="px-4 py-4">
        <Image src="/logo.svg" width={149} height={51} alt="logo" />
      </div>

      {/* Centered content */}
      <div className="flex-grow flex justify-center items-center">
        <div className="max-w-[630px] bg-white flex flex-col justify-center items-center rounded-2xl w-full p-6">
          <Image src="/success.svg" width={400} height={400} alt="success" />
          <SignInHeading className="text-center" value="Information Submitted Successfully" />
          <HeadingDetails
            className="text-center"
            value={
              <span>
                Please wait while we review your submission. You’ll receive a <br />
                confirmation shortly.
              </span>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Success;
