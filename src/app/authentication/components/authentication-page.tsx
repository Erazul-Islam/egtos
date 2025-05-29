import React from "react";

const AuthenticationCompo: React.FC<{
  image: React.ReactNode;
  heading: string;
  details: React.ReactNode;
  content: React.ReactNode;
}> = ({ heading, details, content, image }) => {
  return (
    <div className="min-h-screen flex md:flex-row flex-col">
      <div className="bg-[#F2F4F7] order-2 md:order-1 lg:max-w-[548px] w-full flex flex-col justify-between items-center p-4">
        <div className="flex-1 px-4 md:px-0 flex items-center justify-center">
          {image}
        </div>
        <div className=" px-4 md:px-0 pb-6">
          <p className="text-[#00A099] max-w-[380px] font-semibold text-2xl">
            {heading}
          </p>
          {details}
        </div>
      </div>
      {content}
    </div>
  );
};

export default AuthenticationCompo;
