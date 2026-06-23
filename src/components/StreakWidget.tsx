import React from 'react'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

export default function StreakWidget() {
  return (
    <div 
      className="m-[0_20px] rounded-[20px] bg-[var(--bg-card)] border border-[var(--border)] p-[18px] flex items-center gap-[14px]"
      style={{ boxShadow: 'var(--shadow-card)' }}
    >
      {/* Left: flame circle */}
      <div className="w-[40px] h-[40px] rounded-full bg-[#FEF2F2] flex items-center justify-center shrink-0">
        <span className="text-[20px]">🔥</span>
      </div>

      {/* Center */}
      <div className="flex-1">
        <div className="flex flex-row items-baseline">
          <span className="text-[26px] font-[800] text-[var(--ink)] leading-none">12</span>
          <span className="text-[16px] font-[500] text-[var(--ink)] ml-[6px]">Day streak</span>
        </div>
        <p className="text-[13px] text-[var(--ink-muted)] mt-[2px]">
          Keep it going! You're doing great.
        </p>

        {/* Progress bar */}
        <div className="w-full h-[5px] bg-[var(--border)] rounded-[3px] mt-[10px] overflow-hidden">
          <motion.div 
            initial={{ width: '0%' }}
            animate={{ width: '85%' }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.6 }}
            className="h-full rounded-[3px]"
            style={{ background: 'linear-gradient(90deg, var(--cobalt-dark), var(--cobalt))' }}
          />
        </div>
      </div>

      {/* Right */}
      <ChevronRight size={18} color="var(--ink-faint)" />
    </div>
  )
}
