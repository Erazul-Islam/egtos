"use client";
import { useTabContext } from "@/context/tab-context";
import HomeContent from "./home-content";
import ConsultingFirmsContent from "./tabs/consulting/constulting-firms-content";
import Capacity from "./tabs/capacity-tranding/capacity";
import IndependentContent from "./tabs/independent/independent-content";

export default function HomePageContentSwitcher() {
  const { activeTab } = useTabContext();

  return (
    <>
      {!activeTab || activeTab === "default" ? (
        <HomeContent />
      ) : (
        <div className="py-12">
          {activeTab === "capacity" && <Capacity />}
          {activeTab === "consulting" && <ConsultingFirmsContent />}
          {activeTab === "specialists" && <IndependentContent />}
        </div>
      )}
    </>
  );
}
