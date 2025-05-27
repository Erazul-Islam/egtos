import Image from "next/image";
import React from "react";

interface cardProps {
    image : string,
    heading : string,
    details : string
}

const EgtpsBenefitCard : React.FC<cardProps> = ({ image, heading, details }) => {
  return (
    <div className="max-w-[448px] border border-[#EAECF0] px-3 md:px-6 max-h-[460px] py-3 md:py-6 w-full rounded-2xl bg-[#F7F7F7]">
      <Image
        className="block md:w-[300px] md:h-[214px] mx-auto"
        src={image}
        width={290}
        height={214}
        alt=""
      />
      <h1 className="text-2xl py-3 md:py-2 font-semibold text-[#1A1A1A]">
        {heading}
      </h1>
      <p className="md:py-3 py-1 text-sm font-normal text-[#475467]">
        {details}
      </p>
    </div>
  );
};

export default EgtpsBenefitCard;
