import React from 'react';
import { motion } from 'framer-motion';
import { Play, Mic, Activity, Zap, Headphones, Compass } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col gap-8 w-full max-w-6xl mx-auto pb-32 md:pb-12"
    >
      {/* Hero Bento */}
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {/* Main Welcome - spans 2 cols on desktop */}
        <motion.div variants={fadeUp} className="md:col-span-2">
          <div className="metal-panel rounded-[32px] p-8 md:p-12 h-full flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/40 via-transparent to-transparent -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
            
            <p className="text-sm font-[600] uppercase tracking-widest text-zinc-500 mb-4">Welcome back, Harsha</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-[800] tracking-tighter leading-[1.05] text-balance">
              <span className="text-titanium">Master communication.</span><br />
              No pressure.
            </h1>
            <p className="text-lg text-zinc-400 mt-6 leading-relaxed max-w-md font-[400]">
              Engage in ultra-realistic AI roleplays designed to build your conversational muscle.
            </p>
            
            <div className="mt-8">
              <button onClick={() => navigate('/categories')} className="h-14 px-8 btn-metal rounded-full flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-transform w-fit">
                <Play fill="currentColor" size={16} />
                <span className="font-[800] uppercase tracking-widest text-sm">Start Session</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Streak Bento Block */}
        <motion.div variants={fadeUp} className="h-full">
          <div className="metal-panel rounded-[32px] p-8 h-full flex flex-col items-center justify-center text-center relative group">
            <div className="w-20 h-20 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_60px_rgba(255,255,255,0.1)] transition-shadow duration-500">
              <Activity size={32} className="text-zinc-300" strokeWidth={1.5} />
            </div>
            <h3 className="text-4xl font-[800] tracking-tighter">12 Day</h3>
            <p className="text-zinc-500 font-[600] tracking-widest uppercase text-xs mt-2">Active Streak</p>
            
            <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden mt-6">
              <div className="h-full bg-zinc-400 rounded-full w-[75%] relative">
                <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-r from-transparent to-white/50"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Featured Scenarios Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="flex items-end justify-between mb-6 px-2">
          <div>
            <h2 className="text-2xl font-[800] tracking-tighter text-white">Featured Scenarios</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <motion.div variants={fadeUp} className="h-full">
            <GlassCard hoverable className="h-full min-h-[320px] flex flex-col justify-between" onClick={() => navigate('/chat/coffee')}>
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-[16px] bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                  <Mic size={20} className="text-zinc-400" strokeWidth={1.5} />
                </div>
                <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-[10px] font-[800] uppercase tracking-widest text-zinc-300">Popular</span>
              </div>
              <div>
                <h3 className="text-3xl font-[800] tracking-tighter leading-tight text-white mb-2">Order Coffee<br/>in Bengaluru</h3>
                <p className="text-zinc-500 font-[500] text-sm">7 min &bull; Intermediate</p>
              </div>
            </GlassCard>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={fadeUp} className="h-full">
            <GlassCard hoverable className="h-full min-h-[320px] flex flex-col justify-between" onClick={() => navigate('/chat/auto')}>
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-[16px] bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                  <Compass size={20} className="text-zinc-400" strokeWidth={1.5} />
                </div>
                <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-[10px] font-[800] uppercase tracking-widest text-zinc-300">Trending</span>
              </div>
              <div>
                <h3 className="text-3xl font-[800] tracking-tighter leading-tight text-white mb-2">Auto Ride to<br/>Indiranagar</h3>
                <p className="text-zinc-500 font-[500] text-sm">5 min &bull; Beginner</p>
              </div>
            </GlassCard>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={fadeUp} className="h-full">
            <GlassCard hoverable className="h-full min-h-[320px] flex flex-col justify-between" onClick={() => navigate('/chat/interview')}>
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-[16px] bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                  <Headphones size={20} className="text-zinc-400" strokeWidth={1.5} />
                </div>
                <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-[10px] font-[800] uppercase tracking-widest text-zinc-300">Advanced</span>
              </div>
              <div>
                <h3 className="text-3xl font-[800] tracking-tighter leading-tight text-white mb-2">Job Interview<br/>Preparation</h3>
                <p className="text-zinc-500 font-[500] text-sm">10 min &bull; Advanced</p>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
