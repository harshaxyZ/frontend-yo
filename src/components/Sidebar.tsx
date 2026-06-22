import React from 'react';
import { useAppStore } from '../store';
import { Compass, MessageSquare, History, User, Moon, Sun, ShieldCheck } from 'lucide-react';

export const Sidebar: React.FC = () => {
  const { currentScreen, setScreen, theme, toggleTheme, profile } = useAppStore();

  const navItems = [
    { id: 'Categories', label: 'Discover Scenarios', icon: Compass },
    { id: 'Home', label: 'Practice Lounge', icon: MessageSquare },
    { id: 'History', label: 'Conversation History', icon: History },
    { id: 'Menu', label: 'Profile & Settings', icon: User },
  ];

  const getActiveTab = () => {
    if (['Categories', 'ScenariosGrid', 'ScenarioDetail'].includes(currentScreen)) {
      return 'Categories';
    }
    if (['Home', 'Chat', 'AudioCall'].includes(currentScreen)) {
      return 'Home';
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

  // Hide sidebar on Splash, Onboarding, Chat, and AudioCall screens
  if (['Splash', 'Onboarding', 'Chat', 'AudioCall'].includes(currentScreen)) {
    return null;
  }

  return (
    <div className="hidden md:flex flex-col w-64 lg:w-72 bg-samvad-card-light dark:bg-samvad-card-dark border-r border-gray-100 dark:border-zinc-900 min-h-screen p-6 fixed left-0 top-0 bottom-0 z-40 transition-colors duration-500 shadow-sm justify-between">
      {/* Top Logo & Branding */}
      <div className="flex flex-col">
        <div className="flex items-center space-x-3 mb-10 cursor-pointer" onClick={() => setScreen('Home')}>
          <div className="relative w-10 h-8 flex items-center justify-center">
            <div className="absolute left-1 top-0 w-6 h-6 bg-samvad-brand-lavender rounded-xl rounded-bl-none flex items-center justify-center shadow-sm text-[10px] font-bold text-white">ಕ</div>
            <div className="absolute right-1 bottom-0 w-6 h-6 bg-samvad-brand-skyblue rounded-xl rounded-tr-none flex items-center justify-center shadow-sm text-[10px] font-bold text-samvad-text-primary-light">A</div>
          </div>
          <span className="font-extrabold text-xl tracking-tight text-samvad-text-primary-light dark:text-samvad-text-primary-dark">
            SAMVAD
          </span>
        </div>

        {/* Navigation Items */}
        <nav className="flex flex-col space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setScreen(item.id)}
                className={`flex items-center space-x-4 px-4 py-3.5 rounded-xl font-bold text-sm tracking-wide spring-transition text-left ${
                  isActive
                    ? 'bg-samvad-primary/10 text-samvad-primary'
                    : 'text-samvad-text-secondary-light dark:text-samvad-text-secondary-dark hover:bg-gray-50 dark:hover:bg-zinc-800/50 hover:text-samvad-text-primary-light dark:hover:text-samvad-text-primary-dark'
                }`}
              >
                <Icon size={18} className={isActive ? 'text-samvad-primary' : ''} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom Settings & Premium Upgrade */}
      <div className="flex flex-col space-y-6">
        
        {/* Premium Upgrade Card */}
        {profile.subscriptionTier === 'free' && (
          <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 dark:from-zinc-900/50 dark:to-zinc-800/30 border border-amber-200/50 dark:border-zinc-800 p-4 rounded-xl shadow-sm">
            <div className="flex items-center space-x-2 text-samvad-tertiary">
              <ShieldCheck size={18} />
              <span className="text-xs font-extrabold uppercase tracking-wider">Premium Access</span>
            </div>
            <h4 className="font-bold text-xs mt-2 leading-snug">Unlock Cloud AI Models & Voice Call Modes</h4>
            <p className="text-[10px] text-samvad-text-secondary-light dark:text-samvad-text-secondary-dark mt-1">
              Gain native speech practice and advanced analysis reports.
            </p>
            <button
              onClick={() => {
                setScreen('Menu'); // Will highlight upgrade options
              }}
              className="w-full mt-3 py-2 bg-samvad-tertiary text-white text-xs font-extrabold rounded-lg hover:shadow-md transition active:scale-95"
            >
              Upgrade Now
            </button>
          </div>
        )}

        {/* Theme and User Profile Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-zinc-900">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-samvad-primary/10 border border-samvad-primary/20 flex items-center justify-center text-samvad-primary font-bold">
              {profile.displayName.substring(0, 2).toUpperCase()}
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xs truncate max-w-[100px]">{profile.displayName}</span>
              <span className="text-[10px] text-samvad-text-secondary-light dark:text-samvad-text-secondary-dark uppercase font-extrabold tracking-wider">
                {profile.subscriptionTier} tier
              </span>
            </div>
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-50 dark:bg-zinc-800/50 hover:bg-gray-100 dark:hover:bg-zinc-800 border border-gray-200/30 dark:border-zinc-800 spring-transition text-samvad-primary"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

      </div>
    </div>
  );
};
