import HeadingButton from "@/components/custom/heading-button";
import HeadingDetails from "@/components/custom/heading-details";
import React from "react";
import EgtpsBenefitCard from "./egtos-benefit-card";

const EgtosBenifit = () => {
  return (
    <div className="max-w-[1440px] px-3 md:px-5 mx-auto">
      <div className="text-center flex flex-col items-center">
        <div className="mt-10 md:mt-0">
            <HeadingButton value="Explore the Benefits" />
        </div>
        <h1 className="text-[#1A1A1A] pt-5 md:pt-10 text-3xl md:text-6xl font-semibold">
          The EGTOS Advantage
        </h1>
        <HeadingDetails
          className="max-w-[771px] md:py-8 w-full text-center mx-auto"
          value="Unlock the hidden potential within your organization by transforming underutilized employee time into a valuable asset. EGTOS delivers seamless capacity sharing, ensuring your skilled workforce is always contributing, driving productivity, and maximizing your return on investment."
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        <EgtpsBenefitCard
          details=" Unlock the hidden potential within your organization by transforming
            underutilized employee time into a valuable asset. EGTOS delivers
            seamless capacity sharing, ensuring your skilled workforce is always
            contributing, driving productivity, and maximizing your return on
            investment."
          heading=" Optimized Resource Use"
          image="/how/benefit-1.png"
        />
        <EgtpsBenefitCard
          details="Adapt to evolving project needs with unparalleled speed and flexibility by assembling expert teams on demand. EGTOS enables you to quickly combine internal resources with external specialists, creating high-performance teams tailored precisely to your requirements."
          heading="Build Agile Teams"
          image="/how/benefit-2.png"
        />
        <EgtpsBenefitCard
          details="Substantially lower your recruitment and consulting expenditures by using EGTOS' innovative platform. Access the expertise you need through strategic capacity trading and direct connections, eliminating the hefty fees associated with traditional talent acquisition methods."
          heading="Reduced Costs"
          image="/how/benefit-3.png"
        />
        <EgtpsBenefitCard
          details="Eliminate lengthy hiring processes and gain immediate access to a diverse pool of pre-vetted experts across various domains. EGTOS enables rapid onboarding, ensuring you have the right skills at your fingertips precisely when your project requires them."
          heading="Access Specialized Talent Instantly"
          image="/how/benefit-4.png"
        />
        <EgtpsBenefitCard
          details="Strengthen the bonds within your professional ecosystem by actively engaging with your network. EGTOS encourages collaborative talent exchange, building mutually beneficial relationships and improving overall industry resilience and growth."
          heading="Nurture Collaboration"
          image="/how/benefit-5.png"
        />
        <EgtpsBenefitCard
          details="Safeguard your workforce by strategically reassigning talent within your trusted network. EGTOS provides the tools needed to redeploy employees facing temporary lulls, creating a stable work environment that preserves vital industry knowledge."
          heading="Prevent Layoffs"
          image="/how/benefit-6.png"
        />
      </div>
    </div>
  );
};

export default EgtosBenifit;
