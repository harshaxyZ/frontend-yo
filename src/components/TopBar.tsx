import React from 'react';
import { useAppStore } from '../store';
import { Menu, Bell, ArrowLeft, Moon } from 'lucide-react';

export const TopBar: React.FC = () => {
  const { currentScreen, popScreen, pushScreen } = useAppStore();

  if (['Splash', 'Onboarding'].includes(currentScreen)) {
    return null;
  }

  const isTopLevelScreen = ['Home', 'Categories', 'History', 'Menu'].includes(currentScreen);

  // Customize for Home screen (Discover tab) to match home page.png exactly
  if (currentScreen === 'Home') {
    return (
      <header className="absolute top-0 left-0 right-0 z-40 bg-[#FAFAF8]/95 px-5 h-16 flex items-center justify-between pointer-events-auto">
        <button
          onClick={() => pushScreen('Menu')}
          className="p-2 -ml-2 text-[#0F1E36] active:scale-95 transition-all"
          aria-label="Menu"
        >
          <Menu size={22} strokeWidth={2.5} />
        </button>
        <button
          className="p-2 -mr-2 text-[#0F1E36] relative active:scale-95 transition-all"
          aria-label="Notifications"
        >
          <Bell size={22} strokeWidth={2.2} />
          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#FF497C] border border-white" />
        </button>
      </header>
    );
  }

  const getScreenTitle = () => {
    switch (currentScreen) {
      case 'Categories':
        return 'Practice';
      case 'History':
        return 'History';
      case 'Menu':
        return 'Profile';
      case 'ScenariosGrid':
        return 'Scenarios';
      case 'ScenarioDetail':
        return 'Details';
      case 'Chat':
        return 'Practice';
      case 'AudioCall':
        return 'Call Practice';
      case 'Analysis':
        return 'Performance';
      default:
        return 'Discover';
    }
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-40 bg-[#FAFAF8]/90 backdrop-blur-md px-4 h-16 flex items-center justify-between border-b-0 shadow-none">
      {/* Left button: Hamburger or Back arrow */}
      <div className="flex items-center w-10">
        {isTopLevelScreen ? (
          <button
            onClick={() => pushScreen('Menu')}
            className="p-2 -ml-2 rounded-xl text-[#0F1E36] hover:bg-gray-100/50 active:scale-95 transition-all"
            aria-label="Menu"
          >
            <Menu size={22} strokeWidth={2.5} />
          </button>
        ) : (
          <button
            onClick={popScreen}
            className="p-2 -ml-2 rounded-xl text-[#0F1E36] hover:bg-gray-100/50 active:scale-95 transition-all"
            aria-label="Back"
          >
            <ArrowLeft size={22} strokeWidth={2.5} />
          </button>
        )}
      </div>

      {/* Center title in bold geometric font */}
      <div className="flex-1 text-center">
        <h1 className="text-sm font-black tracking-tight text-[#0F1E36] font-sans">
          {getScreenTitle()}
        </h1>
      </div>

      {/* Right button: Moon icon */}
      <div className="flex items-center justify-end w-10">
        <button
          className="p-2 -mr-2 rounded-xl text-[#0F1E36] hover:bg-gray-100/50 active:scale-95 transition-all"
          aria-label="Theme toggle"
        >
          <Moon size={20} strokeWidth={2.5} />
        </button>
      </div>
    </header>
  );
};

export default TopBar;

