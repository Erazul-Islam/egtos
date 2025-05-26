import React from "react";

interface HeadingButtonProps {
  value: React.ReactNode;

}

const HeadingButton : React.FC<HeadingButtonProps> = ({ value }) => {
  return (
    <button className="px-3 rounded-full bg-[#F2F4F7] border border-[#EFFEFC]  text-[18px] text-[#475467] py-2">
      {value}
    </button>
  );
};

export default HeadingButton;
