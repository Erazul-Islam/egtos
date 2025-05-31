import AuthenticationCompo from "@/app/authentication/components/authentication-page";
import Image from "next/image";
import React from "react";
import ProfessionContent from "./profession-content";

const Profession = () => {
  return (
    <AuthenticationCompo
      content={<ProfessionContent />}
      image={
        <Image
          src={"/independent/profession.png"}
          width={437}
          height={497}
          alt=""
        />
      }
      details="Just verify your email to enter a world of possibilities"
      heading="One step closer to something great."
    />
  );
};

export default Profession;
