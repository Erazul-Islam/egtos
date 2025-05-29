import React from "react";

const SignInHeading: React.FC<{ className?: string; value: string }> = ({
  className,
  value,
}) => {
  return <div className={`${className} font-semibold text-2xl mt-5 text-[#000000]`}>{value}</div>;
};

export default SignInHeading;
