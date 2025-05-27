import HowWorks from "@/components/custom/how-works";
import EgtosAdvantage from "@/components/home/advantage";
import Career from "@/components/home/careers";
import EgtosDifference from "@/components/home/egtos-difference";
import StrategicBalance from "@/components/home/strategic-balance";

export default function HomeContent() {
  return (
    <>
      <EgtosAdvantage/>
      <StrategicBalance/>
      <HowWorks/>
      <EgtosDifference/>
      <Career/>
    </>
  );
}