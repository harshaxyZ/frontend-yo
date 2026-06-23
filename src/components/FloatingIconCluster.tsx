import React from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, AudioLines, AlignLeft } from 'lucide-react'

export default function FloatingIconCluster() {
  const icons = [
    { id: 1, icon: MessageSquare, top: 0, right: 16 },
    { id: 2, icon: AudioLines, top: 60, right: 52 },
    { id: 3, icon: AlignLeft, top: 120, right: 20 },
  ]

  return (
    <div className="w-[160px] h-[180px] shrink-0 relative">
      {/* Background radial blob */}
      <div 
        className="absolute w-[150px] h-[150px] rounded-full top-[-10px] right-[-10px]"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.10) 0%, transparent 70%)' }}
      />

      {/* Dashed SVG connector */}
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <path 
          d="M 118 24 Q 80 60 84 80 Q 88 110 104 144" 
          stroke="#BFDBFE" 
          strokeWidth="1.5" 
          strokeDasharray="4 4" 
          fill="none"
        />
      </svg>

      {/* Floating dots */}
      <div 
        className="absolute w-[8px] h-[8px] rounded-full bg-[#BFDBFE]"
        style={{ top: 45, right: 8 }}
      />
      <div 
        className="absolute w-[5px] h-[5px] rounded-full bg-[#BFDBFE]"
        style={{ top: 100, right: 130 }}
      />

      {/* Icon Cards */}
      {icons.map((item, index) => {
        const Icon = item.icon
        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 * index, type: 'spring', stiffness: 200, damping: 20 }}
            className="absolute bg-white rounded-[14px] p-[10px]"
            style={{ 
              top: item.top, 
              right: item.right, 
              boxShadow: 'var(--shadow-card)' 
            }}
          >
            <Icon size={18} color="var(--cobalt)" />
          </motion.div>
        )
      })}
    </div>
  )
}
