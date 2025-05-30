"use client";

import AuthButton from "@/app/authentication/components/auth-button";
import { Completed, Progress } from "@/app/authentication/components/progress";
import SignInHeading from "@/app/authentication/components/sign-in-heading";
import { BackButton } from "@/components/custom/back-button";
import HeadingDetails from "@/components/custom/heading-details";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Subscription = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col px-4 py-8">
      {/* Logo at the top, not centered with the rest */}
      <div className="mb-6">
        <Image src={"/logo.svg"} width={149} height={51} alt="logo" />
      </div>

      {/* Centered content below the logo */}
      <div className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-screen-lg flex flex-col items-center">
          {/* Progress */}
          <div className="flex mt-4 md:flex-row flex-col items-center">
            <Completed />
            <p className="md:h-[1px] w-[1px] h-4 md:w-4 bg-[#51F7E4]"></p>
            <Completed />
            <p className="md:h-[1px] w-[1px] h-4 md:w-4 bg-[#51F7E4]"></p>
            <Completed />
            <p className="md:h-[1px] w-[1px] h-4 md:w-4 bg-[#51F7E4]"></p>
            <Completed />
            <p className="md:h-[1px] w-[1px] h-4 md:w-4 bg-[#51F7E4]"></p>
            <Completed />
            <p className="md:h-[1px] w-[1px] h-4 md:w-4 bg-[#51F7E4]"></p>
            <Progress value="Subscription" />
          </div>

          {/* Heading */}
          <div className="max-w-[477px] text-center mt-6">
            <SignInHeading value="Choose Your Plan to Unlock Full Capacity" />
            <HeadingDetails value="Egtos offers flexible SaaS without the limits of traditional subscriptions." />
          </div>

          {/* Cards */}
          <div className="max-w-6xl mx-auto gap-6 pb-16 md:gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full mt-8">
            {/* Grow */}
            <Card className="flex-1 bg-white shadow-lg relative z-10 flex flex-col">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mb-4">
                  <Image src={"/colorfilter.png"} width={20} height={20} alt="" />
                </div>
                <Badge variant="outline" className="mb-4 bg-white border-gray-300 text-gray-700">
                  Anually
                </Badge>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Grow</h2>
                <p className="text-gray-600 mb-8 leading-relaxed flex-grow">
                  Establish trading partner networks and trade capacity with your companies of choice
                </p>
                <Button variant="outline" className="w-full border-teal-600 text-teal-600 hover:bg-teal-50">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Scale - Highlighted */}
            <Card className="flex-1 bg-teal-600 shadow-lg relative z-10 flex flex-col">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
                  <Image src={"/c-5.png"} width={20} height={20} alt="" />
                </div>
                <Badge variant="secondary" className="mb-4 bg-white text-gray-700">
                  Anually
                </Badge>
                <h2 className="text-3xl font-bold text-white mb-4">Scale</h2>
                <p className="text-white mb-8 leading-relaxed flex-grow">
                  Reach beyond your trading partner networks and tap into the global and diverse expert talent pool to rapidly scale to enable effective execution of your roadmap
                </p>
                <Button className="w-full bg-white text-teal-600 hover:bg-gray-50">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Predict */}
            <Card className="flex-1 bg-white shadow-lg relative z-10 flex flex-col">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mb-4">
                  <Image src={"/colorfilter.png"} width={20} height={20} alt="" />
                </div>
                <Badge variant="outline" className="mb-4 bg-white border-gray-300 text-gray-700">
                  Anually
                </Badge>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Predict</h2>
                <p className="text-gray-600 mb-8 leading-relaxed flex-grow">
                  Reach beyond your trading partner networks and tap into the global and diverse expert talent pool to rapidly scale to enable effective execution of your roadmap
                </p>
                <Button variant="outline" className="w-full border-gray-400 text-gray-700 hover:bg-gray-50">
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Navigation */}
          <div className="my-5 max-w-[761px] w-full flex flex-row gap-4 md:my-10">
            <BackButton href="/authentication/sign-in/company/company-details" />
            <AuthButton
              onClick={() => router.push("/authentication/sign-in/company/subscription")}
              className="w-full"
              value="Next"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
