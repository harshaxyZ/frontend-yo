import React from 'react'
import { LayoutGrid, Mic2, FileText, Settings } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

export default function MinimalBottomNav() {
  const location = useLocation()
  
  const navItems = [
    { path: '/home', label: 'Discover', icon: LayoutGrid },
    { path: '/practice', label: 'Practice', icon: Mic2 },
    { path: '/history', label: 'History', icon: FileText },
    { path: '/settings', label: 'Settings', icon: Settings },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-zinc-100 flex flex-row items-center justify-around pb-[env(safe-area-inset-bottom)] pt-2 px-2 z-50">
      {navItems.map((item) => {
        const isActive = location.pathname.includes(item.path) || (location.pathname === '/' && item.path === '/home')
        const Icon = item.icon
        
        return (
          <Link 
            key={item.path}
            to={item.path}
            className="flex flex-col items-center justify-center w-16 h-12 gap-1"
          >
            <div className={`flex flex-col items-center transition-all duration-300 ${isActive ? 'text-zinc-900' : 'text-zinc-400'}`}>
              <Icon size={20} strokeWidth={isActive ? 2.5 : 1.5} className={`transition-transform duration-300 ${isActive ? 'scale-110' : ''}`} />
              <span className={`text-[10px] mt-1 font-medium ${isActive ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'} transition-all duration-300`}>
                {item.label}
              </span>
            </div>
          </Link>
        )
      })}
    </nav>
  )
}
