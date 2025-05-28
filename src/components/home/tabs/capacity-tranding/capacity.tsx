import React from "react";
import GainValue from "./gain-value";
import FirstExperts from "./find-experts";
import SaveCosts from "./save-costs";
import BoostCareer from "./boost-career";
import CustomFooter from "@/components/custom/custom-footer";
import EgtosButton from "@/components/custom/egtos-button";
import Image from "next/image";

const Capacity = () => {
  return (
    <div>
      <GainValue />
      <FirstExperts />
      <SaveCosts />
      <BoostCareer />
      <CustomFooter
        button2={
          <EgtosButton
            className="px-2"
            value={<Image src={"/arrow.png"} width={24} height={24} alt="" />}
          />
        }
        button1={<EgtosButton value={"Start Trading Talent"} />}
        details=""
        heading="Ready to Future-Proof Your Workforce?"
      />
    </div>
  );
};

export default Capacity;
