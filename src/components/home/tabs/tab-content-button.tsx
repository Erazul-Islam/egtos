import Link from "next/link";
import React from "react";

const TabContentButton: React.FC<{ value: string; href: string }> = ({
  value,
  href,
}) => {
  return (
    <button className="bg-[#00A099] text-white cursor-pointer rounded-full px-5 shadow-[0px_-2px_1px_0px_#0C19282E_inset,0px_7px_15px_-3px_#647C9933,0px_2px_4px_0px_#647C994D,0px_2px_1px_0px_#FFFFFF1A_inset] transition duration-200 hover:brightness-105 active:brightness-95 py-4 font-medium text-[16px]">
      <Link href={href}>{value}</Link>
    </button>
  );
};

export default TabContentButton;
