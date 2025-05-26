import React from "react";

interface EgtosButtonProps {
  value: React.ReactNode;
  className?: string;
}

const EgtosButton: React.FC<EgtosButtonProps> = ({ value, className = "" }) => {
  return (
    <button
      className={`bg-[#00A099] ${className} text-[16px] cursor-pointer font-medium text-white  px-6 py-3 rounded-2xl shadow-[0px_-2px_1px_0px_#0C19282E_inset,0px_7px_15px_-3px_#647C9933,0px_2px_4px_0px_#647C994D,0px_2px_1px_0px_#FFFFFF1A_inset] transition duration-200 hover:brightness-105 active:brightness-95`}
    >
      {value}
    </button>
  );
};

export default EgtosButton;
