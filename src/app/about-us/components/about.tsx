import React from "react";
import AboutHero from "./about-hero";
import EgtosModel from "./egtos-model";
import EgtosSolution from "./egtos-solution";
import AboutFooter from "./about-footer";

const About = () => {
  return (
    <div>
      <AboutHero />
      <div className="px-3 md:px-5 max-w-[1440px] mx-auto">
        <EgtosModel />
      </div>
      <EgtosSolution />
      <AboutFooter/>
    </div>
  );
};

export default About;
