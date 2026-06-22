import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play, Mic, MessageSquare, ArrowRight, Activity } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const navigate = useNavigate();
  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  const streakRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animations for desktop grid
      gsap.fromTo(
        headerRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power4.out', delay: 0.1 }
      );

      gsap.fromTo(
        '.stagger-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        streakRef.current,
        { scale: 0.95, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: 'elastic.out(1, 0.7)',
          scrollTrigger: {
            trigger: streakRef.current,
            start: 'top 90%',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col gap-12 lg:gap-20 w-full"
    >
      {/* Hero Section */}
      <section ref={headerRef} className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pt-4">
        <div className="flex flex-col gap-4 max-w-2xl">
          <p className="text-sm font-[600] uppercase tracking-widest text-[#71717A]">Welcome back, Harsha</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-[800] tracking-tighter leading-[1.1] text-balance">
            Master communication.<br />
            <span className="text-[#A1A1AA]">No pressure.</span>
          </h1>
          <p className="text-lg text-[#71717A] max-w-lg mt-4 leading-relaxed font-[400]">
            Drop the scripts. Engage in ultra-realistic AI roleplays designed to build your conversational muscle in Kannada and English.
          </p>
        </div>
        
        <div className="flex gap-4 lg:flex-col shrink-0">
          <button onClick={() => navigate('/categories')} className="h-14 px-8 bg-[#09090B] text-white rounded-full flex items-center justify-center gap-2 hover:bg-[#18181B] active:scale-95 transition-all shadow-xl shadow-black/10">
            <Play fill="currentColor" size={18} />
            <span className="font-[600] uppercase tracking-widest text-sm">Start Session</span>
          </button>
        </div>
      </section>

      {/* Streak / Stats Section */}
      <section ref={streakRef} className="w-full">
        <GlassCard className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 overflow-hidden relative">
          <div className="absolute right-0 top-0 w-64 h-64 bg-[#E4E4E7] rounded-full blur-[100px] opacity-20 pointer-events-none -translate-y-1/2 translate-x-1/4"></div>
          
          <div className="flex items-center gap-6 z-10">
            <div className="w-16 h-16 rounded-2xl bg-[#09090B] text-white flex items-center justify-center shrink-0">
              <Activity size={28} />
            </div>
            <div>
              <h3 className="text-3xl font-[800] tracking-tighter">12 Day Streak</h3>
              <p className="text-[#71717A] font-[500] mt-1">You're in the top 5% of active learners this week.</p>
            </div>
          </div>
          
          <div className="w-full sm:w-64 h-2 bg-[#E4E4E7] rounded-full overflow-hidden shrink-0 z-10">
            <div className="h-full bg-[#09090B] rounded-full w-[75%] relative">
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-r from-transparent to-white/30"></div>
            </div>
          </div>
        </GlassCard>
      </section>

      {/* Scenarios Grid */}
      <section ref={cardsRef} className="flex flex-col gap-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-[800] tracking-tighter">Featured Scenarios</h2>
            <p className="text-[#71717A] mt-2 font-[500]">Curated roleplays for everyday situations.</p>
          </div>
          <button onClick={() => navigate('/categories')} className="hidden sm:flex items-center gap-2 text-sm font-[600] uppercase tracking-widest text-[#09090B] hover:text-[#71717A] transition-colors">
            View Library <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <GlassCard hoverable dark className="stagger-card group flex flex-col justify-end min-h-[360px] relative overflow-hidden" onClick={() => navigate('/chat/coffee')}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
            {/* Abstract Graphic */}
            <div className="absolute inset-0 bg-[#121212] z-0 flex items-center justify-center">
               <div className="w-[120%] h-[120%] border border-white/5 rounded-full absolute -top-1/4 -right-1/4 group-hover:scale-105 transition-transform duration-700"></div>
               <div className="w-[80%] h-[80%] border border-white/10 rounded-full absolute -top-10 -right-10"></div>
            </div>

            <div className="relative z-20 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-[600] uppercase tracking-widest text-white">Popular</span>
                <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-[600] uppercase tracking-widest text-white flex items-center gap-1"><Mic size={12}/> Voice</span>
              </div>
              <h3 className="text-3xl font-[800] tracking-tighter leading-tight mt-2">Order Coffee<br/>in Bengaluru</h3>
              <p className="text-[#A1A1AA] font-[400] text-sm">7 min &bull; Intermediate</p>
            </div>
          </GlassCard>

          {/* Card 2 */}
          <GlassCard hoverable className="stagger-card group flex flex-col justify-end min-h-[360px] relative overflow-hidden" onClick={() => navigate('/chat/auto')}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent z-10"></div>
            <div className="relative z-20 flex flex-col gap-3 mt-auto">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-black/5 backdrop-blur-md border border-black/5 rounded-full text-xs font-[600] uppercase tracking-widest text-[#09090B]">Trending</span>
              </div>
              <h3 className="text-3xl font-[800] tracking-tighter leading-tight mt-2">Auto Ride to<br/>Indiranagar</h3>
              <p className="text-[#71717A] font-[400] text-sm">5 min &bull; Beginner</p>
            </div>
          </GlassCard>

          {/* Card 3 */}
          <GlassCard hoverable className="stagger-card group flex flex-col justify-end min-h-[360px] relative overflow-hidden" onClick={() => navigate('/chat/interview')}>
             <div className="absolute inset-0 bg-[#E4E4E7]/30 z-0 group-hover:bg-[#E4E4E7]/50 transition-colors duration-500"></div>
             <div className="relative z-20 flex flex-col gap-3 mt-auto">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-black/5 backdrop-blur-md border border-black/5 rounded-full text-xs font-[600] uppercase tracking-widest text-[#09090B]">Advanced</span>
              </div>
              <h3 className="text-3xl font-[800] tracking-tighter leading-tight mt-2">Job Interview<br/>Preparation</h3>
              <p className="text-[#71717A] font-[400] text-sm">10 min &bull; Advanced</p>
            </div>
          </GlassCard>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
