import React from 'react'
import { LayoutGrid, Mic2, FileText, Settings } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

export default function MinimalSidebar() {
  const location = useLocation()
  
  const navItems = [
    { path: '/home', label: 'Discover', icon: LayoutGrid },
    { path: '/practice', label: 'Practice', icon: Mic2 },
    { path: '/history', label: 'History', icon: FileText },
    { path: '/settings', label: 'Settings', icon: Settings },
  ]

  return (
    <aside className="fixed left-0 top-0 h-[100dvh] w-[240px] bg-white flex flex-col pt-12 pb-8 px-6">
      <div className="mb-16 px-3">
        <h1 className="font-bold tracking-tight text-zinc-900 text-xl">SAMVAD</h1>
      </div>

      <nav className="flex flex-col gap-2 flex-1">
        {navItems.map((item) => {
          const isActive = location.pathname.includes(item.path) || (location.pathname === '/' && item.path === '/home')
          const Icon = item.icon
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-4 px-3 py-2.5 rounded-xl transition-all duration-300 ${
                isActive 
                  ? 'bg-zinc-100/50 text-zinc-900 font-medium' 
                  : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50/50'
              }`}
            >
              <Icon size={18} strokeWidth={isActive ? 2.5 : 1.5} />
              <span className="text-[13px]">{item.label}</span>
            </Link>
          )
        })}
      </nav>

      <div className="mt-auto px-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center">
            <span className="text-xs font-medium text-zinc-600">H</span>
          </div>
          <span className="text-[13px] text-zinc-600 font-medium">Harsha</span>
        </div>
      </div>
    </aside>
  )
}
