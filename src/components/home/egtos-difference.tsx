import Image from "next/image";
import React from "react";

const EgtosDifference = () => {
  return (
    <div className="bg-[#FFFFFFCC] md:block hidden">
      <h1 className="text-center py-3 font-semibold md:text-7xl text-[#1A1A1A]">
        The <span className="text-[#00A099]">EGTOS</span> Difference
      </h1>
      <p className="text-center pb-3 text-[#3D3D3D]">
        Enabling companies to rapidly scal consulting firms and independent{" "}
        <br /> experts scale while delivery value for both organizations,
      </p>
      <div className="max-w-[1440px] flex md:flex-row flex-col justify-between gap-4 mx-auto px-3 md:px-5">
        <div className="w-full pt-12  ">
          <h1 className="border text-[#475467] text-2xl font-semibold h-[77px] flex items-center rounded-xl px-4 border-[#51F7E480]">
            Clients
          </h1>
          <div className="w-full rounded-xl flex  justify-between border my-4 border-[#02AC9266] px-8 py-4">
            <div className="max-w-[283px] w-full">
              <div className="bg-[#EFFEFC] px-2 py-2 rounded-xl border border-[#1DE4D4]">
                <Image src={"/logo.svg"} width={150} height={44} alt="logo" />
              </div>
              <DiscountBadge
                label="Discounted"
                amount={"-60"}
                icon="/home/eg-1.png"
              />
              <DiscountBadge
                label="Flexible, Outcome Oriented"
                amount={""}
                icon="/home/eg-2.png"
              />
              <DiscountBadge
                label="Efficient (eg: no air travel, non-framework based)"
                amount={""}
                icon="/home/eg-3.png"
              />
              <DiscountBadge
                label="About You Not Us"
                amount={""}
                icon="/home/eg-4.png"
              />
              <DiscountBadge
                label="Specialists"
                amount={""}
                icon="/home/eg-5.png"
              />
              <DiscountBadge
                label="Seasoned Experts"
                amount={""}
                icon="/home/eg-6.png"
              />
            </div>
            <div>
              <p className="text-3xl py-2 font-semibold text-[#1A1A1A]">
                Traditionally
              </p>
              <p className="py-8 text-base font-normal text-[#475467]">Very Expensive</p>
              <p className="py-8 text-base font-normal text-[#475467]">Rigid Process</p>
              <p className="py-4 text-base font-normal text-[#475467]">Inefficient</p>
              <p className="py-8 text-base font-normal text-[#475467]">About Team Not You</p>
              <p className="py-8 text-base font-normal text-[#475467]">Generalists</p>
              <p className="py-8 text-base font-normal text-[#475467]">Junior People</p>
            </div>
          </div>
        </div>
        <div className="w-full pt-12  ">
          <h1 className="border text-[#475467] text-2xl font-semibold h-[77px] flex items-center rounded-xl px-4 border-[#51F7E480]">
            Independent
          </h1>
          <div className="w-full rounded-xl flex  justify-between border my-4 border-[#02AC9266] px-8 py-4">
            <div className="max-w-[283px] w-full">
              <div className="bg-[#EFFEFC] px-2 py-2 rounded-xl border border-[#1DE4D4]">
                <Image src={"/logo.svg"} width={150} height={44} alt="logo" />
              </div>
              <DiscountBadge
                label="Focus on their area of expertise"
                amount={""}
                icon="/home/ind-1.png"
              />
              <DiscountBadge
                label="Part of Senior Team"
                amount={""}
                icon="/home/ind-2.png"
              />
              <DiscountBadge
                label="Free to do their best work"
                amount={""}
                icon="/home/ind-3.png"
              />
              <DiscountBadge
                label="Flexibility around other commitments"
                amount={""}
                icon="/home/ind-4.png"
              />
              <DiscountBadge
                label="Higher Income"
                amount={""}
                icon="/home/ind-5.png"
              />
              <DiscountBadge
                label="Profit Sharing Partner in 12 Months"
                amount={""}
                icon="/home/ind-6.png"
              />
            </div>
            <div>
              <p className="text-3xl py-2 font-semibold text-[#1A1A1A]">
                Traditionally
              </p>
              <p className="py-8 text-base font-normal text-[#475467]">Boring work (outside of expertise)</p>
              <p className="py-8 text-base font-normal text-[#475467]">Inexperienced Colleagues</p>
              <p className="py-4 text-base font-normal text-[#475467]">Feel Like They’re in a Straight-jacket</p>
              <p className="py-8 text-base font-normal text-[#475467]">Inflexible, long hours and lots of travel</p>
              <p className="py-8 text-base font-normal text-[#475467]">Fixed Salary</p>
              <p className="py-8 text-base font-normal text-[#475467]">Slow Progression to Partner</p>
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
      className={`flex py-3 px-3 gap-3 items-center bg-[#F5FEFD] my-4 rounded-xl w-full ${className}`}
    >
      <div className="bg-white rounded-full px-2 py-2">
        <Image src={icon} width={18} height={18} alt="icon" />
      </div>
      <p className="text-2xl font-semibold text-[#1A1A1A]">{amount}</p>
      <p className="text-base font-medium text-[#181D27]">{label}</p>
    </div>
  );
};
