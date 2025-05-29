import React from "react";
import AuthenticationCompo from "../../components/authentication-page";
import HeadingDetails from "@/components/custom/heading-details";
import Image from "next/image";
import LoginContent from "./login-content";

const Login = () => {
  return (
    <AuthenticationCompo
      image={
        <Image
          src={"/login/login-1.png"}
          width={411}
          height={499}
          alt="Login Illustration"
          className="object-contain"
        />
      }
      content={<LoginContent />}
      details={
        <HeadingDetails
          className="max-w-[263px]"
          value="It’s good to see you again. Let’s pick up where you left off"
        />
      }
      heading={"Welcome back, we’ve kept your seat warm"}
    />
  );
};

export default Login;
