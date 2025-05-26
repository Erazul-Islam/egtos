import React from "react";

interface HeadingDetailsProps {
  value: React.ReactNode;
  className?: string;
}

const HeadingDetails: React.FC<HeadingDetailsProps> = ({
  value,
  className = "",
}) => {
  return (
    <p className={`${className} text-[#344054] py-4 font-normal text-sm md:text-base`}>
      {value}
    </p>
  );
};

export default HeadingDetails;
