import React from 'react'
import MinimalSidebar from './MinimalSidebar'
import MinimalBottomNav from './MinimalBottomNav'

interface AppLayoutProps {
  children: React.ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans">
      
      {/* Desktop Navigation */}
      <div className="hidden lg:block">
        <MinimalSidebar />
      </div>

      {/* Main Content Area */}
      {/* Note: margin-left for desktop to avoid sidebar, bottom padding for mobile to avoid bottom nav */}
      <main className="flex-1 w-full lg:ml-[240px] pb-24 lg:pb-0 min-h-[100dvh]">
        <div className="max-w-3xl mx-auto w-full h-full px-6 lg:px-12 pt-12 lg:pt-20">
          {children}
        </div>
      </main>

      {/* Mobile Navigation */}
      <div className="block lg:hidden">
        <MinimalBottomNav />
      </div>
      
    </div>
  )
}
