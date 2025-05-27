import CustomFooter from "@/components/custom/custom-footer";
import EgtosButton from "@/components/custom/egtos-button";
import Image from "next/image";
import React from "react";

const AboutFooter = () => {
  return (
    <div>
      <CustomFooter
        button2={
          <EgtosButton
            className="px-2"
            value={<Image src={"/arrow.png"} width={24} height={24} alt="" />}
          />
        }
        button1={<EgtosButton value={"Get Started"} />}
        details={
          "Discover how trading smarter with EGTOS can drive the sustainable growth of your organization."
        }
        heading={
          <span>
            {" "}
            <span className="text-[#00A099]">Empowering</span> Smarter Teams for
            a Smarter Future
          </span>
        }
      />
    </div>
  );
};

export default AboutFooter;
