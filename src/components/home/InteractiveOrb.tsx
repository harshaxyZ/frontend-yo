import React, { useState } from 'react'
import { Mic } from 'lucide-react'

export default function InteractiveOrb() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="flex flex-col items-center justify-center py-12 lg:py-20 animate-fade-in">
      
      <div 
        className="relative flex items-center justify-center w-48 h-48 cursor-pointer group orb-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Core Orb */}
        <div className={`absolute w-32 h-32 rounded-full bg-gradient-to-br from-zinc-100 to-white shadow-[0_0_40px_rgba(0,0,0,0.03)] border border-zinc-100 flex items-center justify-center transition-all duration-700 z-10 ${isHovered ? 'scale-110 shadow-[0_0_60px_rgba(0,0,0,0.08)]' : 'orb-idle'}`}>
          <Mic size={28} className={`transition-colors duration-500 ${isHovered ? 'text-zinc-900' : 'text-zinc-400'}`} strokeWidth={1.5} />
        </div>

        {/* Ambient Rings */}
        <div className="orb-ring" />
        <div className="orb-ring" />
        <div className="orb-ring" />
      </div>

      <div className="text-center mt-12 transition-all duration-500">
        <h2 className={`font-bold text-3xl tracking-tight transition-colors duration-500 ${isHovered ? 'text-zinc-900' : 'text-zinc-800'}`}>
          {isHovered ? "Start Session" : "Ready to practice."}
        </h2>
        <p className={`mt-3 text-[15px] font-medium transition-all duration-500 ${isHovered ? 'text-zinc-500 opacity-100' : 'text-zinc-400 opacity-80'}`}>
          Tap the orb to begin your next scenario.
        </p>
      </div>

    </div>
  )
}
