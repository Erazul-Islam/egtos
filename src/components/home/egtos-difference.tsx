import Image from "next/image";
import React from "react";

const EgtosDifference = () => {
  return (
    <div className="bg-[#FFFFFFCC] my-10 md:my-0">
      <h1 className="md:text-center px-3 md:px-0 md:py-3 text-3xl font-semibold md:text-7xl text-[#1A1A1A]">
        The <span className="text-[#00A099]">EGTOS</span> Difference
      </h1>
      <p className="md:text-center px-3 md:px-0 pt-4 md:pt-0 md:pb-3 text-[#3D3D3D]">
        Enabling companies to rapidly scal consulting firms and independent{" "}
        <br /> experts scale while delivery value for both organizations,
      </p>
      <div className="max-w-[1440px] flex md:flex-row flex-col justify-between gap-4 mx-auto px-3 md:px-5">
        <div className="w-full pt-6 md:pt-12">
          <h1 className="border text-[#475467] text-2xl font-semibold h-12 md:h-[77px] flex items-center rounded-xl px-4 border-[#51F7E480]">
            Clients
          </h1>
          <div className="w-full rounded-xl border my-4 border-[#02AC9266] px-4 md:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="bg-[#EFFEFC] max-w-[283px] md:w-full w-[120px] px-2 py-2 rounded-xl border border-[#1DE4D4]">
                <Image src={"/logo.svg"} width={150} height={44} alt="logo" />
              </div>
              <p className="md:text-3xl text-xl  font-semibold text-[#1A1A1A]">
                Traditionally
              </p>
            </div>

            <div className="flex justify-between items-center">
              <DiscountBadge
                label="Discounted"
                amount={"-60"}
                icon="/home/eg-1.png"
              />
              <p className=" text-base font-normal text-[#475467]">
                Very Expensive
              </p>
            </div>
            <div className="flex justify-between items-center">
              <DiscountBadge
                label="Flexible, Outcome Oriented"
                amount={""}
                icon="/home/eg-2.png"
              />
              <p className=" text-base font-normal text-[#475467]">
                Rigid Process
              </p>
            </div>
            <div className="flex justify-between items-center">
              <DiscountBadge
                label="Efficient (eg: no air travel, non-framework based)"
                amount={""}
                icon="/home/eg-3.png"
              />
              <p className=" text-base font-normal text-[#475467]">
                Inefficient
              </p>
            </div>
            <div className="flex justify-between items-center">
              <DiscountBadge
                label="About You Not Us"
                amount={""}
                icon="/home/eg-4.png"
              />
              <p className=" text-base font-normal text-[#475467]">
                About Team Not You
              </p>
            </div>
            <div className="flex  justify-between items-center">
              <DiscountBadge
                label="Specialists"
                amount={""}
                icon="/home/eg-5.png"
              />
              <p className=" text-base font-normal text-[#475467]">
                Generalists
              </p>
            </div>
            <div className="flex justify-between items-center">
              <DiscountBadge
                label="Seasoned Experts"
                amount={""}
                icon="/home/eg-6.png"
              />
              <p className="text- text-base font-normal text-[#475467]">
                Junior People
              </p>
            </div>
          </div>
        </div>
        <div className="w-full pt-6 md:pt-12">
          <h1 className="border text-[#475467] text-2xl font-semibold h-12 md:h-[77px] flex items-center rounded-xl px-4 border-[#51F7E480]">
            Independent
          </h1>
          <div className="w-full rounded-xl border my-4 border-[#02AC9266] px-4 md:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="bg-[#EFFEFC] max-w-[283px] md:w-full w-[120px] px-2 py-2 rounded-xl border border-[#1DE4D4]">
                <Image src={"/logo.svg"} width={150} height={44} alt="logo" />
              </div>
              <p className="md:text-3xl text-xl font-semibold text-[#1A1A1A]">
                Traditionally
              </p>
            </div>

            <div className="flex justify-between items-center">
              <DiscountBadge
                label="Focus on their area of expertise"
                amount={""}
                icon="/home/ind-1.png"
              />
              <p className="text-base font-normal text-[#475467]">
                Boring work (outside of expertise)
              </p>
            </div>
            <div className="flex justify-between items-center">
              <DiscountBadge
                label="Part of Senior Team"
                amount={""}
                icon="/home/ind-2.png"
              />
              <p className="text-base font-normal text-[#475467]">
                Inexperienced Colleagues
              </p>
            </div>
            <div className="flex justify-between items-center">
              <DiscountBadge
                label="Free to do their best work"
                amount={""}
                icon="/home/ind-3.png"
              />
              <p className="text-base font-normal text-[#475467]">
                Feel Like They’re in a Straight-jacket
              </p>
            </div>
            <div className="flex justify-between items-center">
              <DiscountBadge
                label="Flexibility around other commitments"
                amount={""}
                icon="/home/ind-4.png"
              />
              <p className="text-base font-normal text-[#475467]">
                Inflexible, long hours and lots of travel
              </p>
            </div>
            <div className="flex justify-between items-center">
              <DiscountBadge
                label="Higher Income"
                amount={""}
                icon="/home/ind-5.png"
              />
              <p className="text-base font-normal text-[#475467]">
                Fixed Salary
              </p>
            </div>
            <div className="flex justify-between items-center">
              <DiscountBadge
                label="Profit Sharing Partner in 12 Months"
                amount={""}
                icon="/home/ind-6.png"
              />
              <p className="text-base font-normal text-[#475467]">
                Slow Progression to Partner
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EgtosDifference;

type DiscountBadgeProps = {
  icon: string;
  amount: string | number;
  label: string;
  className?: string;
};

const DiscountBadge: React.FC<DiscountBadgeProps> = ({
  icon,
  amount,
  label,
  className = "",
}) => {
  return (
    <div
      className={`flex py-3 px-3 gap-2 max-w-[190px] md:max-w-[283px] w-full md:gap-3 items-center bg-[#F5FEFD] my-4 rounded-xl  ${className}`}
    >
      <div className="bg-white rounded-full px-2 py-2">
        <Image src={icon} width={18} height={18} alt="icon" />
      </div>
      <p className="text-2xl font-semibold text-[#1A1A1A]">{amount}</p>
      <p className="text-base font-medium text-[#181D27]">{label}</p>
    </div>
  );
};
