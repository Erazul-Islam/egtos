import CustomFooter from "@/components/custom/custom-footer";
import EgtosButton from "@/components/custom/egtos-button";
import Link from "next/link";
import React from "react";
import JoinNetWork from "./join-network";

const IndependentContent = () => {
  return (
    <div>
      <JoinNetWork />
      <CustomFooter
        button1={<EgtosButton value="Apply as an Expert" />}
        button2={
          <button className="text-[#00A099] font-medium cursor-pointer rounded-2xl px-5 shadow-[0px_-2px_1px_0px_#0C19282E_inset,0px_7px_15px_-3px_#647C9933,0px_2px_4px_0px_#647C994D,0px_2px_1px_0px_#FFFFFF1A_inset] transition duration-200 hover:brightness-105 active:brightness-95 py-4 bg-[#F7F7F7]">
            <Link href="/sign-in">Explore Project</Link>
          </button>
        }
        details=""
        heading="Start Earning  What you’re worth"
      />
    </div>
  );
};

export default IndependentContent;
