import React from 'react'
import Sidebar from './Sidebar'
import BottomNav from './BottomNav'

interface AppShellProps {
  children: React.ReactNode
}

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex">
      {/* Desktop Sidebar (hidden on mobile) */}
      <div className="hidden lg:block w-72 shrink-0 border-r border-slate-200 bg-white shadow-sm z-50">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 min-w-0 relative pb-24 lg:pb-0">
        <div className="max-w-5xl mx-auto w-full">
          {children}
        </div>
      </main>

      {/* Mobile Bottom Nav (hidden on desktop) */}
      <div className="block lg:hidden fixed bottom-0 left-0 right-0 z-50">
        <BottomNav />
      </div>
    </div>
  )
}
