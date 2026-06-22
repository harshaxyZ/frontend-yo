import React, { useState } from 'react';
import { useAppStore } from '../store';
import { ArrowLeft, X, MessageSquare, Briefcase, Plane, Building, BarChart2, Clock, Check, Target, ChevronRight } from 'lucide-react';

const goals = [
  { id: 'daily', text: 'Speak confidently in daily conversations', icon: MessageSquare },
  { id: 'interview', text: 'Prepare for job interviews', icon: Briefcase },
  { id: 'travel', text: 'Communicate better while traveling', icon: Plane },
  { id: 'work', text: 'Improve at work / business communication', icon: Building },
];

const levels = ['Beginner', 'Elementary', 'Intermediate', 'Advanced'];
const times = ['5 min', '10 min', '15 min', '20+ min'];

export const Onboarding: React.FC = () => {
  const { setScreen, updateProfile } = useAppStore();
  
  const [selectedGoal, setSelectedGoal] = useState('daily');
  const [selectedLevel, setSelectedLevel] = useState('Intermediate');
  const [selectedTime, setSelectedTime] = useState('10 min');

  const handleContinue = () => {
    updateProfile({
      streakCount: 12,
    });
    setScreen('Home');
  };

  return (
    <div className="flex-1 flex flex-col justify-between p-6 bg-[#FAFAF8] text-[#0F1E36] overflow-y-auto no-scrollbar pb-20">
      {/* Background grain element */}
      <div className="grain-overlay" />

      {/* Header action bar */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => setScreen('Splash')}
          className="p-2 -ml-2 rounded-xl text-gray-400 hover:text-[#0F1E36] active:scale-95 transition-all"
          aria-label="Back"
        >
          <ArrowLeft size={20} strokeWidth={2.5} />
        </button>

        {/* Progress Step Bar Indicator (4 steps, first active) */}
        <div className="flex space-x-1.5 w-32 justify-center">
          <div className="flex-1 h-1.5 rounded-full bg-[#FF497C]" />
          <div className="flex-1 h-1.5 rounded-full bg-gray-200/80" />
          <div className="flex-1 h-1.5 rounded-full bg-gray-200/80" />
          <div className="flex-1 h-1.5 rounded-full bg-gray-200/80" />
        </div>

        <button
          onClick={() => setScreen('Home')}
          className="p-2 -mr-2 rounded-xl text-gray-400 hover:text-[#0F1E36] active:scale-95 transition-all"
          aria-label="Close"
        >
          <X size={20} strokeWidth={2.5} />
        </button>
      </div>

      {/* Title */}
      <div className="mb-6">
        <h2 className="text-3xl font-black tracking-tight leading-tight text-[#0F1E36]">
          Let's personalize<br />your experience
        </h2>
        <p className="text-xs font-semibold text-gray-400 mt-2">
          This helps us suggest the most relevant scenarios for you.
        </p>
      </div>

      {/* Selection Card Container */}
      <div className="bg-white border border-[#EAEAE6] rounded-[32px] p-5 shadow-[0_12px_40px_rgba(0,0,0,0.015)] space-y-6">
        
        {/* Section 1: Main Goal */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-[#FFF5F6] text-[#FF497C] flex items-center justify-center shadow-inner">
              <Target size={16} strokeWidth={2.5} />
            </div>
            <span className="text-xs font-black tracking-wider uppercase text-[#0F1E36]">What's your main goal?</span>
          </div>

          <div className="space-y-2">
            {goals.map((g) => {
              const Icon = g.icon;
              const isSelected = selectedGoal === g.id;
              return (
                <button
                  key={g.id}
                  onClick={() => setSelectedGoal(g.id)}
                  className={`w-full flex items-center justify-between p-3.5 rounded-2xl border text-left transition-all active:scale-[0.99] ${
                    isSelected
                      ? 'border-[#FF497C] bg-[#FFF5F6]'
                      : 'border-[#EAEAE6] hover:border-gray-300 bg-white'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Icon size={16} className={isSelected ? 'text-[#FF497C]' : 'text-gray-400'} />
                    <span className={`text-xs font-extrabold ${isSelected ? 'text-[#0F1E36]' : 'text-gray-500'}`}>{g.text}</span>
                  </div>
                  
                  {/* Circular Check Indicator */}
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center border transition-all ${
                    isSelected
                      ? 'bg-[#FF497C] border-[#FF497C] text-white shadow-sm'
                      : 'border-gray-200 bg-white'
                  }`}>
                    {isSelected && <Check size={11} strokeWidth={3.5} />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Section 2: Current Level */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-[#FFF5F6] text-[#FF497C] flex items-center justify-center shadow-inner">
              <BarChart2 size={16} strokeWidth={2.5} />
            </div>
            <span className="text-xs font-black tracking-wider uppercase text-[#0F1E36]">What's your current level?</span>
          </div>

          <div className="grid grid-cols-4 gap-1.5">
            {levels.map((lvl) => {
              const isSelected = selectedLevel === lvl;
              return (
                <button
                  key={lvl}
                  onClick={() => setSelectedLevel(lvl)}
                  className={`py-3 rounded-xl text-[10px] font-extrabold border text-center transition-all active:scale-95 ${
                    isSelected
                      ? 'border-[#FF497C] text-[#FF497C] bg-[#FFF5F6]'
                      : 'border-[#EAEAE6] bg-white text-gray-400'
                  }`}
                >
                  {lvl}
                </button>
              );
            })}
          </div>
        </div>

        {/* Section 3: Daily Commitment */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-[#FFF5F6] text-[#FF497C] flex items-center justify-center shadow-inner">
              <Clock size={16} strokeWidth={2.5} />
            </div>
            <span className="text-xs font-black tracking-wider uppercase text-[#0F1E36]">How much time can you practice daily?</span>
          </div>

          <div className="grid grid-cols-4 gap-1.5">
            {times.map((t) => {
              const isSelected = selectedTime === t;
              return (
                <button
                  key={t}
                  onClick={() => setSelectedTime(t)}
                  className={`py-3 rounded-xl text-[10px] font-extrabold border text-center transition-all active:scale-95 ${
                    isSelected
                      ? 'border-[#FF497C] text-[#FF497C] bg-[#FFF5F6]'
                      : 'border-[#EAEAE6] bg-white text-gray-400'
                  }`}
                >
                  {t}
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* Massive Continue CTA Button */}
      <div className="mt-8 mb-2">
        <button
          onClick={handleContinue}
          className="w-full py-4 bg-[#FF497C] hover:bg-[#FF356B] text-white font-extrabold rounded-2xl flex items-center justify-center shadow-[0_8px_25px_rgba(255,73,124,0.3)] transition-all active:scale-[0.98] text-xs tracking-widest uppercase relative"
        >
          <span>Continue</span>
          <ChevronRight size={16} className="absolute right-6" strokeWidth={3} />
        </button>
      </div>

    </div>
  );
};

export default Onboarding;
