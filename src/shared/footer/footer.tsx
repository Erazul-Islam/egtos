import EgtosButton from "@/components/custom/egtos-button";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#F7F7F7] ">
      <div className="max-w-[1440px] py-4 md:pt-32 pt-2 px-3 md:px-0 mx-auto">
        <Image src={"/footer.svg"} width={638} height={220} alt="egtos" />
        <div>
          <Image src={"/f.png"} width={126} height={124} alt="egtos" />
          <EgtosButton value={"Get Started"} />
          <EgtosButton className="px-2" value={<Image src={'/arrow.png'} width={24} height={24} alt="" />} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
