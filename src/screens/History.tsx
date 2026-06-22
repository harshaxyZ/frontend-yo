import React from 'react';
import { useAppStore } from '../store';
import { Calendar, Award, Clock, ArrowRight, MessageSquareDashed } from 'lucide-react';
import { motion } from 'framer-motion';

export const History: React.FC = () => {
  const { history, setScreen, setActiveSessionResults, clearMessages, addMessage } = useAppStore();

  const handleViewReport = (item: typeof history[0]) => {
    setActiveSessionResults(item.score, item.improvementSummary);
    // Repopulate messages in store to view convo
    clearMessages();
    item.messages.forEach(msg => {
      addMessage({ role: msg.role, content: msg.content });
    });
    setScreen('Analysis');
  };

  return (
    <div className="flex-1 flex flex-col bg-[#FAFAF8] text-[#0F1E36] overflow-y-auto no-scrollbar pb-24 px-5 pt-4 space-y-6">
      {/* Background Grain */}
      <div className="grain-overlay" />

      {/* Header info */}
      <div>
        <h2 className="text-2xl font-black tracking-tight text-[#0F1E36]">Your Journey</h2>
        <p className="text-[11px] font-semibold text-gray-400 mt-1 leading-relaxed">
          Track your progress and review detailed feedback on all scenario completions.
        </p>
      </div>

      {history.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 bg-white border border-[#EAEAE6] rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.015)]">
          <div className="p-4 bg-[#FFF8F8] rounded-full text-[#FF6B6B] mb-4">
            <MessageSquareDashed size={36} strokeWidth={2.5} />
          </div>
          <h3 className="font-extrabold text-base text-[#0F1E36]">No sessions completed yet</h3>
          <p className="text-xs text-gray-400 mt-1.5 text-center max-w-xs leading-relaxed">
            Start a practice scenario to generate your first conversational score!
          </p>
          <button
            onClick={() => setScreen('Home')}
            className="mt-6 px-6 py-3.5 bg-[#FF6B6B] hover:bg-[#FF5C5C] text-white text-xs font-black rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-all uppercase tracking-widest"
          >
            Start Practicing
          </button>
        </div>
      ) : (
        <div className="flex flex-col space-y-4">
          {history.map((item, index) => {
            const isExcellent = item.score >= 90;
            const isGood = item.score >= 80 && item.score < 90;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center justify-between p-4.5 bg-white border border-[#EAEAE6] rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.015)] hover:shadow-md transition-all active:scale-[0.99] gap-4"
              >
                {/* Session Meta */}
                <div className="flex-1 min-w-0">
                  <span className="text-[8px] font-black text-[#0D9488] bg-[#E6F4F2] px-2 py-0.5 rounded uppercase tracking-wider">
                    Completed
                  </span>
                  <h3 className="font-extrabold text-sm text-[#0F1E36] mt-2 leading-snug line-clamp-1">{item.scenarioTitle}</h3>
                  
                  <div className="flex items-center gap-3.5 mt-2.5 text-[10px] text-gray-450 font-bold">
                    <div className="flex items-center space-x-1">
                      <Calendar size={11} strokeWidth={2.5} />
                      <span>{item.date}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center space-x-1">
                      <Clock size={11} strokeWidth={2.5} />
                      <span>{item.durationMin}m duration</span>
                    </div>
                  </div>
                </div>

                {/* Score and Action */}
                <div className="flex items-center space-x-4 flex-shrink-0">
                  <div className="flex items-center space-x-2">
                    <div className={`p-2 rounded-xl ${
                      isExcellent 
                        ? 'bg-amber-50 text-[#F59E0B]' 
                        : isGood 
                        ? 'bg-[#E6F4F2] text-[#0D9488]' 
                        : 'bg-[#FFF8F8] text-[#FF6B6B]'
                    }`}>
                      <Award size={18} strokeWidth={2.5} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-base font-black text-[#0F1E36] leading-none">{item.score}/100</span>
                      <span className="text-[8px] uppercase font-black tracking-wider text-gray-400 mt-0.5">Score</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleViewReport(item)}
                    className="p-2.5 rounded-xl border border-[#EAEAE6] bg-gray-50 text-[#FF6B6B] hover:bg-[#FF6B6B] hover:text-white transition-all active:scale-95"
                    aria-label="View report"
                  >
                    <ArrowRight size={14} strokeWidth={3} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>

  );
};
