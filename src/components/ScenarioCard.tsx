import React from 'react'
import { motion } from 'framer-motion'
import { BarChart2, Clock, Mic } from 'lucide-react'

export interface Scenario {
  id: string
  gradient: string
  badge: string
  title: string
  level: string
  duration: string
  type: string
  emoji: string
}

interface ScenarioCardProps {
  scenario: Scenario
}

export default function ScenarioCard({ scenario }: ScenarioCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className="w-[300px] h-[200px] shrink-0 rounded-[20px] overflow-hidden relative cursor-pointer flex flex-col snap-start"
      style={{ background: scenario.gradient }}
    >
      <div className="p-[18px] flex-1 flex flex-col">
        {/* Badge */}
        <div 
          className="inline-flex items-center self-start px-[10px] py-[4px] rounded-[100px]"
          style={{ 
            background: 'rgba(255,255,255,0.2)', 
            backdropFilter: 'blur(4px)',
            color: 'white',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.06em'
          }}
        >
          {scenario.badge}
        </div>

        {/* Title */}
        <h3 
          className="text-white text-[20px] font-[700] mt-[10px] leading-[1.25] whitespace-pre-wrap"
        >
          {scenario.title}
        </h3>

        {/* Meta row */}
        <div className="flex flex-row items-center gap-[12px] mt-[8px]">
          <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px', fontWeight: 500, display: 'flex', alignItems: 'center' }}>
            <BarChart2 size={12} className="mr-[4px]" /> {scenario.level}
          </span>
          <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px', fontWeight: 500, display: 'flex', alignItems: 'center' }}>
            <Clock size={12} className="mr-[4px]" /> {scenario.duration}
          </span>
          <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px', fontWeight: 500, display: 'flex', alignItems: 'center' }}>
            <Mic size={12} className="mr-[4px]" /> {scenario.type}
          </span>
        </div>

        {/* Action Button */}
        <div 
          className="mt-auto self-start inline-flex items-center gap-[6px] px-[16px] py-[8px] rounded-[100px]"
          style={{
            background: 'rgba(255,255,255,0.15)',
            border: '1px solid rgba(255,255,255,0.4)',
            backdropFilter: 'blur(8px)',
            color: 'white',
            fontSize: '13px',
            fontWeight: 600
          }}
        >
          Let's practice <span className="text-[14px]">→</span>
        </div>
      </div>

      {/* Emoji Illustration */}
      <div 
        className="absolute right-[16px] top-[20px] text-[72px]"
        style={{ filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))' }}
      >
        {scenario.emoji}
      </div>
    </motion.div>
  )
}
