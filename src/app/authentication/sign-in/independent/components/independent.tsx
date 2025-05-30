import AuthenticationCompo from "@/app/authentication/components/authentication-page";
import Image from "next/image";
import React from "react";
import BasicInfo from "./basic-info";

const Independent = () => {
  return (
    <AuthenticationCompo
      content={<BasicInfo />}
      image={
        <Image src={"/consult/consult-2.png"} width={415} height={468} alt="" />
      }
      heading="New here? Let’s write your first chapter."
      details="Create an account and begin your story with us."
    />
  );
};

export default Independent;
