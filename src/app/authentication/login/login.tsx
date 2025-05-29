import React from "react";
import AuthenticationCompo from "../components/authentication-page";
import HeadingDetails from "@/components/custom/heading-details";
import AuthButton from "../components/auth-button";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const Login = () => {
  return (
    <AuthenticationCompo
      content={
        <div className="flex-1 order-1 md:order-2 flex flex-col px-4 py-4">
          <div className="pb-4 md:pb-0">
            <Image src={"/logo.svg"} width={149} height={51} alt="logo" />
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="px-6 max-w-[448px] w-full flex flex-col py-6">
              <h1 className="text-[#667085] font-normal text-base">Login</h1>
              <h2 className="text-[#181D27] text-xl md:text-2xl font-semibold py-4">
                Your Access to Global Expertise & Scalable Teams
              </h2>

              <div className="max-w-[360px] w-full">
                <div>
                  <Label className="text-[#667085] font-normal text-base">
                    Email
                  </Label>
                  <input
                    type="email"
                    className="border mt-2  w-full rounded-xl py-2 px-4 text-[#101828] shadow border-[#F2F4F7] focus:outline-none focus:border-[#00A099]"
                  />
                </div>
                <div className="my-3">
                  <Label className="text-[#667085] font-normal text-base">
                    Password
                  </Label>
                  <input
                    type="password"
                    className="border mt-2  w-full rounded-xl py-2 px-4 text-[#101828] shadow border-[#F2F4F7] focus:outline-none focus:border-[#00A099]"
                  />
                </div>

                <div className="flex mt-2 items-center justify-between">
                  <div className="flex gap-2">
                    <input type="checkbox" />
                    <p className="text-[#667085] text-xs font-medium">
                      Remember for 30 days
                    </p>
                  </div>
                  <p className="text-[#00A099] text-xs font-medium">
                    Forgot Password
                  </p>
                </div>

                <AuthButton className="my-4 w-full" value="Login" href="" />

                <div className="flex gap-3 my-8 items-center">
                  <p className="h-[1px] w-[160px] bg-[#F2F4F7]"></p>
                  <p className="text-xs text-[#98A2B3]">Or</p>
                  <p className="h-[1px] w-[160px] bg-[#F2F4F7]"></p>
                </div>

                <p className="text-xs mt-4 flex items-center justify-center text-[#535862]">
                  Don&rsquo;t have an account?
                  <span className="text-[#00A099] ml-1">
                    {" "}
                    <Link href={"/authentication/sign-in"}>Sign up</Link>{" "}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      }
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
