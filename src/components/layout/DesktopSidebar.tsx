import React from 'react'
import { LayoutDashboard, Target, BookOpen, BarChart3, Settings } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

export default function DesktopSidebar() {
  const location = useLocation()
  
  const navItems = [
    { path: '/home', label: 'Command Center', icon: LayoutDashboard },
    { path: '/scenarios', label: 'Missions', icon: Target },
    { path: '/history', label: 'Transcripts', icon: BookOpen },
    { path: '/analysis', label: 'Analytics', icon: BarChart3 },
    { path: '/settings', label: 'Settings', icon: Settings },
  ]

  return (
    <aside className="w-64 h-[100dvh] bg-zinc-950 border-r border-zinc-800 flex flex-col pt-6 pb-8 px-4 fixed left-0 top-0">
      <div className="flex items-center gap-3 px-2 mb-10">
        <div className="w-8 h-8 rounded bg-cyan-400 flex items-center justify-center text-zinc-950 font-bold text-sm">
          S
        </div>
        <span className="font-bold tracking-widest text-zinc-100 text-sm uppercase">Samvad</span>
      </div>

      <div className="flex flex-col gap-1 flex-1">
        <div className="px-2 mb-2">
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Main Menu</span>
        </div>
        
        {navItems.map((item) => {
          const isActive = location.pathname.includes(item.path) || (location.pathname === '/' && item.path === '/home')
          const Icon = item.icon
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium ${
                isActive 
                  ? 'bg-zinc-800/50 text-cyan-400' 
                  : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900'
              }`}
            >
              <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
              {item.label}
            </Link>
          )
        })}
      </div>

      <div className="mt-auto px-2">
        <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center gap-3 cursor-pointer hover:border-zinc-700 transition-colors">
          <div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center">
            <span className="text-xs font-bold text-zinc-300">HW</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-medium text-zinc-200">Harsha W.</span>
            <span className="text-[10px] text-zinc-500">Pro Plan</span>
          </div>
        </div>
      </div>
    </aside>
  )
}
