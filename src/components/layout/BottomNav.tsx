import React from 'react'
import { Compass, Target, Clock, User } from 'lucide-react'
import { useLocation, Link } from 'react-router-dom'

export default function BottomNav() {
  const location = useLocation()
  
  const navItems = [
    { path: '/home', label: 'Discover', icon: Compass },
    { path: '/practice', label: 'Practice', icon: Target },
    { path: '/history', label: 'History', icon: Clock },
    { path: '/profile', label: 'Profile', icon: User },
  ]

  return (
    <nav className="bg-white/90 backdrop-blur-xl border-t border-slate-200/50 flex flex-row items-center justify-around pb-[env(safe-area-inset-bottom)] pt-2 shadow-[0_-4px_24px_rgba(0,0,0,0.02)]">
      {navItems.map((item) => {
        const isActive = location.pathname.includes(item.path) || (location.pathname === '/' && item.path === '/home')
        const Icon = item.icon
        
        return (
          <Link 
            key={item.path}
            to={item.path}
            className="flex flex-col items-center justify-center w-16 h-14 gap-1 cursor-pointer"
          >
            <div className={`flex flex-col items-center transition-all duration-300 ${isActive ? 'text-indigo-600 scale-110' : 'text-slate-400'}`}>
              <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              <span className={`text-[10px] font-medium mt-1 tracking-wide ${isActive ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'} transition-all duration-300`}>
                {item.label}
              </span>
            </div>
          </Link>
        )
      })}
    </nav>
  )
}
