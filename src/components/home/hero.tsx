"use client";
import { useTabContext } from "@/context/tab-context";
import Image from "next/image";

export default function Hero() {
  const { activeTab, setActiveTab, tabs } = useTabContext();

  const currentTab = activeTab ? tabs[activeTab] : tabs.default;

  return (
    <div className="relative w-full md:mt-4">
      <video
        className="w-full md:h-[795px] h-[90vh] object-cover"
        autoPlay
        muted
        loop
        playsInline
        src={currentTab.video}
        key={currentTab.video}
      />
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(104.07deg, 
          rgba(228, 255, 254, 0.608) 5.5%, 
          rgba(255, 255, 255, 0.95) 20.46%, 
          rgba(242, 246, 255, 0.703) 35.08%, 
          rgba(236, 255, 254, 0.7125) 43.38%, 
          rgba(241, 255, 254, 0.95) 66.09%, 
          rgba(240, 255, 254, 0.896516) 66.4%, 
          rgba(239, 248, 255, 0.798) 85.8%, 
          rgba(255, 255, 255, 0.95) 95.56%)`,
        }}
      >
        <div className="max-w-[1440px] lg:py-40 md:py-20 mx-auto px-3 md:px-5">
          <div className="flex md:flex-row flex-col items-center justify-between">
            <div className="">
              <p className="text-[#1A1A1A] md:pt-0 pt-6 md:leading-[100px] text-3xl md:text-7xl font-semibold">
                {currentTab.title}
              </p>
              <p className="text-[#344054] py-4 font-normal text-base">
                {currentTab.subtitle}
              </p>
            </div>
            <Image src={"/home/hero-1.png"} width={620} height={416} alt="" />
          </div>
          <div className="flex gap-4 md:flex-row flex-col">
            <button
              className={`w-[249px] rounded-xl shadow-[0px_-2px_1px_0px_#0C19282E_inset,0px_7px_15px_-3px_#647C9933,0px_2px_4px_0px_#647C994D,0px_2px_1px_0px_#FFFFFF1A_inset] transition duration-200 hover:brightness-105 active:brightness-95 py-3  ${
                activeTab === "capacity" ? "bg-[#00A099] text-white" : "bg-[#F7F7F7]"
              }`}
              onClick={() =>
                setActiveTab(activeTab === "capacity" ? null : "capacity")
              }
            >
              Capacity Trading Partners
            </button>
            <button
              className={`w-[177px] rounded-xl shadow-[0px_-2px_1px_0px_#0C19282E_inset,0px_7px_15px_-3px_#647C9933,0px_2px_4px_0px_#647C994D,0px_2px_1px_0px_#FFFFFF1A_inset] transition duration-200 hover:brightness-105 active:brightness-95 py-3 ${
                activeTab === "consulting" ? "bg-[#00A099] text-white" : "bg-[#F7F7F7] text-black"
              }`}
              onClick={() =>
                setActiveTab(activeTab === "consulting" ? null : "consulting")
              }
            >
              Consulting Firms
            </button>
            <button
              className={`w-[230px] rounded-xl shadow-[0px_-2px_1px_0px_#0C19282E_inset,0px_7px_15px_-3px_#647C9933,0px_2px_4px_0px_#647C994D,0px_2px_1px_0px_#FFFFFF1A_inset] transition duration-200 hover:brightness-105 active:brightness-95 py-3 ${
                activeTab === "specialists" ? "bg-[#00A099] text-white" : "bg-[#F7F7F7]"
              }`}
              onClick={() =>
                setActiveTab(activeTab === "specialists" ? null : "specialists")
              }
            >
              Independent Specialists
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
