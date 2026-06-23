import React from 'react'
import { Compass, Target, Clock, User, LogOut } from 'lucide-react'
import { useLocation, Link } from 'react-router-dom'

export default function Sidebar() {
  const location = useLocation()
  
  const navItems = [
    { path: '/home', label: 'Discover', icon: Compass },
    { path: '/practice', label: 'Practice', icon: Target },
    { path: '/history', label: 'History', icon: Clock },
    { path: '/profile', label: 'Profile', icon: User },
  ]

  return (
    <aside className="fixed top-0 left-0 h-[100dvh] w-72 bg-white flex flex-col justify-between py-8 px-6 shadow-[1px_0_0_0_#f1f5f9]">
      <div>
        <div className="flex items-center gap-3 mb-12">
          <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-display font-bold text-xl">
            S
          </div>
          <h1 className="font-display font-bold text-2xl tracking-tight text-slate-900">SAMVAD</h1>
        </div>

        <nav className="flex flex-col gap-2">
          {navItems.map((item) => {
            const isActive = location.pathname.includes(item.path) || (location.pathname === '/' && item.path === '/home')
            const Icon = item.icon
            
            return (
              <Link 
                key={item.path}
                to={item.path}
                className={`flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-200 cursor-pointer ${
                  isActive 
                    ? 'bg-indigo-50 text-indigo-700 font-semibold' 
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900 font-medium'
                }`}
              >
                <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                <span className="text-base">{item.label}</span>
              </Link>
            )
          })}
        </nav>
      </div>

      <button className="flex items-center gap-4 px-4 py-3.5 rounded-xl text-slate-400 hover:text-rose-500 hover:bg-rose-50 transition-all duration-200 w-full text-left font-medium">
        <LogOut size={22} />
        <span className="text-base">Sign Out</span>
      </button>
    </aside>
  )
}
