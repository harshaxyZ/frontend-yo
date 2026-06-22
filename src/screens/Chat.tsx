import React, { useState, useRef, useEffect } from 'react';
import { useAppStore } from '../store';
import { Send, ArrowLeft, XCircle, Star } from 'lucide-react';

export const Chat: React.FC = () => {
  const {
    activeScenario,
    messages,
    addMessage,
    isAiTyping,
    setIsAiTyping,
    setScreen,
    setActiveSessionResults,
    addHistoryEntry,
  } = useAppStore();

  const [input, setInput] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isAiTyping]);

  if (!activeScenario) return null;

  const generateAiResponse = (userMessage: string): string => {
    const text = userMessage.toLowerCase();
    const name = activeScenario.personaName;

    if (name === 'Ramesh') {
      if (text.includes('hi') || text.includes('hello') || text.includes('namaskara')) {
        return 'Namaskara! Welcome. Yes, one filter coffee? Swalpa sakkare or normal sakkare?';
      }
      if (text.includes('sugar') || text.includes('sakkare') || text.includes('little')) {
        return 'Okay, swalpa sakkare (little sugar) filter coffee. Strong decoction I will add. Matte, do you want any local snacks? Fresh Rava Idli is ready now!';
      }
      if (text.includes('idli') || text.includes('snack') || text.includes('yes')) {
        return 'Perfect! One Rava Idli and one swalpa sakkare filter coffee. I will get it in 2 minutes. Bill is ₹60, how will you pay?';
      }
      return 'Got it! Your order is being prepared. It will take 2 minutes. Matte, anything else?';
    }

    if (name === 'Kempegowda') {
      if (text.includes('meter') || text.includes('80') || text.includes('eighty')) {
        return 'Meter is not working, traffic double is there today, sir! Okay, for you ₹100 flat fare I will take. Come, sit.';
      }
      if (text.includes('traffic') || text.includes('route')) {
        return 'Yes, Vidhana Soudha road traffic is full heavy. Shortcut I know, Malleshwaram side I will go. Sit comfortably.';
      }
      return 'Yes, okay, Vidhana Soudha we will reach in 15 minutes. Paytm or cash payment is fine.';
    }

    if (name === 'Priya') {
      if (text.includes('experience') || text.includes('react') || text.includes('years')) {
        return 'Impressive. We use React 18 with Zustand for client state. How do you handle performance optimization and bundle sizing in big dashboards?';
      }
      if (text.includes('optimization') || text.includes('state') || text.includes('reconcil')) {
        return 'Good answer. Regarding compensation, you mentioned ₹15 LPA. Our current budget is ₹12 LPA + performance bonuses. Are you open to negotiation?';
      }
      return 'Excellent. I will sync with the engineering team and my HR department will release the updates soon. Thank you!';
    }

    return `Ah, that sounds great. Let's continue practicing. Tell me more about your thoughts on this scenario!`;
  };

  const handleSend = () => {
    if (!input.trim() || isAiTyping) return;

    const userText = input;
    addMessage({ role: 'user', content: userText });
    setInput('');
    setIsAiTyping(true);

    setTimeout(() => {
      setIsAiTyping(false);
      const aiReply = generateAiResponse(userText);
      addMessage({ role: 'assistant', content: aiReply });
    }, 1500);
  };

  const handleEndConversation = () => {
    const score = Math.floor(Math.random() * 20) + 80;
    const summary = `Excellent practice session with ${activeScenario.personaName}! You answered prompts correctly and initiated conversational flow. Try incorporating more local phrases to sound native next time.`;

    setActiveSessionResults(score, summary);
    
    addHistoryEntry({
      id: 'hist-' + Math.random().toString(36).substring(7),
      scenarioTitle: activeScenario.title,
      scenarioId: activeScenario.id,
      date: new Date().toISOString().split('T')[0],
      score,
      durationMin: activeScenario.durationMin,
      improvementSummary: summary,
      messages: [...messages]
    });

    setScreen('Analysis');
  };

  return (
    <div className="absolute inset-0 flex flex-col bg-[#FAFAF8] text-[#0F1E36] overflow-hidden">
      {/* Background Grain */}
      <div className="grain-overlay" />

      {/* Header Context Bar */}
      <header className="absolute top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-b border-[#F0F0ED] px-4 h-16 flex items-center justify-between shadow-sm">
        <div className="flex items-center space-x-3 min-w-0">
          <button
            onClick={() => setScreen('ScenarioDetail')}
            className="p-2 -ml-2 rounded-xl hover:bg-gray-100/50 text-[#0F1E36] active:scale-95 transition-all"
            aria-label="Back"
          >
            <ArrowLeft size={20} strokeWidth={2.5} />
          </button>
          <div className="min-w-0">
            <h3 className="font-black text-xs leading-tight text-[#0F1E36] truncate">
              {activeScenario.title}
            </h3>
            <span className="text-[9px] text-[#FF6B6B] font-black uppercase tracking-wider block mt-0.5">
              Practice Partner: {activeScenario.personaName}
            </span>
          </div>
        </div>

        <button
          onClick={handleEndConversation}
          className="px-3 py-1.5 bg-[#FFF8F8] border border-[#FF6B6B]/20 text-[#FF6B6B] font-black text-[10px] rounded-full flex items-center shadow-sm active:scale-95 transition-all flex-shrink-0"
        >
          <XCircle size={12} className="mr-1" strokeWidth={2.5} />
          End Session
        </button>
      </header>

      {/* Message Area container */}
      <div className="flex-1 overflow-y-auto pt-28 pb-20 px-4 space-y-4 no-scrollbar">
        
        {/* Goal Indicator Card */}
        <div className="bg-amber-50 border border-amber-100 p-3.5 rounded-2xl flex items-start space-x-2.5 mb-2 shadow-sm">
          <Star size={14} className="text-[#F59E0B] mt-0.5 flex-shrink-0" strokeWidth={2.5} />
          <p className="text-[10px] font-black text-amber-800 leading-snug uppercase tracking-wider">
            Objective: {activeScenario.goal}
          </p>
        </div>

        {messages.map((msg) => {
          const isUser = msg.role === 'user';
          return (
            <div
              key={msg.id}
              className={`flex ${isUser ? 'justify-end' : 'justify-start'} animate-fade-in`}
            >
              <div
                className={`max-w-[80%] px-4 py-3 rounded-2xl shadow-sm text-xs leading-relaxed ${
                  isUser
                    ? 'bg-[#FF6B6B] text-white rounded-tr-none'
                    : 'bg-white text-[#0F1E36] border border-[#EAEAE6] rounded-tl-none'
                }`}
              >
                <p className="font-semibold leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                <span
                  className={`text-[8px] block text-right mt-1.5 font-bold ${
                    isUser ? 'text-white/70' : 'text-gray-400'
                  }`}
                >
                  {msg.timestamp}
                </span>
              </div>
            </div>
          );
        })}

        {/* Typing Indicator */}
        {isAiTyping && (
          <div className="flex justify-start">
            <div className="bg-white border border-[#EAEAE6] px-4 py-3 rounded-2xl rounded-tl-none shadow-sm flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 bg-[#FF6B6B] rounded-full dot-bounce-1" />
              <span className="w-1.5 h-1.5 bg-[#FF6B6B] rounded-full dot-bounce-2" />
              <span className="w-1.5 h-1.5 bg-[#FF6B6B] rounded-full dot-bounce-3" />
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      {/* Input panel absolute-positioned at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-40 bg-white border-t border-[#F0F0ED] px-4 py-3.5 flex items-center space-x-3">
        <input
          type="text"
          placeholder={`Type message to ${activeScenario.personaName}...`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          className="flex-1 px-4 py-3 bg-[#FAFAF8] border border-[#EAEAE6] rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/25 placeholder-gray-400"
        />
        <button
          onClick={handleSend}
          disabled={!input.trim() || isAiTyping}
          className={`p-3 rounded-xl bg-[#FF6B6B] text-white shadow-md active:scale-95 transition-all flex items-center justify-center ${
            !input.trim() || isAiTyping ? 'opacity-55 cursor-not-allowed' : 'hover:bg-[#FF5C5C]'
          }`}
          aria-label="Send"
        >
          <Send size={16} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
};

export default Chat;

