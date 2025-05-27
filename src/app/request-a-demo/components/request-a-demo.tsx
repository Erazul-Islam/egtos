import EgtosButton from "@/components/custom/egtos-button";
import HeadingDetails from "@/components/custom/heading-details";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import React from "react";

const RequestADemo = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-3 md:px-5">
      <h1 className="text-center md:pt-12 md:text-6xl font-semibold text-[#1A1A1A]">
        Discover The Power of <br />{" "}
        <span className="text-[#00A099]">EGTOS</span> For Yourself
      </h1>
      <HeadingDetails
        className="text-center md:py-12 mx-auto max-w-[702px] w-full"
        value="Find out how EGTOS can transform your talent strategy firsthand. Try our demo and explore the platform's intuitive features for capacity trading and accessing global expertise. Experience the future of talent management."
      />
      <div className="flex flex-col items-center justify-between md:pb-20 md:flex-row gap-6">
        <div className="max-w-[646px] w-full bg-[url('/demo/demo-image.png')]  bg-no-repeat  bg-cover">
          <Image src={"/demo/demo-1.png"} width={593} height={504} alt="" />
        </div>

        <div className="max-w-[644px] border rounded-2xl w-full py-8 px-4 md:py-16 md:px-8 border-[#00A099]">
          <form className="space-y-6">
            {/* Name Fields Row */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label
                  htmlFor="firstName"
                  className="text-sm font-medium text-gray-900"
                >
                  First Name
                </Label>
                <Input
                  id="firstName"
                  placeholder="Name"
                  className="border border-[#EAECF0] rounded-lg h-12"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="lastName"
                  className="text-sm font-medium text-gray-900"
                >
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  placeholder="Name"
                  className="border border-[#EAECF0] rounded-lg h-12"
                />
              </div>
            </div>

            {/* Contact Fields Row */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-900"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="email"
                  className="border border-[#EAECF0] rounded-lg h-12"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="phone"
                  className="text-sm font-medium text-gray-900"
                >
                  Phone number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Phone number"
                  className="border border-[#EAECF0]rounded-lg h-12"
                />
              </div>
            </div>

            {/* Role Field */}
            <div className="space-y-2">
              <Label
                htmlFor="role"
                className="text-sm font-medium text-gray-900"
              >
                {"What's your role ?"}
              </Label>
              <Input
                id="role"
                placeholder="Your role"
                className="border border-[#EAECF0] rounded-lg h-12"
              />
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <Label
                htmlFor="message"
                className="text-sm font-medium text-gray-900"
              >
                What Else Do You Want To Know Chat About ?
              </Label>
              <Textarea
                id="message"
                placeholder="Write your message..."
                className=" border border-[#EAECF0] rounded-lg min-h-[120px] resize-none"
              />
            </div>

            {/* Submit Button */}
            <EgtosButton value="Try egtos For Free" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default RequestADemo;
