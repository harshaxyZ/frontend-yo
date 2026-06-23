import React from 'react'
import { motion } from 'framer-motion'
import { Compass, Target, Clock, User, Settings, Flame, CheckCircle2, ChevronRight } from 'lucide-react'
import { useAppStore } from '../store/useAppStore'

const DesktopLayout = () => {
  const { userName, level } = useAppStore()

  const navItems = [
    { id: 'discover', icon: <Compass size={20} />, label: 'Discover' },
    { id: 'practice', icon: <Target size={20} />, label: 'Practice' },
    { id: 'history', icon: <Clock size={20} />, label: 'History' },
    { id: 'profile', icon: <User size={20} />, label: 'Profile' },
    { id: 'settings', icon: <Settings size={20} />, label: 'Settings' },
  ]

  const activeNav = 'discover'

  return (
    <div className="flex w-full h-[100dvh] bg-[var(--bg-page)] text-[var(--ink)]">
      
      {/* LEFT SIDEBAR */}
      <div className="w-[260px] shrink-0 h-[100dvh] sticky top-0 bg-[var(--bg-card)] border-r border-[var(--border)] p-[28px_16px] flex flex-col gap-1.5">
        
        {/* Logo area */}
        <div className="mb-8 px-3">
          <div className="flex items-center gap-2 mb-1 relative w-8 h-8">
            <div className="absolute left-0 top-0 w-[20px] h-[20px] rounded-[6px] bg-gradient-to-br from-[#2563EB] to-[#1D4ED8]" />
            <div className="absolute left-[8px] top-[6px] w-[18px] h-[18px] rounded-[5px] bg-gradient-to-br from-[#60A5FA] to-[#3B82F6] opacity-75" />
          </div>
          <h1 className="text-[18px] font-[800] tracking-[0.06em] leading-none mt-2">SAMVAD</h1>
          <p className="text-[12px] text-[var(--ink-muted)] mt-1">Language Practice</p>
        </div>

        {/* Nav items */}
        {navItems.map(item => {
          const isActive = activeNav === item.id
          return (
            <div 
              key={item.id}
              className={`flex flex-row items-center gap-3 p-[12px_14px] rounded-[12px] text-[15px] cursor-pointer transition-colors ${
                isActive 
                  ? 'bg-[var(--cobalt-light)] text-[var(--cobalt)] font-[700] border-l-[3px] border-[var(--cobalt)]' 
                  : 'text-[var(--ink-muted)] hover:bg-[var(--bg-subtle)] font-[500]'
              }`}
            >
              {item.icon}
              {item.label}
            </div>
          )
        })}

        {/* User Card */}
        <div className="mt-auto p-[14px] rounded-[16px] bg-[var(--bg-page)] border border-[var(--border)] flex flex-row items-center gap-3">
          <div className="w-[40px] h-[40px] rounded-full bg-[var(--cobalt-light)] flex items-center justify-center text-[18px] font-[700] text-[var(--cobalt)] shrink-0">
            {userName.charAt(0)}
          </div>
          <div className="overflow-hidden">
            <h3 className="text-[15px] font-[700] text-[var(--ink)] truncate">{userName}</h3>
            <p className="text-[12px] text-[var(--ink-muted)] truncate">{level} learner</p>
            <p className="text-[12px] text-[var(--cobalt)] font-[600] mt-1 flex items-center gap-1">
              🔥 12 day streak
            </p>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 overflow-y-auto p-10">
        <h2 className="text-[28px] font-[800] text-[var(--ink)]">Good morning, {userName} 👋</h2>
        <p className="text-[15px] text-[var(--ink-muted)] mt-1">Tuesday, 23 June</p>

        {/* Stat Cards */}
        <div className="grid grid-cols-3 gap-4 mt-7">
          <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-[16px] p-5 shadow-[var(--shadow-card)]">
            <div className="flex items-center gap-2 mb-2"><span className="text-xl">🔥</span></div>
            <div className="text-[36px] font-[800] text-[var(--ink)] leading-none">12</div>
            <p className="text-[14px] text-[var(--ink-muted)] mt-1">Day Streak</p>
          </div>
          <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-[16px] p-5 shadow-[var(--shadow-card)]">
            <div className="flex items-center gap-2 mb-2"><span className="text-xl">✅</span></div>
            <div className="text-[36px] font-[800] text-[var(--ink)] leading-none">8</div>
            <p className="text-[14px] text-[var(--ink-muted)] mt-1">Scenarios Completed</p>
          </div>
          <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-[16px] p-5 shadow-[var(--shadow-card)]">
            <div className="flex items-center gap-2 mb-2"><span className="text-xl">🎯</span></div>
            <div className="text-[36px] font-[800] text-[var(--ink)] leading-none">94%</div>
            <p className="text-[14px] text-[var(--ink-muted)] mt-1">Accuracy</p>
          </div>
        </div>

        {/* Popular Scenarios */}
        <div className="mt-9">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[20px] font-[700] text-[var(--ink)]">Popular Scenarios</h3>
            <span className="text-[14px] text-[var(--cobalt)] font-[600] cursor-pointer hover:underline">See all ›</span>
          </div>
          <div className="grid grid-cols-3 gap-4">
             {/* Example Card 1 */}
             <motion.div whileHover={{ scale: 1.02 }} className="bg-gradient-to-br from-[#1e3a8a] via-[#2563EB] to-[#3B82F6] rounded-[20px] p-5 min-h-[180px] relative overflow-hidden cursor-pointer shadow-[var(--shadow-card)] flex flex-col justify-between">
               <div>
                  <span className="inline-flex bg-white/20 text-white text-[11px] font-[700] px-2.5 py-1 rounded-full tracking-[0.06em] backdrop-blur-sm">✦ POPULAR</span>
                  <h4 className="text-white text-[20px] font-[700] mt-3 leading-[1.25] whitespace-pre-wrap">Order Coffee{"\n"}in Bengaluru</h4>
               </div>
               <div className="text-white/70 text-[12px] font-[500] flex items-center gap-2 mt-4">
                  Intermediate • 7 min • Voice
               </div>
               <div className="absolute right-4 top-4 text-[56px] filter drop-shadow-md">☕</div>
             </motion.div>

             {/* Example Card 2 */}
             <motion.div whileHover={{ scale: 1.02 }} className="bg-gradient-to-br from-[#064E3B] via-[#065F46] to-[#059669] rounded-[20px] p-5 min-h-[180px] relative overflow-hidden cursor-pointer shadow-[var(--shadow-card)] flex flex-col justify-between">
               <div>
                  <span className="inline-flex bg-white/20 text-white text-[11px] font-[700] px-2.5 py-1 rounded-full tracking-[0.06em] backdrop-blur-sm">✦ TRENDING</span>
                  <h4 className="text-white text-[20px] font-[700] mt-3 leading-[1.25] whitespace-pre-wrap">Auto Ride{"\n"}in Indiranagar</h4>
               </div>
               <div className="text-white/70 text-[12px] font-[500] flex items-center gap-2 mt-4">
                  Beginner • 5 min • Voice
               </div>
               <div className="absolute right-4 top-4 text-[56px] filter drop-shadow-md">🛺</div>
             </motion.div>

             {/* Example Card 3 */}
             <motion.div whileHover={{ scale: 1.02 }} className="bg-gradient-to-br from-[#1C1917] via-[#292524] to-[#44403C] rounded-[20px] p-5 min-h-[180px] relative overflow-hidden cursor-pointer shadow-[var(--shadow-card)] flex flex-col justify-between">
               <div>
                  <span className="inline-flex bg-white/20 text-white text-[11px] font-[700] px-2.5 py-1 rounded-full tracking-[0.06em] backdrop-blur-sm">✦ FEATURED</span>
                  <h4 className="text-white text-[20px] font-[700] mt-3 leading-[1.25] whitespace-pre-wrap">Job Interview{"\n"}at a Startup</h4>
               </div>
               <div className="text-white/70 text-[12px] font-[500] flex items-center gap-2 mt-4">
                  Advanced • 12 min • Text+Voice
               </div>
               <div className="absolute right-4 top-4 text-[56px] filter drop-shadow-md">💼</div>
             </motion.div>
          </div>
        </div>

        {/* Continue Learning */}
        <div className="mt-9">
          <h3 className="text-[20px] font-[700] text-[var(--ink)] mb-4">Continue where you left off</h3>
          <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-[20px] p-6 shadow-[var(--shadow-card)] flex items-center justify-between">
            <div className="flex items-center gap-5">
               <div className="w-16 h-16 rounded-[12px] bg-[var(--cobalt-light)] flex items-center justify-center text-[32px]">🛒</div>
               <div>
                 <h4 className="text-[18px] font-[700] text-[var(--ink)]">Grocery Shopping Negotiation</h4>
                 <div className="flex items-center gap-3 mt-2 w-48">
                    <div className="flex-1 h-1.5 bg-[var(--border)] rounded-full overflow-hidden">
                       <div className="h-full bg-[var(--cobalt)] w-[45%] rounded-full" />
                    </div>
                    <span className="text-[12px] font-[600] text-[var(--ink-muted)]">45%</span>
                 </div>
               </div>
            </div>
            <motion.button 
              whileHover={{ scale: 1.02, boxShadow: 'var(--shadow-btn)' }}
              whileTap={{ scale: 0.98 }}
              className="bg-[var(--cobalt)] text-white text-[14px] font-[600] px-6 py-3 rounded-full flex items-center gap-2"
            >
              Resume <ChevronRight size={16} />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DesktopLayout
