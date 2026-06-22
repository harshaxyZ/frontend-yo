import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Send, X, Volume2 } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

const Chat = () => {
  const { scenarioId } = useParams();
  const navigate = useNavigate();
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', text: string }[]>([
    { role: 'assistant', text: 'Namaskara! Welcome to the cafe. What can I get for you today?' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { role: 'user', text: input }]);
    setInput('');
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'assistant', text: 'Sure thing, filtering coffee. Give me one moment.' }]);
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col h-[85vh] w-full max-w-3xl mx-auto bg-white rounded-[32px] shadow-2xl border border-[#E4E4E7] overflow-hidden relative"
    >
      {/* Header */}
      <div className="h-20 bg-[#FAFAFA] border-b border-[#E4E4E7] flex items-center justify-between px-6 shrink-0 z-10">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-[#09090B] flex items-center justify-center text-white font-[800]">
            B
          </div>
          <div>
            <h2 className="font-[800] tracking-tight text-[#09090B]">Barista Persona</h2>
            <p className="text-xs font-[500] text-[#A1A1AA] flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Online
            </p>
          </div>
        </div>
        <button onClick={() => navigate('/')} className="w-10 h-10 rounded-full bg-[#FAFAFA] border border-[#E4E4E7] flex items-center justify-center hover:bg-[#F4F4F5] transition-colors">
          <X size={18} className="text-[#09090B]" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-grow overflow-y-auto p-6 flex flex-col gap-6 bg-white relative">
        <AnimatePresence>
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[80%] rounded-[24px] px-6 py-4 ${
                msg.role === 'user' 
                  ? 'bg-[#09090B] text-white rounded-br-[8px]' 
                  : 'bg-[#F4F4F5] text-[#09090B] rounded-bl-[8px]'
              }`}>
                <p className="text-[15px] font-[500] leading-relaxed">{msg.text}</p>
                {msg.role === 'assistant' && (
                  <button className="mt-3 flex items-center gap-1 text-[11px] font-[600] uppercase tracking-widest text-[#A1A1AA] hover:text-[#09090B] transition-colors">
                    <Volume2 size={14} /> Listen
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-[#E4E4E7] shrink-0">
        <div className="flex items-center gap-3">
          <button className="w-12 h-12 rounded-full bg-[#FAFAFA] border border-[#E4E4E7] flex items-center justify-center text-[#09090B] shrink-0 hover:bg-[#09090B] hover:text-white transition-colors">
            <Mic size={20} />
          </button>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your reply..."
            className="flex-grow h-12 bg-[#F4F4F5] rounded-full px-6 text-[15px] font-[500] focus:outline-none focus:ring-1 focus:ring-[#09090B] transition-all"
          />
          <button 
            onClick={handleSend}
            className="w-12 h-12 rounded-full bg-[#09090B] text-white flex items-center justify-center shrink-0 hover:scale-105 active:scale-95 transition-transform"
          >
            <Send size={18} className="translate-x-0.5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Chat;
