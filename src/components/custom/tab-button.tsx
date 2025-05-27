import React from "react";

interface EgtosButtonProps {
  value: React.ReactNode;
  className?: string;
}

const TabButton: React.FC<EgtosButtonProps> = ({ value, className = "" }) => {
  return (
    <button
      className={`bg-gradient to-[#F9FAFB] from-[#FFFFFF] ${className} text-[16px] cursor-pointer font-medium text-[#1A1A1A]  px-6 py-3 rounded-xl shadow-[0px_-2px_1px_0px_#0C19282E_inset,0px_7px_15px_-3px_#647C9933,0px_2px_4px_0px_#647C994D,0px_2px_1px_0px_#FFFFFF1A_inset] transition duration-200 hover:brightness-105 active:brightness-95`}
    >
      {value}
    </button>
  );
};

export default TabButton;