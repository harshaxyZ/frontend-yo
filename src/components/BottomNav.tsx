import React from 'react';
import { useAppStore } from '../store';
import { Compass, Target, Clock, User } from 'lucide-react';

export const BottomNav: React.FC = () => {
  const { currentScreen, setScreen } = useAppStore();

  const navItems = [
    { id: 'Home', label: 'Discover', icon: Compass },
    { id: 'Categories', label: 'Practice', icon: Target },
    { id: 'History', label: 'History', icon: Clock },
    { id: 'Menu', label: 'Profile', icon: User },
  ];

  // Map sub-screens to main nav items for active state highlighting
  const getActiveTab = () => {
    if (['Home'].includes(currentScreen)) {
      return 'Home';
    }
    if (['Categories', 'ScenariosGrid', 'ScenarioDetail', 'Chat', 'AudioCall'].includes(currentScreen)) {
      return 'Categories';
    }
    if (['Analysis', 'History'].includes(currentScreen)) {
      return 'History';
    }
    if (currentScreen === 'Menu') {
      return 'Menu';
    }
    return 'Home';
  };

  const activeTab = getActiveTab();

  // Hide bottom nav on Splash, Chat, and AudioCall screens
  if (['Splash', 'Chat', 'AudioCall'].includes(currentScreen)) {
    return null;
  }


  return (
    <div className="absolute bottom-0 left-0 right-0 z-40 bg-white shadow-[0_-8px_30px_rgba(0,0,0,0.06)] rounded-t-[24px] border-t border-[#F0F0ED] pb-safe transition-colors duration-300">
      <div className="flex justify-around items-center h-16 px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setScreen(item.id)}
              className="flex flex-col items-center justify-center w-20 h-full relative"
            >
              <div className={`transition-all duration-300 flex flex-col items-center justify-center ${
                isActive 
                  ? 'text-[#FF6B6B] scale-105' 
                  : 'text-gray-400'
              }`}>
                <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                <span className={`text-[10px] font-bold tracking-wide mt-1 ${
                  isActive 
                    ? 'text-[#FF6B6B]' 
                    : 'text-[#9CA3AF]'
                }`}>
                  {item.label}
                </span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B6B] mt-0.5" />
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;

