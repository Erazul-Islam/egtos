import HomePageContentSwitcher from '@/components/home/content-switcher';
import Hero from '@/components/home/hero';

import { TabProvider } from '@/context/tab-context';

export default function Home() {
  return (
    <TabProvider>
      <div>
        <Hero />
        <HomePageContentSwitcher />
      </div>
    </TabProvider>
  );
}