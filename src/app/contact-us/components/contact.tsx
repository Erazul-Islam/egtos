import HeadingButton from "@/components/custom/heading-button";
import HeadingDetails from "@/components/custom/heading-details";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div className="bg-[#F7F7F7] mt-4">
      <div className="max-w-[1440px] py-8 md:py-16 flex flex-col md:flex-row items-center justify-between gap-6 mx-auto px-3 md:px-5">
        <Image src={"/contact/contact-1.png"} width={696} height={701} alt="" />
        <div className="max-w-[564px] rounded-3xl bg-[#FFFFFF] w-full px-3 py-3 md:py-6 md:px-6">
          <HeadingButton value="Get in Touch" />
          <p className="font-semibold pt-4 md:pt-0 md:py-8 text-3xl md:text-6xl text-[#1A1A1A]">
            Connect With The <span className="text-[#00A099]">EGTOS</span> Team
          </p>
          <HeadingDetails value="Whether you’re ready to start trading your talent or you have questions about the EGTOS platform, our team is here to help. Contact us directly to learn how EGTOS can help your business thrive." />
          <div className="border px-4 py-4 rounded-2xl border-[#C7FFF7]">
            <div className="flex gap-4 justify-between">
              <div className="">
                <Label className="text-base">First Name</Label>
                <Input
                  placeholder="Name"
                  className="border-b-4 mt-3 border-[#EAECF0] border-0 w-full max-w-[199px]"
                />
              </div>
              <div>
                <Label className="text-base">Last Name</Label>
                <Input
                  placeholder="Name"
                  className="border-b-4 mt-3 border-[#EAECF0] border-0  w-full max-w-[199px]"
                />
              </div>
            </div>
            <div className="flex gap-4 py-5 justify-between">
              <div className="">
                <Label className="text-base">Email</Label>
                <Input
                  placeholder="Email"
                  className="border-b-4 mt-3 border-[#EAECF0] border-0 w-full max-w-[199px]"
                />
              </div>
              <div>
                <Label className="text-base">Phone Number</Label>
                <Input
                  placeholder="Phone Number"
                  className="border-b-4 mt-3 border-[#EAECF0] border-0 w-full max-w-[199px]"
                />
              </div>
            </div>
            <div className="pb-5">
              <Label className="text-base">Company Name</Label>
              <Input
                placeholder="Company Name"
                className="border-b-4 mt-3 border-[#EAECF0] border-0 w-full"
              />
            </div>
            <div className="pb-5">
              <Label className="text-base">Message</Label>
              <Textarea
                placeholder="Write your message.."
                className="border-b-4 mt-3 h-24 border-[#EAECF0] border-0 w-full"
              />
            </div>
            <div className="flex py-6 items-center gap-4 ">
              <input className="w-6 h-6" type="checkbox" />
              <p className="text-[#475467] font-normal">You agree to our friendly privacy policy.</p>
            </div>
            <button className="bg-[#00A099] md:my-12 my-6 text-white cursor-pointer rounded-full px-5 shadow-[0px_-2px_1px_0px_#0C19282E_inset,0px_7px_15px_-3px_#647C9933,0px_2px_4px_0px_#647C994D,0px_2px_1px_0px_#FFFFFF1A_inset] transition duration-200 hover:brightness-105 active:brightness-95 py-4 font-medium text-[16px]">
              <Link href="/get-started">Submit Now</Link>
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
