"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type TabContent = {
  id: string;
  label: string;
  video: string;
  image: string;
  title: ReactNode;
  subtitle: ReactNode;
};

type TabContextType = {
  activeTab: string | null;
  setActiveTab: (tab: string | null) => void;
  tabs: Record<string, TabContent>;
};

const TabContext = createContext<TabContextType | undefined>(undefined);

export function TabProvider({ children }: { children: ReactNode }) {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const tabs = {
    default: {
      id: "default",
      label: "Default",
      video: "/home/hero.mp4",
      image: "/home/hero-1.png",
      title: (
        <>
          <span className="text-[#00A099]">Dynamic</span> Teams. <br /> Experts
          Only.
          <span className="text-[#00A099]">Global</span> Reach
        </>
      ),
      subtitle: (
        <>
          The Intelligent Marketplace for Talent Acquisition Avoid hiring
          <br />
          costs and layoffs by trading talent within a trusted network
        </>
      ),
    },
    capacity: {
      id: "capacity",
      label: "Capacity Trading Partners",
      video: "/home/hero.mp4",
      image: "/home/hero-2.png",
      title: (
        <>
          <span className="text-[#00A099]">Smarter</span> Talent <br />{" "}
          Management for <br /> Modern{" "}
          <span className="text-[#00A099]">Companies</span>
        </>
      ),
      subtitle: (
        <>
          Cut Hiring Costs. Retain Talent. Build Stronger Teams <br />
          Trade excess capacity and tap into global expertise—without layoffs
        </>
      ),
    },
    consulting: {
      id: "consulting",
      label: "Consulting Firms",
      video: "/home/hero.mp4",
      image: "/home/hero-3.png",
      title: (
        <>
          <span className="text-[#00A099]">Unlock</span> New <br />{" "}
          <span className="text-[#00A099]">Revenue</span> with Your <br /> Bench{" "}
          <span className="text-[#00A099]">Strength</span>
        </>
      ),
      subtitle: (
        <>
          <span>Monetize Idle Resources & Win More Clients</span> <br />
          Use EGTOS to earn tokens and expand your delivery capability
        </>
      ),
    },
    specialists: {
      id: "specialists",
      label: "Independent Specialists",
      video: "/home/hero.mp4",
      image: "/home/hero-4.png",
      title: (
        <>
          <span className="text-[#00A099]"> Earn </span> More. <br /> Work on
          What <br /> You Love.
        </>
      ),
      subtitle: (
        <>
          <span>Your Skills Deserve Better Projects—and Better Pay</span> <br />
          join a premium network where your expertise is valued
        </>
      ),
    },
  };

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab, tabs }}>
      {children}
    </TabContext.Provider>
  );
}

export function useTabContext() {
  const context = useContext(TabContext);
  if (context === undefined) {
    throw new Error("useTabContext must be used within a TabProvider");
  }
  return context;
}
