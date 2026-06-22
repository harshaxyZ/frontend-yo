import React, { useState } from 'react';
import { useAppStore } from '../store';
import { Search, ChevronRight, MessageSquare, Compass, Briefcase, Utensils, AlertTriangle, Users, Sparkles, Flame, Clock } from 'lucide-react';
import { RenderScenarioIllustration } from './Home';

export const Categories: React.FC = () => {
  const { categories, scenarios, setScreen, setActiveScenario } = useAppStore();
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategoryClick = (catId: string) => {
    setScreen('ScenariosGrid');
  };

  const handleScenarioClick = (scen: typeof scenarios[0]) => {
    setActiveScenario(scen);
    setScreen('ScenarioDetail');
  };

  const filteredScenarios = scenarios.filter(
    s => s.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
         s.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const lastActiveScenario = scenarios[0]; // Order filter coffee

  // Get icon for categories
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquare':
        return <MessageSquare size={16} strokeWidth={2.5} />;
      case 'Compass':
        return <Compass size={16} strokeWidth={2.5} />;
      case 'Briefcase':
        return <Briefcase size={16} strokeWidth={2.5} />;
      case 'Utensils':
        return <Utensils size={16} strokeWidth={2.5} />;
      case 'AlertTriangle':
      default:
        return <AlertTriangle size={16} strokeWidth={2.5} />;
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-[#FAFAF8] text-[#0F1E36] overflow-y-auto no-scrollbar pb-24 px-5 pt-4 space-y-6">
      {/* Background Grain */}
      <div className="grain-overlay" />

      {/* Hero Header Intro */}
      <div>
        <h2 className="text-2xl font-black tracking-tight text-[#0F1E36]">Practice Library</h2>
        <p className="text-[11px] font-semibold text-gray-400 mt-1 leading-relaxed">
          Select a category or search specific contexts to begin your Kannada conversational roleplay.
        </p>
      </div>

      {/* Search Bar matching Home screen */}
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

      {/* Categories Grid (2 Columns) */}
      <div className="space-y-3">
        <h3 className="text-[10px] font-black uppercase tracking-wider text-gray-400">
          Browse Categories
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              className="flex items-center p-3.5 rounded-[20px] border border-[#EAEAE6] bg-white text-left transition-all shadow-[0_4px_12px_rgba(0,0,0,0.01)] hover:border-[#FF6B6B]/40 hover:shadow-md active:scale-95 group"
            >
              <div className="p-2.5 rounded-xl bg-[#FFF8F8] text-[#FF6B6B] mr-3 flex-shrink-0 group-hover:bg-[#FF6B6B] group-hover:text-white transition-colors duration-300">
                {getCategoryIcon(cat.iconName)}
              </div>
              <span className="font-extrabold text-xs tracking-tight text-[#0F1E36] line-clamp-1">{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Continue where you left off Card */}
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
          className="px-3.5 py-1.5 bg-[#FFF8F8] border border-[#FF6B6B]/20 text-[#FF6B6B] font-black text-[10px] rounded-full flex items-center justify-center transition-all"
        >
          <span>Resume</span>
          <ChevronRight size={10} className="ml-0.5" strokeWidth={3} />
        </button>
      </div>

      {/* Scenarios Grid / Search Results */}
      <div className="space-y-3">
        <h3 className="text-[10px] font-black uppercase tracking-wider text-gray-400">
          {searchQuery ? 'Search Results' : 'Featured Scenarios'}
        </h3>
        <div className="space-y-3">
          {filteredScenarios.slice(0, 4).map((scen) => (
            <div
              key={scen.id}
              onClick={() => handleScenarioClick(scen)}
              className="p-3.5 bg-white border border-[#EAEAE6] rounded-[20px] shadow-[0_4px_15px_rgba(0,0,0,0.01)] hover:shadow-md transition-all active:scale-[0.99] flex items-center gap-3.5 cursor-pointer"
            >
              <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 relative border border-[#EAEAE6]">
                <RenderScenarioIllustration id={scen.id} />
              </div>
              <div className="flex-grow min-w-0">
                <div className="flex items-center space-x-1.5">
                  <span className="text-[8px] font-black uppercase tracking-widest text-[#0D9488] bg-[#E6F4F2] px-1.5 py-0.5 rounded">
                    {scen.difficulty}
                  </span>
                  {scen.isPremium && (
                    <span className="text-[8px] font-black uppercase tracking-widest text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded">
                      Premium
                    </span>
                  )}
                </div>
                <h4 className="font-extrabold text-xs text-[#0F1E36] mt-1 leading-snug truncate">{scen.title}</h4>
                <p className="text-[10px] text-gray-400 mt-0.5 leading-snug line-clamp-1">{scen.description}</p>
              </div>
              <ChevronRight size={16} className="text-gray-300 flex-shrink-0" strokeWidth={2.5} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;

