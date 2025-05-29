import Link from "next/link";
import React from "react";

const AuthButton: React.FC<{
  className?: string;
  href?: string | undefined;
  value: string;
  onClick? : () => void
}> = ({ className, href, value, onClick }) => {
  return (
    <button onClick={onClick} className={` cursor-pointer bg-[#00A099] rounded-xl py-2 px-3 ${className}`}>
      {href ? <Link className="text-white font-semibold text-xl" href={href}>{value}</Link> : <span className="text-white font-semibold text-xl">{value}</span>}
    </button>
  );
};

export default AuthButton;
