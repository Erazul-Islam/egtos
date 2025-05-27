'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type TabContent = {
  id: string;
  label: string;
  video: string;
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
      id: 'default',
      label: 'Default',
      video: '/home/hero.mp4',
      title: (
        <>
          <span className="text-[#00A099]">Dynamic</span> Teams. Experts Only.{' '}
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
      id: 'capacity',
      label: 'Capacity Trading Partners',
      video: '/home/hero.mp4',
      title: (
        <>
          <span className="text-[#00A099]">Capacity</span> Trading Partners
        </>
      ),
      subtitle: 'Subtitle for Capacity Trading Partners',
    },
    consulting: {
      id: 'consulting',
      label: 'Consulting Firms',
      video: '/home/hero.mp4',
      title: (
        <>
          <span className="text-[#00A099]">Consulting</span> Firms Network
        </>
      ),
      subtitle: 'Subtitle for Consulting Firms',
    },
    specialists: {
      id: 'specialists',
      label: 'Independent Specialists',
      video: '/home/hero.mp4',
      title: (
        <>
          <span className="text-[#00A099]">Independent</span> Specialists Hub
        </>
      ),
      subtitle: 'Subtitle for Independent Specialists',
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
    throw new Error('useTabContext must be used within a TabProvider');
  }
  return context;
}