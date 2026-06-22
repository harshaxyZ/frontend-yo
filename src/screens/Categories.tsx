import React from 'react';
import { motion } from 'framer-motion';
import { Search, ChevronRight } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';

const Categories = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col gap-12 w-full max-w-4xl mx-auto"
    >
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl md:text-5xl font-[800] tracking-tighter">Practice Library</h1>
        <p className="text-[#71717A] text-lg font-[500]">Choose a scenario or create your own custom bot.</p>
        
        <div className="relative mt-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A1A1AA]" size={20} />
          <input 
            type="text" 
            placeholder="Search scenarios (e.g., coffee, airport)..." 
            className="w-full h-14 pl-12 pr-4 bg-white border border-[#E4E4E7] rounded-full text-[15px] font-[500] placeholder:text-[#A1A1AA] focus:outline-none focus:border-[#09090B] focus:ring-1 focus:ring-[#09090B] transition-all shadow-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {['Daily Life', 'Travel & Transport', 'Work & Career', 'Food & Dining'].map((cat) => (
          <GlassCard key={cat} hoverable className="!p-6 flex items-center justify-between group">
            <h3 className="text-xl font-[800] tracking-tight text-[#09090B]">{cat}</h3>
            <div className="w-10 h-10 rounded-full bg-[#FAFAFA] flex items-center justify-center group-hover:bg-[#09090B] group-hover:text-white transition-colors border border-[#E4E4E7] group-hover:border-[#09090B]">
              <ChevronRight size={18} />
            </div>
          </GlassCard>
        ))}
      </div>
      
      <div className="mt-8">
        <GlassCard hoverable dark className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-[800] tracking-tighter">Custom Scenario</h3>
            <p className="text-[#A1A1AA] mt-2 font-[500] text-sm">Create a bot with your own specific rules and persona.</p>
          </div>
          <button className="h-12 px-6 bg-white text-[#09090B] text-sm font-[600] uppercase tracking-widest rounded-full shrink-0 shadow-lg">
            Create Bot
          </button>
        </GlassCard>
      </div>
    </motion.div>
  );
};

export default Categories;
