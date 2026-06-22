import React, { useState } from 'react';
import { useAppStore } from '../store';
import { Clock, Globe, ArrowLeft, Plus, X, Sparkles, ChevronRight, Mic } from 'lucide-react';
import { Scenario } from '../types';
import { RenderScenarioIllustration } from './Home';

export const ScenariosGrid: React.FC = () => {
  const { scenarios, setScreen, setActiveScenario, customBots, addCustomBot, activeBot, setActiveBot } = useAppStore();
  const [filter, setFilter] = useState<'all' | 'beginner' | 'intermediate' | 'advanced'>('all');
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  
  // Custom Bot Form State
  const [botName, setBotName] = useState('');
  const [botPersona, setBotPersona] = useState('');
  const [botGoal, setBotGoal] = useState('');

  const handleBack = () => {
    setScreen('Categories');
  };

  const handleScenarioClick = (scen: Scenario) => {
    setActiveScenario(scen);
    setActiveBot(null);
    setScreen('ScenarioDetail');
  };

  const handleCustomBotClick = (bot: typeof customBots[0]) => {
    setActiveScenario({
      id: bot.id,
      categoryId: 'cat-custom',
      title: bot.name,
      description: 'Your custom configured AI practice partner.',
      difficulty: 'intermediate',
      isPremium: false,
      personaName: bot.name,
      personaRole: 'Custom Character',
      goal: bot.goal,
      openingLine: `Hello! I am ${bot.name}. Let's practice.`,
      durationMin: 10,
      image: ''
    });
    setActiveBot(bot);
    setScreen('ScenarioDetail');
  };

  const handleCreateBot = (e: React.FormEvent) => {
    e.preventDefault();
    if (!botName || !botPersona || !botGoal) return;
    addCustomBot(botName, botPersona, botGoal);
    setBotName('');
    setBotPersona('');
    setBotGoal('');
    setIsCreateOpen(false);
  };

  const filteredScenarios = scenarios.filter((scen) => {
    if (filter === 'all') return true;
    return scen.difficulty === filter;
  });

  return (
    <div className="flex-grow flex flex-col bg-[#FAFAF8] text-[#0F1E36] overflow-y-auto no-scrollbar pb-24 px-5 pt-4 space-y-6">
      {/* Background Grain */}
      <div className="grain-overlay" />

      {/* Header & Back Button */}
      <div className="flex items-center space-x-3">
        <button
          onClick={handleBack}
          className="p-2.5 rounded-xl border border-[#EAEAE6] bg-white text-[#0F1E36] transition-all active:scale-95 shadow-sm"
        >
          <ArrowLeft size={16} strokeWidth={2.5} />
        </button>
        <div>
          <h2 className="text-xl font-black tracking-tight">Practice Scenarios</h2>
          <p className="text-[10px] text-gray-400 font-semibold mt-0.5">
            Choose a situational topic or configure a custom one.
          </p>
        </div>
      </div>

      {/* Filters Chips */}
      <div className="flex space-x-2 pb-1 overflow-x-auto no-scrollbar">
        {(['all', 'beginner', 'intermediate', 'advanced'] as const).map((lvl) => (
          <button
            key={lvl}
            onClick={() => setFilter(lvl)}
            className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-wider border transition-all active:scale-95 flex-shrink-0 ${
              filter === lvl
                ? 'bg-[#FF6B6B] border-[#FF6B6B] text-white shadow-[0_4px_12px_rgba(255,107,107,0.2)]'
                : 'bg-white border-[#EAEAE6] text-gray-500 hover:border-gray-300'
            }`}
          >
            {lvl}
          </button>
        ))}
      </div>

      {/* Scenarios Listing */}
      <div className="space-y-4">
        
        {/* Custom Bots */}
        {customBots.map((bot) => (
          <div
            key={bot.id}
            onClick={() => handleCustomBotClick(bot)}
            className="p-4 bg-white border border-dashed border-[#FF6B6B]/40 hover:border-[#FF6B6B] rounded-[24px] shadow-[0_4px_15px_rgba(0,0,0,0.015)] cursor-pointer flex flex-col justify-between hover:shadow-md transition-all active:scale-[0.99]"
          >
            <div>
              <div className="flex justify-between items-start mb-2">
                <span className="bg-[#FFF8F8] border border-[#FF6B6B]/20 text-[#FF6B6B] text-[8px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  Custom Bot
                </span>
              </div>
              <h3 className="font-extrabold text-sm text-[#0F1E36] mb-1">{bot.name}</h3>
              <p className="text-[11px] text-gray-400 leading-relaxed line-clamp-2">
                {bot.goal}
              </p>
            </div>
            <div className="flex items-center text-[10px] font-extrabold text-[#FF6B6B] mt-3 pt-2.5 border-t border-gray-150/50">
              <span>Goal: On-device Custom Practice</span>
            </div>
          </div>
        ))}

        {/* Regular Scenarios */}
        {filteredScenarios.map((scen) => (
          <div
            key={scen.id}
            onClick={() => handleScenarioClick(scen)}
            className="p-4 bg-white border border-[#EAEAE6] rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.015)] cursor-pointer flex flex-col justify-between hover:shadow-md transition-all active:scale-[0.99] space-y-4"
          >
            <div className="flex items-start gap-4">
              <div className="w-20 h-20 rounded-2xl overflow-hidden relative border border-[#EAEAE6] flex-shrink-0">
                <RenderScenarioIllustration id={scen.id} />
                <div className="absolute top-1 right-1 flex flex-col space-y-1">
                  {scen.isPremium && (
                    <span className="bg-amber-500 text-white text-[7px] font-black px-1.5 py-0.5 rounded uppercase tracking-wider">
                      PRM
                    </span>
                  )}
                  {scen.isHot && (
                    <span className="bg-red-500 text-white text-[7px] font-black px-1.5 py-0.5 rounded uppercase tracking-wider">
                      HOT
                    </span>
                  )}
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="font-black text-sm text-[#0F1E36] leading-snug line-clamp-1">{scen.title}</h3>
                <p className="text-[11px] text-gray-400 font-semibold leading-relaxed mt-1 line-clamp-2">
                  {scen.description}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between text-[9px] font-black uppercase tracking-wider text-gray-400 border-t border-[#F0F0ED] pt-3.5">
              <div className="flex items-center space-x-3">
                <span className="flex items-center">
                  <Clock size={10} className="mr-0.5 text-gray-400" />
                  {scen.durationMin}m
                </span>
                <span>•</span>
                <span className="text-[#0D9488] bg-[#E6F4F2] px-1.5 py-0.5 rounded">{scen.difficulty}</span>
                <span>•</span>
                <span className="flex items-center">
                  <Mic size={10} className="mr-0.5 text-gray-400" />
                  Voice
                </span>
              </div>
              <ChevronRight size={14} className="text-gray-300" strokeWidth={2.5} />
            </div>
          </div>
        ))}
      </div>

      {/* Floating Action Button (FAB) for Creating Custom Bot */}
      <button
        onClick={() => setIsCreateOpen(true)}
        className="absolute bottom-24 right-5 z-40 p-4 bg-[#FF6B6B] text-white rounded-full shadow-[0_8px_25px_rgba(255,107,107,0.3)] hover:scale-105 active:scale-95 transition-all"
        title="Create Custom Scenario"
      >
        <Plus size={22} strokeWidth={3} />
      </button>

      {/* Create Bot Modal Sheet */}
      {isCreateOpen && (
        <div className="fixed inset-0 z-50 bg-[#0F1E36]/35 backdrop-blur-xs flex items-center justify-center p-5">
          <div className="bg-white border border-[#EAEAE6] p-6 rounded-[28px] w-full max-w-sm shadow-[0_24px_50px_rgba(0,0,0,0.15)] relative animate-float-slow">
            <button
              onClick={() => setIsCreateOpen(false)}
              className="absolute right-4 top-4 p-2 rounded-xl text-gray-400 hover:text-[#0F1E36] active:scale-95"
            >
              <X size={18} strokeWidth={2.5} />
            </button>
            <div className="flex items-center space-x-2 text-[#FF6B6B] mb-5">
              <Sparkles size={18} strokeWidth={2.5} />
              <h3 className="font-black text-base text-[#0F1E36]">Create Custom Partner</h3>
            </div>

            <form onSubmit={handleCreateBot} className="space-y-4">
              <div>
                <label className="block text-[9px] font-black uppercase tracking-wider text-gray-400 mb-1.5">
                  Bot Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Indiranagar Auto Stand"
                  value={botName}
                  onChange={(e) => setBotName(e.target.value)}
                  className="w-full p-3 bg-[#FAFAF8] border border-[#EAEAE6] rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/25"
                />
              </div>

              <div>
                <label className="block text-[9px] font-black uppercase tracking-wider text-gray-400 mb-1.5">
                  Persona & Prompt Description
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="e.g. Auto driver waiting at Indiranagar Metro. Talks in Kannada-English mix."
                  value={botPersona}
                  onChange={(e) => setBotPersona(e.target.value)}
                  className="w-full p-3 bg-[#FAFAF8] border border-[#EAEAE6] rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/25 resize-none"
                />
              </div>

              <div>
                <label className="block text-[9px] font-black uppercase tracking-wider text-gray-400 mb-1.5">
                  Your Conversation Goal
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Bargain to go to Koramangala for ₹100."
                  value={botGoal}
                  onChange={(e) => setBotGoal(e.target.value)}
                  className="w-full p-3 bg-[#FAFAF8] border border-[#EAEAE6] rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/25"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#FF6B6B] hover:bg-[#FF5C5C] text-white font-black rounded-xl shadow-md active:scale-95 transition-all text-xs uppercase tracking-widest mt-4"
              >
                Assemble Bot
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScenariosGrid;


