import React from "react";
import MonetizeYourBranch from "./monetize";
import UseCase from "./use-case";
import Collaborate from "./collaborate";
import Security from "./security";
import CustomFooter from "@/components/custom/custom-footer";
import EgtosButton from "@/components/custom/egtos-button";
import Link from "next/link";


const ConsultingFirmsContent = () => {
  return (
    <div>
      <MonetizeYourBranch />
      <UseCase />
      <Collaborate />
      <Security />
      <CustomFooter
        button1={<EgtosButton value="Start Trading Talent" />}
        button2={
          <button className="text-[#00A099] font-medium cursor-pointer rounded-2xl px-5 shadow-[0px_-2px_1px_0px_#0C19282E_inset,0px_7px_15px_-3px_#647C9933,0px_2px_4px_0px_#647C994D,0px_2px_1px_0px_#FFFFFF1A_inset] transition duration-200 hover:brightness-105 active:brightness-95 py-4 bg-[#F7F7F7]">
              <Link href="/sign-in">Try Our Demo</Link>
          </button>
        }
        details="Join EGTOS and build resilient, efficient, and more cost-effective teams for your projects."
        heading="Turn Downtime Into Opportunity"
      />
    </div>
  );
};

export default ConsultingFirmsContent;
