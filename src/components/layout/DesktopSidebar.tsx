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
    <aside className="w-64 h-[100dvh] bg-white border-r border-slate-200 flex flex-col pt-6 pb-8 px-4 fixed left-0 top-0 z-50">
      <div className="flex items-center gap-3 px-2 mb-10">
        <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
          S
        </div>
        <span className="font-bold tracking-widest text-slate-900 text-sm uppercase">Samvad</span>
      </div>

      <div className="flex flex-col gap-1 flex-1">
        <div className="px-2 mb-2">
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Main Menu</span>
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
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
              {item.label}
            </Link>
          )
        })}
      </div>

      <div className="mt-auto px-2">
        <div className="p-3 rounded-lg bg-white border border-slate-200 flex items-center gap-3 cursor-pointer hover:border-slate-300 transition-colors shadow-sm">
          <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center">
            <span className="text-xs font-bold text-slate-600">HW</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-medium text-slate-900">Harsha W.</span>
            <span className="text-[10px] text-slate-500">Pro Plan</span>
          </div>
        </div>
      </div>
    </aside>
  )
}
