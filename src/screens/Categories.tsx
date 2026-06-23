import React from 'react';
import { motion } from 'framer-motion';
import { Search, ChevronRight, Briefcase, Coffee, Plane, Utensils } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';

const Categories = () => {
  const categories = [
    { name: 'Daily Life', icon: <Coffee size={24} strokeWidth={1.5} className="text-zinc-400" /> },
    { name: 'Travel & Transport', icon: <Plane size={24} strokeWidth={1.5} className="text-zinc-400" /> },
    { name: 'Work & Career', icon: <Briefcase size={24} strokeWidth={1.5} className="text-zinc-400" /> },
    { name: 'Food & Dining', icon: <Utensils size={24} strokeWidth={1.5} className="text-zinc-400" /> }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col gap-12 w-full max-w-4xl mx-auto pb-32 md:pb-12"
    >
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl md:text-5xl font-[800] tracking-tighter text-white">Practice Library</h1>
        <p className="text-zinc-400 text-lg font-[400]">Choose a scenario or create your own custom bot.</p>
        
        <div className="relative mt-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={20} strokeWidth={1.5} />
          <input 
            type="text" 
            placeholder="Search scenarios..." 
            className="w-full h-14 pl-12 pr-4 bg-[#121214] border border-white/5 rounded-2xl text-[15px] font-[500] text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 transition-all shadow-inner"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {categories.map((cat, i) => (
          <GlassCard key={i} hoverable className="!p-6 flex items-center justify-between group">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-[16px] bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                {cat.icon}
              </div>
              <h3 className="text-xl font-[800] tracking-tight text-white">{cat.name}</h3>
            </div>
            <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 group-hover:text-white transition-colors">
              <ChevronRight size={18} strokeWidth={1.5} />
            </div>
          </GlassCard>
        ))}
      </div>
      
      <div className="mt-8">
        <div className="metal-panel rounded-[32px] p-8 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute right-0 bottom-0 w-[300px] h-[300px] bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-zinc-800/20 via-transparent to-transparent pointer-events-none"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-[800] tracking-tighter text-white">Custom Scenario</h3>
            <p className="text-zinc-400 mt-2 font-[400]">Create a bot with your own specific rules and persona.</p>
          </div>
          <button className="relative z-10 h-12 px-6 btn-metal rounded-full shrink-0 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
            <span className="font-[800] uppercase tracking-widest text-xs">Create Bot</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Categories;
