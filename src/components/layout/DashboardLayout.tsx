import React from 'react'
import DesktopSidebar from './DesktopSidebar'
import TopBar from './TopBar'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 flex font-sans">
      <DesktopSidebar />

      {/* Main Content Area */}
      <main className="flex-1 ml-64 flex flex-col min-h-screen">
        <TopBar />
        <div className="flex-1 p-8">
          <div className="max-w-[1600px] mx-auto w-full h-full">
            {children}
          </div>
        </div>
      </main>
    </div>
  )
}
