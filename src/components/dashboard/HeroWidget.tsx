import React from 'react'
import { Play, Mic2, Activity } from 'lucide-react'

export default function HeroWidget() {
  return (
    <div className="w-full h-full min-h-[360px] bg-zinc-900 border border-zinc-800 rounded-2xl p-8 relative overflow-hidden bento-card flex flex-col justify-between">
      
      {/* Background Abstract Glows */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Active Mission</span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-950 border border-zinc-800">
          <Mic2 size={12} className="text-purple-400" />
          <span className="text-[10px] font-mono text-zinc-400">Voice Enabled</span>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mt-auto">
        <h3 className="text-4xl md:text-5xl font-bold text-zinc-100 tracking-tight mb-4 max-w-lg">
          Negotiating a <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Software Contract</span>
        </h3>
        
        <p className="text-zinc-400 text-sm max-w-md mb-8 leading-relaxed">
          You paused this scenario 2 hours ago. The AI counterpart is waiting for your counter-offer on the licensing terms.
        </p>

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-6 py-3 rounded-lg bg-zinc-100 text-zinc-950 font-semibold hover:bg-white transition-colors cursor-pointer border-none outline-none">
            <Play size={16} className="fill-current" />
            Resume Session
          </button>
          
          <button className="flex items-center gap-2 px-6 py-3 rounded-lg bg-zinc-800/50 text-zinc-300 font-medium hover:bg-zinc-800 hover:text-zinc-100 transition-colors border border-zinc-700 cursor-pointer">
            <Activity size={16} />
            View Last Transcript
          </button>
        </div>
      </div>

      {/* Decorative Waveform graphic (Right side) */}
      <div className="absolute right-8 bottom-8 flex items-end gap-1 opacity-20 pointer-events-none">
        {[40, 70, 45, 90, 60, 30, 80, 50, 100, 40].map((h, i) => (
          <div 
            key={i} 
            className="w-2 bg-gradient-to-t from-cyan-500 to-purple-500 rounded-full" 
            style={{ height: `${h}px` }} 
          />
        ))}
      </div>

    </div>
  )
}
