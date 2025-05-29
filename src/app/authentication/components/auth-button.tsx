import Link from "next/link";
import React from "react";

const AuthButton: React.FC<{
  className?: string;
  href?: string | undefined;
  value: string;
}> = ({ className, href, value }) => {
  return (
    <button className={` cursor-pointer bg-[#00A099] rounded-xl py-2 px-3 ${className}`}>
      {href ? <Link href={href}>{value}</Link> : <span className="text-white font-semibold text-xl">{value}</span>}
    </button>
  );
};

export default AuthButton;
