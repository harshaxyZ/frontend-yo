import React, { useState } from 'react';
import { useAppStore } from '../store';
import { Settings, User, Moon, Sun, Globe, History as HistoryIcon, HelpCircle, LogOut, CheckCircle2, ShieldCheck } from 'lucide-react';

export const Menu: React.FC = () => {
  const { theme, toggleTheme, profile, updateProfile, setScreen } = useAppStore();
  const [nameInput, setNameInput] = useState(profile.displayName);
  const [nativeLang, setNativeLang] = useState(profile.nativeLanguage);
  const [learningLang, setLearningLang] = useState(profile.learningLanguage);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({
      displayName: nameInput,
      nativeLanguage: nativeLang,
      learningLanguage: learningLang,
    });
    alert("Profile configurations updated!");
  };

  const handleUpgrade = () => {
    // Mock Razorpay integration trigger
    const options = {
      key: 'rzp_test_mockkey', // Mock Razorpay Key
      amount: 49900, // INR 499 in paise
      name: 'SAMVAD Premium',
      description: 'Monthly Conversational Subscription Pack',
      handler: function () {
        updateProfile({ subscriptionTier: 'premium' });
        alert("Subscription payment successful! Upgraded to Premium.");
      }
    };
    
    // Simulate Razorpay handler completion
    setTimeout(() => {
      options.handler();
    }, 1000);
  };

  return (
    <div className="w-full max-w-3xl mx-auto py-6 px-4 md:py-10 pb-24 md:pb-10 min-h-screen text-samvad-text-primary-light dark:text-samvad-text-primary-dark">
      <div className="grain-overlay" />

      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold tracking-tight">Settings & Profile</h2>
        <p className="text-sm text-samvad-text-secondary-light dark:text-samvad-text-secondary-dark mt-2">
          Configure on-device preferences, switch languages, or manage your subscription plan.
        </p>
      </div>

      {/* Premium Upgrading billing block */}
      <div className="mb-6 p-6 bg-gradient-to-br from-amber-50 to-amber-100/40 dark:from-zinc-900/50 dark:to-zinc-800/40 border border-amber-200/50 dark:border-zinc-800 rounded-2xl shadow-real">
        <div className="flex items-center space-x-2 text-samvad-tertiary mb-3">
          <ShieldCheck size={20} />
          <span className="text-xs font-black uppercase tracking-widest">Billing status</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-black tracking-tight">
              {profile.subscriptionTier === 'premium' ? 'Premium Member' : 'Free Tier'}
            </h3>
            <p className="text-xs text-samvad-text-secondary-light dark:text-samvad-text-secondary-dark mt-1 max-w-md leading-relaxed">
              {profile.subscriptionTier === 'premium'
                ? 'Thank you for supporting us! You have unlocked all cloud models, voice call modes, and deep evaluation notes.'
                : 'Free tier limits to 3 presets, on-device local engines only, text-only chat, and no cloud feedback.'}
            </p>
          </div>
          {profile.subscriptionTier === 'free' && (
            <button
              onClick={handleUpgrade}
              className="px-5 py-3 bg-samvad-tertiary hover:bg-amber-600 text-white font-extrabold text-xs rounded-xl flex items-center justify-center shadow-md active:scale-95 spring-transition whitespace-nowrap uppercase tracking-wider"
            >
              Unlock Premium for ₹499
            </button>
          )}
        </div>
      </div>

      {/* Profile form settings */}
      <div className="p-6 bg-samvad-card-light dark:bg-samvad-card-dark border border-gray-150/50 dark:border-zinc-800 rounded-2xl shadow-real mb-6">
        <div className="flex items-center space-x-2 text-samvad-primary mb-4">
          <User size={18} />
          <h3 className="font-extrabold text-sm uppercase tracking-wider">Account Information</h3>
        </div>

        <form onSubmit={handleSaveProfile} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-samvad-text-secondary-light mb-1.5">
              Display Name
            </label>
            <input
              type="text"
              required
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              className="w-full p-3 bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-850 rounded-xl text-sm font-medium focus:ring-2 focus:ring-samvad-primary/20"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-samvad-text-secondary-light mb-1.5">
                Native Language
              </label>
              <select
                value={nativeLang}
                onChange={(e) => setNativeLang(e.target.value as 'en' | 'kn')}
                className="w-full p-3 bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-850 rounded-xl text-sm font-medium focus:ring-2 focus:ring-samvad-primary/20"
              >
                <option value="en">English</option>
                <option value="kn">Kannada (ಕನ್ನಡ)</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-samvad-text-secondary-light mb-1.5">
                Learning Target Language
              </label>
              <select
                value={learningLang}
                onChange={(e) => setLearningLang(e.target.value as 'en' | 'kn')}
                className="w-full p-3 bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-850 rounded-xl text-sm font-medium focus:ring-2 focus:ring-samvad-primary/20"
              >
                <option value="kn">Kannada (ಕನ್ನಡ)</option>
                <option value="en">English</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="px-5 py-2.5 bg-samvad-primary hover:bg-samvad-primary/95 text-white font-extrabold text-xs rounded-xl shadow active:scale-95 transition-all uppercase tracking-wider"
          >
            Save Account Details
          </button>
        </form>
      </div>

      {/* Quick shortcuts and settings */}
      <div className="p-6 bg-samvad-card-light dark:bg-samvad-card-dark border border-gray-150/50 dark:border-zinc-800 rounded-2xl shadow-real mb-6 space-y-4">
        <div className="flex items-center space-x-2 text-samvad-secondary mb-2">
          <Settings size={18} />
          <h3 className="font-extrabold text-sm uppercase tracking-wider">Quick Configurations</h3>
        </div>

        {/* Dynamic theme toggle */}
        <div className="flex items-center justify-between py-2 border-b border-gray-50 dark:border-zinc-900">
          <div className="flex items-center space-x-3">
            {theme === 'dark' ? <Moon size={16} /> : <Sun size={16} />}
            <span className="text-sm font-semibold">Dark / Light Mode Toggle</span>
          </div>
          <button
            onClick={toggleTheme}
            className={`w-12 h-6.5 rounded-full p-1 transition-all ${
              theme === 'dark' ? 'bg-samvad-primary flex justify-end' : 'bg-gray-200 flex justify-start'
            }`}
          >
            <div className="w-4.5 h-4.5 rounded-full bg-white shadow-sm" />
          </button>
        </div>

        {/* History Redirect shortcut */}
        <button
          onClick={() => setScreen('History')}
          className="w-full flex items-center justify-between py-2 border-b border-gray-50 dark:border-zinc-900 text-left"
        >
          <div className="flex items-center space-x-3">
            <HistoryIcon size={16} />
            <span className="text-sm font-semibold">View Practice History</span>
          </div>
          <ChevronRightIcon />
        </button>

        {/* Help */}
        <div className="flex items-center justify-between py-2 border-b border-gray-50 dark:border-zinc-900">
          <div className="flex items-center space-x-3">
            <HelpCircle size={16} />
            <span className="text-sm font-semibold">FAQ & Support</span>
          </div>
          <span className="text-[10px] uppercase font-black tracking-wider text-samvad-text-secondary-light">docs</span>
        </div>

        {/* Log out */}
        <div className="flex items-center justify-between py-2 text-red-500 cursor-pointer hover:underline" onClick={() => setScreen('Splash')}>
          <div className="flex items-center space-x-3">
            <LogOut size={16} />
            <span className="text-sm font-semibold">Reset / Log Out</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ChevronRightIcon = () => (
  <svg className="w-4 h-4 text-samvad-text-secondary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
  </svg>
);
