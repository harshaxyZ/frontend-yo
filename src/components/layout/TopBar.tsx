import React from 'react'
import { Search, Bell, Command } from 'lucide-react'

export default function TopBar() {
  return (
    <header className="h-16 border-b border-slate-200 bg-white/80 backdrop-blur-xl sticky top-0 z-40 flex items-center justify-between px-8">
      <div className="flex items-center gap-2 text-sm">
        <span className="text-slate-400 font-mono">system</span>
        <span className="text-slate-300">/</span>
        <span className="text-slate-900 font-medium tracking-wide">Command Center</span>
      </div>

      <div className="flex items-center gap-6">
        {/* Global Search Visual */}
        <div className="hidden md:flex items-center gap-3 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-md text-slate-400 w-64 hover:border-slate-300 transition-colors cursor-pointer shadow-sm">
          <Search size={14} />
          <span className="text-xs font-mono flex-1">Search missions...</span>
          <div className="flex items-center gap-1 text-[10px] font-mono bg-white border border-slate-200 px-1.5 py-0.5 rounded text-slate-500 shadow-sm">
            <Command size={10} /> K
          </div>
        </div>

        <button className="relative text-slate-500 hover:text-slate-900 transition-colors">
          <Bell size={18} />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-600 rounded-full border-2 border-white" />
        </button>
      </div>
    </header>
  )
}
