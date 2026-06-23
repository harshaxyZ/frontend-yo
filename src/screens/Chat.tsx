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
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col h-[85vh] w-full max-w-3xl mx-auto bg-[#121214] rounded-[32px] border border-white/5 overflow-hidden relative shadow-2xl"
    >
      {/* Header */}
      <div className="h-20 bg-[#0A0A0C]/80 backdrop-blur-xl border-b border-white/5 flex items-center justify-between px-6 shrink-0 z-10 absolute top-0 w-full">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-[12px] bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white font-[800]">
            B
          </div>
          <div>
            <h2 className="font-[800] tracking-tight text-white">Barista Persona</h2>
            <p className="text-xs font-[500] text-zinc-500 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Online
            </p>
          </div>
        </div>
        <button onClick={() => navigate('/')} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
          <X size={18} className="text-zinc-400" strokeWidth={1.5} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-grow overflow-y-auto p-6 pt-28 flex flex-col gap-6 bg-[#121214] relative">
        <AnimatePresence>
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[80%] rounded-[24px] px-6 py-4 border ${
                msg.role === 'user' 
                  ? 'bg-zinc-800 border-zinc-700 text-white rounded-br-[8px]' 
                  : 'bg-[#0A0A0C] border-white/5 text-zinc-300 rounded-bl-[8px]'
              }`}>
                <p className="text-[15px] font-[400] leading-relaxed">{msg.text}</p>
                {msg.role === 'assistant' && (
                  <button className="mt-3 flex items-center gap-1.5 text-[10px] font-[800] uppercase tracking-widest text-zinc-500 hover:text-white transition-colors">
                    <Volume2 size={14} strokeWidth={1.5} /> Listen
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-[#0A0A0C] border-t border-white/5 shrink-0 z-10">
        <div className="flex items-center gap-3">
          <button className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 shrink-0 hover:text-white transition-colors">
            <Mic size={20} strokeWidth={1.5} />
          </button>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your reply..."
            className="flex-grow h-12 bg-zinc-900 border border-zinc-800 rounded-full px-6 text-[15px] font-[400] text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 transition-all"
          />
          <button 
            onClick={handleSend}
            className="w-12 h-12 rounded-full btn-metal flex items-center justify-center shrink-0 hover:scale-105 active:scale-95 transition-transform"
          >
            <Send size={18} className="translate-x-0.5" strokeWidth={2} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Chat;
