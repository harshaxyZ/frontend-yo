import React, { useEffect } from 'react';
import { useAppStore } from './store';
import { TopBar } from './components/TopBar';
import { BottomNav } from './components/BottomNav';

// Screen Imports
import { Splash } from './screens/Splash';
import { Onboarding } from './screens/Onboarding';
import { Home } from './screens/Home';
import { Categories } from './screens/Categories';
import { ScenariosGrid } from './screens/ScenariosGrid';
import { ScenarioDetail } from './screens/ScenarioDetail';
import { Chat } from './screens/Chat';
import { AudioCall } from './screens/AudioCall';
import { Analysis } from './screens/Analysis';
import { History } from './screens/History';
import { Menu } from './screens/Menu';

import { AnimatePresence, motion } from 'framer-motion';

export const App: React.FC = () => {
  const { currentScreen } = useAppStore();

  // Force body background to warm ivory light theme
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('dark');
    root.style.backgroundColor = '#EAEAE6'; // Outer container page background for desktop
  }, []);

  // Screen router rendering logic
  const renderScreen = () => {
    switch (currentScreen) {
      case 'Splash':
        return <Splash />;
      case 'Onboarding':
        return <Onboarding />;
      case 'Home':
        return <Home />;
      case 'Categories':
        return <Categories />;
      case 'ScenariosGrid':
        return <ScenariosGrid />;
      case 'ScenarioDetail':
        return <ScenarioDetail />;
      case 'Chat':
        return <Chat />;
      case 'AudioCall':
        return <AudioCall />;
      case 'Analysis':
        return <Analysis />;
      case 'History':
        return <History />;
      case 'Menu':
        return <Menu />;
      default:
        return <Home />;
    }
  };

  const isFullscreenView = ['Splash', 'Onboarding', 'Chat', 'AudioCall'].includes(currentScreen);

  return (
    <div className="min-h-screen w-full bg-[#EAEAE6] flex items-center justify-center p-0 sm:p-4 overflow-hidden font-sans select-none">
      {/* Background grain element */}
      <div className="grain-overlay" />

      {/* Centered Phone Viewport Device Frame */}
      <div className="w-full max-w-[420px] min-h-screen sm:min-h-[850px] sm:max-h-[900px] sm:rounded-[36px] bg-[#FAFAF8] shadow-[0_24px_50px_-12px_rgba(0,0,0,0.15)] border-x sm:border border-[#E2E2DF] relative flex flex-col overflow-hidden">
        
        {/* Mobile Header (Floating on top) */}
        {!isFullscreenView && <TopBar />}

        {/* Content wrapper with transition container */}
        <main className={`flex-1 flex flex-col overflow-y-auto no-scrollbar ${
          currentScreen === 'Onboarding' ? 'pt-0 pb-16' : !isFullscreenView ? 'pt-16 pb-20' : ''
        }`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentScreen}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="flex-1 flex flex-col"
            >
              {renderScreen()}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Mobile bottom navs */}
        {(!isFullscreenView || currentScreen === 'Onboarding') && <BottomNav />}

      </div>
    </div>
  );
};

export default App;

