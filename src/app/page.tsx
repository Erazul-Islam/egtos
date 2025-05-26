import HowWorks from "@/components/custom/how-works";
import EgtosAdvantage from "@/components/home/advantage";
import Hero from "@/components/home/hero";
import StrategicBalance from "@/components/home/strategic-balance";


export default function Home() {
  return (
    <div>
      <Hero/>
      <EgtosAdvantage/>
      <StrategicBalance/>
      <HowWorks/>
    </div>
  );
}
