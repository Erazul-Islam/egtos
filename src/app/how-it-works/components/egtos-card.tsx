import HeadingDetails from "@/components/custom/heading-details";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

interface EgtosCardProps {
  headingImage: string;
  step: string;
  heading: string;
  headingDetails: string;
  cdImage1: string;
  cdImage2: string;
  cdImage3: string;
  cdTitle1: string;
  cdTitle2: string;
  cdTitle3: string;
  details: string;
}

const EgtosCard: React.FC<EgtosCardProps> = ({
  headingImage,
  step,
  heading,
  headingDetails,
  cdImage1,
  cdImage2,
  cdImage3,
  cdTitle1,
  cdTitle2,
  cdTitle3,
  details,
}) => {
  return (
    <div>
      <div className="md:px-8 px-4 max-w-[648px] rounded-xl w-full shadow-2xl my-10 md:my-20 py-4 md:py-8">
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <Image
            src={headingImage}
            className="order-2 md:order-1"
            width={357}
            height={232}
            alt=""
          />
          <h2 className="text-[#667085] font-semibold order-1 md:order-2 text-base">
            {step}
          </h2>
        </div>
        <p className="text-[#1A1A1A] pt-6 text-3xl font-semibold">{heading}</p>
        <HeadingDetails value={headingDetails} />
        <div className="bg-[#F9F9F9] px-4 py-8 w-full rounded-xl">
          <div className="flex pl-4 items-center gap-4">
            <Image src={cdImage1} width={40} height={40} alt="" />
            <p className="text-[#1A1A1A] text-base font-semibold md:text-2xl">
              {cdTitle1}
            </p>
          </div>
          <div className="bg-[#FFFFFF] rounded-2xl shadow-lg my-8 pt-3 px-4">
            <div className="flex   items-center gap-4">
              <Image src={cdImage2} width={40} height={40} alt="" />
              <p className="text-[#1A1A1A] font-semibold text-base md:text-2xl">
                {cdTitle2}
              </p>
            </div>
            <HeadingDetails value={details} />
          </div>
          <div className="flex pl-4 items-center gap-4">
            <Image src={cdImage3} width={40} height={40} alt="" />
            <p className="text-[#1A1A1A] font-semibold text-base md:text-2xl">
              {cdTitle3}
            </p>
          </div>
        </div>
        <div className="w-14 mt-8 h-14 border border-[#D0D5DD] flex justify-center items-center rounded-full bg-[#FBFBFB]">
          <MoveUpRight color="#1A1A1A" />
        </div>
      </div>
    </div>
  );
};

export default EgtosCard;
