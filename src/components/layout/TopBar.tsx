import React from 'react'
import { Search, Bell, Command } from 'lucide-react'

export default function TopBar() {
  return (
    <header className="h-16 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-xl sticky top-0 z-40 flex items-center justify-between px-8">
      <div className="flex items-center gap-2 text-sm">
        <span className="text-zinc-400 font-mono">system</span>
        <span className="text-zinc-600">/</span>
        <span className="text-zinc-100 font-medium tracking-wide">Command Center</span>
      </div>

      <div className="flex items-center gap-6">
        {/* Global Search Visual */}
        <div className="hidden md:flex items-center gap-3 px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-md text-zinc-400 w-64 hover:border-zinc-700 transition-colors cursor-pointer">
          <Search size={14} />
          <span className="text-xs font-mono flex-1">Search missions...</span>
          <div className="flex items-center gap-1 text-[10px] font-mono bg-zinc-800 px-1.5 py-0.5 rounded text-zinc-300">
            <Command size={10} /> K
          </div>
        </div>

        <button className="relative text-zinc-400 hover:text-zinc-100 transition-colors">
          <Bell size={18} />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-purple-500 rounded-full border-2 border-zinc-950" />
        </button>
      </div>
    </header>
  )
}
