'use client';


import { useTabContext } from '@/context/tab-context';
import HomeContent from './home-content';

function CapacityTradingContent() {
  return <div>Capacity Trading Partners Content</div>;
}

function ConsultingFirmsContent() {
  return <div>Consulting Firms Content</div>;
}

function IndependentSpecialistsContent() {
  return <div>Independent Specialists Content</div>;
}

export default function HomePageContentSwitcher() {
  const { activeTab } = useTabContext();
  
  return (
    <>
      {!activeTab || activeTab === 'default' ? (
        <HomeContent />
      ) : (
        <div className="max-w-7xl mx-auto px-4 py-12">
          {activeTab === 'capacity' && <CapacityTradingContent />}
          {activeTab === 'consulting' && <ConsultingFirmsContent />}
          {activeTab === 'specialists' && <IndependentSpecialistsContent />}
        </div>
      )}
    </>
  );
}