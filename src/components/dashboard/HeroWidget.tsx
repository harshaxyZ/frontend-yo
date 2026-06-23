import React from 'react'
import { Play, Mic2, Activity } from 'lucide-react'

export default function HeroWidget() {
  return (
    <div className="w-full h-full min-h-[360px] bg-white border border-slate-100 rounded-2xl p-8 relative overflow-hidden bento-card shadow-sm flex flex-col justify-between">
      
      {/* Background Abstract Glows (Light Mode) */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-100/50 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-violet-100/50 rounded-full blur-[80px] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest">Active Mission</span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-violet-50 border border-violet-100 text-violet-700">
          <Mic2 size={12} />
          <span className="text-[10px] font-mono font-bold uppercase">Voice Enabled</span>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mt-auto">
        <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 max-w-lg">
          Negotiating a <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
            Software Contract
          </span>
        </h3>
        
        <p className="text-slate-500 text-sm max-w-md mb-8 leading-relaxed font-medium">
          You paused this scenario 2 hours ago. The AI counterpart is waiting for your counter-offer on the licensing terms.
        </p>

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow-lg shadow-blue-500/30 hover:bg-blue-700 hover:-translate-y-0.5 transition-all cursor-pointer border-none outline-none">
            <Play size={16} className="fill-current" />
            Resume Session
          </button>
          
          <button className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-slate-700 font-medium hover:bg-slate-50 hover:text-slate-900 transition-colors border border-slate-200 shadow-sm cursor-pointer">
            <Activity size={16} />
            View Last Transcript
          </button>
        </div>
      </div>

      {/* Decorative Waveform graphic (Right side) */}
      <div className="absolute right-8 bottom-8 flex items-end gap-1 opacity-40 pointer-events-none">
        {[40, 70, 45, 90, 60, 30, 80, 50, 100, 40].map((h, i) => (
          <div 
            key={i} 
            className="w-2 bg-gradient-to-t from-blue-400 to-violet-500 rounded-full" 
            style={{ height: `${h}px` }} 
          />
        ))}
      </div>

    </div>
  )
}
