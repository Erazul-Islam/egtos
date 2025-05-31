import AuthenticationCompo from "@/app/authentication/components/authentication-page";
import Image from "next/image";
import React from "react";
import CertificateContent from "./certificate-content";

const Certificate = () => {
  return (
    <AuthenticationCompo
      content={<CertificateContent />}
      image={
        <Image
          src={"/independent/certificate.png"}
          width={417}
          height={467}
          alt=""
        />
      }
      details="Just verify your email to enter a world of possibilities"
      heading="One step closer to something great."
    />
  );
};

export default Certificate;
