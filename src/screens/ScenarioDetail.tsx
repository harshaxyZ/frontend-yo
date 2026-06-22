import React, { useState } from 'react';
import { useAppStore } from '../store';
import { ArrowLeft, Clock, Heart, Star, Users, HelpCircle, ChevronDown, ChevronUp, CheckCircle, Play, Phone } from 'lucide-react';
import { RenderScenarioIllustration } from './Home';

export const ScenarioDetail: React.FC = () => {
  const { activeScenario, setScreen, clearMessages, addMessage, activeBot, profile } = useAppStore();
  const [isFavorite, setIsFavorite] = useState(false);
  const [tipsOpen, setTipsOpen] = useState(true);

  if (!activeScenario) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#FAFAF8] text-[#0F1E36]">
        <p className="text-sm font-bold">No scenario selected. Please go back.</p>
      </div>
    );
  }

  const handleBack = () => {
    if (activeScenario.categoryId === 'cat-custom') {
      setScreen('ScenariosGrid');
    } else {
      setScreen('Categories');
    }
  };

  const startPracticeText = () => {
    clearMessages();
    addMessage({
      role: 'assistant',
      content: activeScenario.openingLine
    });
    setScreen('Chat');
  };

  const startPracticeVoice = () => {
    if (profile.subscriptionTier === 'free' && activeScenario.isPremium) {
      alert("This is a Premium scenario. Please upgrade to use voice calls.");
      return;
    }
    clearMessages();
    addMessage({
      role: 'assistant',
      content: activeScenario.openingLine
    });
    setScreen('AudioCall');
  };

  const tips = [
    "Start with standard polite greetings: say 'Namaskara' first.",
    "Use 'swalpa' to mean 'a little' or 'some'. e.g., 'Swalpa sakkare haaki'.",
    "To ask 'how much?', use the Kannada word 'Eshtu?'.",
    "Polite termination: end with 'Dhanyavadagalu' (Thank you) or 'Hogi barthini'."
  ];

  return (
    <div className="flex-1 flex flex-col bg-[#FAFAF8] text-[#0F1E36] overflow-y-auto no-scrollbar pb-24 px-5 pt-4 space-y-5">
      {/* Background Grain */}
      <div className="grain-overlay" />

      {/* Top Action Bar */}
      <div className="flex justify-between items-center">
        <button
          onClick={handleBack}
          className="p-2.5 rounded-xl border border-[#EAEAE6] bg-white text-[#0F1E36] transition-all active:scale-95 shadow-sm"
        >
          <ArrowLeft size={16} strokeWidth={2.5} />
        </button>
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className={`p-2.5 rounded-xl border transition-all active:scale-95 shadow-sm ${
            isFavorite
              ? 'bg-[#FFF8F8] border-[#FF6B6B] text-[#FF6B6B]'
              : 'border-[#EAEAE6] bg-white text-gray-400'
          }`}
        >
          <Heart size={16} strokeWidth={2.5} className={isFavorite ? 'fill-current' : ''} />
        </button>
      </div>

      {/* Hero card image with Vector Illustration */}
      <div className="w-full h-48 rounded-[24px] overflow-hidden relative shadow-[0_8px_25px_rgba(0,0,0,0.02)] border border-[#EAEAE6]">
        <div className="absolute inset-0 z-0">
          <RenderScenarioIllustration id={activeScenario.id} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent flex items-end p-5 z-10">
          <div className="flex flex-col text-white">
            <span className="text-[8px] font-black uppercase tracking-wider text-[#FF6B6B] bg-[#FFF8F8] px-2 py-0.5 rounded w-fit mb-1.5 shadow-sm">
              Active Scenario
            </span>
            <h1 className="text-xl font-black tracking-tight leading-tight text-white">
              {activeScenario.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Meta indicators */}
      <div className="grid grid-cols-3 gap-3">
        <div className="p-3 bg-white border border-[#EAEAE6] rounded-2xl flex flex-col items-center justify-center text-center shadow-[0_4px_12px_rgba(0,0,0,0.01)]">
          <Clock size={16} className="text-[#FF6B6B] mb-1" strokeWidth={2.5} />
          <span className="text-[8px] font-black text-gray-400 uppercase tracking-wider">Duration</span>
          <span className="font-extrabold text-[11px] text-[#0F1E36] mt-0.5">{activeScenario.durationMin} mins</span>
        </div>
        <div className="p-3 bg-white border border-[#EAEAE6] rounded-2xl flex flex-col items-center justify-center text-center shadow-[0_4px_12px_rgba(0,0,0,0.01)]">
          <Star size={16} className="text-[#F59E0B] mb-1" strokeWidth={2.5} />
          <span className="text-[8px] font-black text-gray-400 uppercase tracking-wider">Difficulty</span>
          <span className="font-extrabold text-[11px] text-[#0F1E36] mt-0.5 capitalize">{activeScenario.difficulty}</span>
        </div>
        <div className="p-3 bg-white border border-[#EAEAE6] rounded-2xl flex flex-col items-center justify-center text-center shadow-[0_4px_12px_rgba(0,0,0,0.01)]">
          <Users size={16} className="text-[#0D9488] mb-1" strokeWidth={2.5} />
          <span className="text-[8px] font-black text-gray-400 uppercase tracking-wider">Takers Today</span>
          <span className="font-extrabold text-[11px] text-[#0F1E36] mt-0.5">1,240</span>
        </div>
      </div>

      {/* Persona Card with Coral left border */}
      <div className="p-4 bg-white border border-[#EAEAE6] border-l-[3.5px] border-l-[#FF6B6B] rounded-[20px] shadow-[0_4px_15px_rgba(0,0,0,0.01)] space-y-2.5">
        <div>
          <span className="text-[8px] font-black uppercase tracking-wider text-[#FF6B6B]">Roleplay Partner</span>
          <h4 className="text-base font-extrabold tracking-tight text-[#0F1E36] mt-0.5">{activeScenario.personaName}</h4>
          <span className="text-[10px] text-gray-400 font-bold block">
            Role: {activeScenario.personaRole}
          </span>
        </div>
        <div className="p-3 bg-[#FAFAF8] border border-[#EAEAE6] rounded-xl">
          <span className="text-[8px] font-black uppercase tracking-wider text-gray-400">Your Objective</span>
          <p className="text-xs text-[#0F1E36] font-semibold leading-relaxed mt-1">
            {activeScenario.goal}
          </p>
        </div>
      </div>

      {/* Preview opening line */}
      <div className="p-4 bg-white border border-[#EAEAE6] rounded-[20px] shadow-[0_4px_15px_rgba(0,0,0,0.01)]">
        <span className="text-[8px] font-black uppercase tracking-wider text-gray-400">Opening Prompt</span>
        <blockquote className="border-l-2 border-l-[#0D9488] pl-3 mt-2 text-xs italic font-semibold leading-relaxed text-[#0F1E36]">
          "{activeScenario.openingLine}"
        </blockquote>
      </div>

      {/* Tips Accordion */}
      <div className="p-4 bg-white border border-[#EAEAE6] rounded-[20px] shadow-[0_4px_15px_rgba(0,0,0,0.01)]">
        <button
          onClick={() => setTipsOpen(!tipsOpen)}
          className="w-full flex justify-between items-center text-left"
        >
          <span className="text-xs font-black uppercase tracking-wider text-gray-400 flex items-center">
            <HelpCircle size={15} className="mr-2 text-[#FF6B6B]" strokeWidth={2.5} />
            Vocabulary Tips
          </span>
          {tipsOpen ? <ChevronDown size={14} className="rotate-180 transition-transform" /> : <ChevronDown size={14} className="transition-transform" />}
        </button>
        {tipsOpen && (
          <ul className="mt-3.5 space-y-2.5 pl-1">
            {tips.map((t, idx) => (
              <li key={idx} className="flex items-start text-xs font-semibold leading-relaxed text-[#0F1E36]">
                <CheckCircle size={13} className="text-[#0D9488] mr-2 mt-0.5 flex-shrink-0" strokeWidth={3} />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 gap-2 pt-2">
        <button
          onClick={startPracticeText}
          className="w-full py-4 bg-[#FF6B6B] text-white font-black rounded-2xl shadow-[0_8px_20px_rgba(255,107,107,0.2)] hover:bg-[#FF5C5C] transition-all active:scale-[0.98] flex items-center justify-center uppercase tracking-widest text-xs"
        >
          <Play size={14} className="mr-2 fill-current" strokeWidth={2.5} />
          Text Chat Mode
        </button>

        <button
          onClick={startPracticeVoice}
          className="w-full py-4 bg-[#0D9488] text-white font-black rounded-2xl shadow-[0_8px_20px_rgba(13,148,136,0.15)] hover:bg-[#0B8074] transition-all active:scale-[0.98] flex items-center justify-center uppercase tracking-widest text-xs"
        >
          <Phone size={14} className="mr-2" strokeWidth={2.5} />
          Voice Call Mode
        </button>
      </div>

    </div>
  );
};

export default ScenarioDetail;
