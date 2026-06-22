import React, { useState } from 'react';
import { useAppStore } from '../store';
import { Search, Flame, Clock, Mic, MessageSquare, Compass, Briefcase, Utensils, AlertTriangle, ArrowRight, Play } from 'lucide-react';
import { CoffeeIllustration, AutoIllustration, DosaIllustration } from '../components/Illustrations';

export const RenderScenarioIllustration: React.FC<{ id: string }> = ({ id }) => {
  switch (id) {
    case 'scen-coffee':
      return <CoffeeIllustration />;
    case 'scen-auto':
      return <AutoIllustration />;
    case 'scen-dosa':
    default:
      return <DosaIllustration />;
  }
};

export const Home: React.FC = () => {
  const { profile, scenarios, setScreen, setActiveScenario } = useAppStore();
  const [activeCategory, setActiveCategory] = useState('cat-daily');
  const [searchQuery, setSearchQuery] = useState('');

  const handleStartPractice = () => {
    setScreen('Categories');
  };

  const handleScenarioClick = (scen: typeof scenarios[0]) => {
    setActiveScenario(scen);
    setScreen('ScenarioDetail');
  };

  const trendingScenarios = scenarios.filter(s => ['scen-coffee', 'scen-auto', 'scen-dosa'].includes(s.id));
  const lastActiveScenario = scenarios[0]; // Order filter coffee in Indiranagar

  return (
    <div className="flex-1 flex flex-col bg-[#FAFAF8] text-[#0F1E36] overflow-y-auto no-scrollbar pb-24">
      {/* Background Grain */}
      <div className="grain-overlay" />

      {/* Main Content Area with safe spacing */}
      <div className="px-5 py-4 space-y-6">

        {/* 1. Hero Greeting Section */}
        <div className="relative pt-1 flex justify-between items-start gap-4">
          {/* Left Side: Greeting and CTA */}
          <div className="flex-1 z-10">
            <span className="text-[11px] font-black uppercase tracking-widest text-gray-400">Good morning,</span>
            
            {/* Underlined Username */}
            <div className="relative inline-block mt-0.5 mb-5">
              <h2 className="text-4xl font-black tracking-tight text-[#0F1E36]">
                {profile.displayName}
              </h2>
              <div className="absolute left-0 right-0 bottom-[-4px] h-[3px] bg-[#FF6B6B] rounded-full" />
            </div>

            {/* Tagline */}
            <h3 className="text-[22px] font-black tracking-tight leading-tight max-w-[240px]">
              Become a better <span className="text-[#FF6B6B]">communicator</span>, one conversation at a time.
            </h3>
            
            {/* Subtitle */}
            <p className="text-[11px] font-semibold text-gray-400 mt-2 max-w-[220px] leading-relaxed">
              Practice real conversations with AI roleplays designed to build your confidence.
            </p>

            {/* CTA Button */}
            <button
              onClick={handleStartPractice}
              className="mt-4 px-5 py-3.5 bg-[#FF6B6B] hover:bg-[#FF5C5C] text-white text-xs font-black rounded-full flex items-center justify-center shadow-[0_8px_20px_rgba(255,107,107,0.25)] transition-all active:scale-95 uppercase tracking-widest"
            >
              <span>Start practicing</span>
              <ArrowRight size={13} className="ml-1.5" strokeWidth={3} />
            </button>
          </div>

          {/* Right Side: Decorative Dotted Line & Floating Icons */}
          <div className="relative w-28 h-40 flex-shrink-0 select-none">
            {/* Dashed curved line */}
            <svg className="absolute inset-0 w-full h-full text-[#FF6B6B]/25 pointer-events-none" fill="none">
              <path d="M10,130 Q70,95 40,30 T100,10" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" />
            </svg>

            {/* Floating Message Icon */}
            <div className="absolute left-1 bottom-4 p-2 bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.03)] border border-[#EAEAE6] text-[#FF6B6B]">
              <MessageSquare size={16} strokeWidth={2.5} />
            </div>

            {/* Floating Soundwave Icon */}
            <div className="absolute left-8 top-12 p-2 bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.03)] border border-[#EAEAE6] text-[#FF6B6B]">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10h2v4H5v-4zm4-4h2v12H9V6zm4 8h2v6h-2v-6zm4-12h2v14h-2V2z" />
              </svg>
            </div>

            {/* Floating Menu Icon */}
            <div className="absolute right-1 top-2 p-2 bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.03)] border border-[#EAEAE6] text-[#FF6B6B]">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
          </div>
        </div>

        {/* 2. Search Bar Section */}
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
            <Search size={18} strokeWidth={2.5} />
          </div>
          <input
            type="text"
            placeholder="Search scenarios (e.g. airport, doctor, market)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3.5 bg-white border border-[#EAEAE6] rounded-2xl text-xs font-semibold shadow-[0_4px_20px_rgba(0,0,0,0.015)] focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/20 transition-all duration-300 placeholder-gray-400"
          />
        </div>

        {/* 3. Category Chips Section */}
        <div className="w-full">
          <div className="overflow-x-auto no-scrollbar flex space-x-2 py-1">
            {[
              { id: 'cat-daily', label: 'Daily Life', icon: MessageSquare },
              { id: 'cat-travel', label: 'Travel', icon: Compass },
              { id: 'cat-work', label: 'Work', icon: Briefcase },
              { id: 'cat-food', label: 'Food', icon: Utensils },
              { id: 'cat-emergency', label: 'Emergency', icon: AlertTriangle }
            ].map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setScreen('Categories');
                  }}
                  className={`flex items-center space-x-1.5 px-4 py-2.5 rounded-full text-xs font-extrabold transition-all duration-200 flex-shrink-0 active:scale-95 border ${
                    isActive
                      ? 'bg-[#FF6B6B] border-[#FF6B6B] text-white shadow-[0_4px_12px_rgba(255,107,107,0.2)]'
                      : 'bg-white border-[#EAEAE6] text-gray-500 hover:border-gray-300'
                  }`}
                >
                  <Icon size={12} strokeWidth={2.5} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 4. Continue where you left off Card */}
        <div 
          onClick={() => handleScenarioClick(lastActiveScenario)}
          className="p-4 bg-white border border-[#EAEAE6] rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.015)] cursor-pointer hover:shadow-md transition-all active:scale-[0.99] flex items-center justify-between gap-4"
        >
          <div className="flex items-center space-x-3.5">
            <div className="w-14 h-14 rounded-2xl overflow-hidden flex-shrink-0 relative shadow-sm border border-[#EAEAE6]">
              <RenderScenarioIllustration id={lastActiveScenario.id} />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] font-black uppercase tracking-wider text-[#FF6B6B]">Continue Practicing</span>
              <h4 className="font-black text-xs text-[#0F1E36] mt-0.5 leading-snug line-clamp-1">{lastActiveScenario.title}</h4>
              <p className="text-[10px] text-gray-400 font-bold mt-1 flex items-center">
                <span>Daily Life</span>
                <span className="mx-1.5">•</span>
                <span>{lastActiveScenario.durationMin} mins left</span>
              </p>
            </div>
          </div>
          <button 
            className="px-3.5 py-1.5 bg-[#FFF8F8] border border-[#FF6B6B]/20 text-[#FF6B6B] font-black text-[10px] rounded-full flex items-center justify-center transition-all hover:bg-[#FF6B6B] hover:text-white"
          >
            <span>Resume</span>
            <ArrowRight size={10} className="ml-1" strokeWidth={3} />
          </button>
        </div>

        {/* 5. Trending Carousel Section */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <h3 className="text-xs font-black uppercase tracking-widest text-[#0F1E36]">
              Trending conversations
            </h3>
            <button
              onClick={() => setScreen('Categories')}
              className="text-[10px] font-black text-[#FF6B6B] flex items-center space-x-1"
            >
              <span>See all</span>
              <ArrowRight size={10} strokeWidth={3} />
            </button>
          </div>

          {/* Horizontal LARGE Scenario Cards Scroll */}
          <div className="overflow-x-auto flex space-x-4.5 pb-4.5 no-scrollbar scroll-smooth snap-x snap-mandatory">
            {trendingScenarios.map((scen) => (
              <div
                key={scen.id}
                onClick={() => handleScenarioClick(scen)}
                className="snap-start carousel-item w-72 h-44 rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-[#EAEAE6] flex-shrink-0 cursor-pointer relative hover:shadow-md transition-all active:scale-[0.98]"
              >
                {/* Full scenario card background vector illustration */}
                <div className="absolute inset-0 w-full h-full pointer-events-none">
                  <RenderScenarioIllustration id={scen.id} />
                </div>

                {/* Dark gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

                {/* TOP Corner Badge: POPULAR / TRENDING */}
                <div className="absolute top-3.5 right-3.5 z-10">
                  <span className="bg-[#FF6B6B] text-white text-[9px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-widest shadow-sm">
                    {scen.isHot ? 'TRENDING' : 'POPULAR'}
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-10 flex flex-col justify-end">
                  <h4 className="font-black text-sm tracking-tight leading-tight text-white mb-1.5 line-clamp-1">
                    {scen.title}
                  </h4>
                  
                  {/* Badges Row */}
                  <div className="flex items-center space-x-2 text-[10px] font-extrabold text-gray-200">
                    <span className="capitalize bg-white/20 px-1.5 py-0.5 rounded text-[8px] tracking-wide font-black">
                      {scen.difficulty}
                    </span>
                    <span>•</span>
                    <span className="flex items-center">
                      <Clock size={10} className="mr-0.5" />
                      {scen.durationMin}m
                    </span>
                    <span>•</span>
                    <span className="flex items-center">
                      <Mic size={10} className="mr-0.5" />
                      Voice
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2">
            <div className="w-4 h-1.5 rounded-full bg-[#FF6B6B]" />
            <div className="w-1.5 h-1.5 rounded-full bg-gray-200" />
            <div className="w-1.5 h-1.5 rounded-full bg-gray-200" />
          </div>
        </div>

        {/* 6. Streak Card Section */}
        <div 
          onClick={() => setScreen('History')}
          className="p-4.5 bg-white border border-[#EAEAE6] rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.015)] flex items-center justify-between gap-4 cursor-pointer hover:shadow-md transition-all active:scale-[0.99]"
        >
          <div className="flex items-center space-x-3.5">
            {/* Gold Flame Icon */}
            <div className="w-10 h-10 rounded-full bg-[#FFFBEB] text-[#F59E0B] flex items-center justify-center shadow-inner">
              <Flame size={20} className="fill-current animate-pulse text-[#F59E0B]" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-black tracking-tight text-[#0F1E36]">12 Day streak</span>
              <span className="text-[10px] text-gray-400 font-bold mt-0.5">
                Keep it going! You're doing great.
              </span>
            </div>
          </div>
          
          {/* Coral Progress Bar with Thumb */}
          <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden relative">
            <div className="h-full bg-[#FF6B6B] rounded-full" style={{ width: '60%' }} />
            <div className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[#FF6B6B] border-2 border-white shadow-sm" style={{ left: '50%' }} />
          </div>
        </div>

      </div>
    </div>
  );
};

