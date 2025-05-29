import React from "react";
import AuthenticationCompo from "../../components/authentication-page";
import Image from "next/image";
import HeadingDetails from "@/components/custom/heading-details";
import SignInContent from "./sign-in-content";

const SignIn = () => {
  return (
    <AuthenticationCompo
      image={
        <Image
          src={"/company/co-1.png"}
          width={411}
          height={499}
          alt="Login Illustration"
          className="object-contain"
        />
      }
      heading="New here? Let’s write your first chapter."
      details={
        <HeadingDetails value="Create an account and begin your story with us." />
      }
      content={<SignInContent/>}
    />
  );
};

export default SignIn;
