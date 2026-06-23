import React from 'react'
import HeroWidget from '../components/dashboard/HeroWidget'
import StatsWidget from '../components/dashboard/StatsWidget'
import ScenarioMatrix from '../components/dashboard/ScenarioMatrix'
import ActivityFeed from '../components/dashboard/ActivityFeed'

export default function DashboardHome() {
  return (
    <div className="w-full h-full animate-slide-up">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Welcome back, Harsha.</h2>
          <p className="text-sm text-slate-500 mt-1">Your language models are initialized and ready.</p>
        </div>
      </div>

      {/* The Bento Grid */}
      <div className="grid grid-cols-12 gap-6 auto-rows-[minmax(180px,auto)]">
        
        {/* Top Left: Hero / Continue Practice (Spans 8 cols) */}
        <div className="col-span-8 row-span-2">
          <HeroWidget />
        </div>

        {/* Top Right: Stats (Spans 4 cols) */}
        <div className="col-span-4 row-span-2">
          <StatsWidget />
        </div>

        {/* Bottom Left: Scenario Matrix (Spans 8 cols) */}
        <div className="col-span-8 row-span-2">
          <ScenarioMatrix />
        </div>

        {/* Bottom Right: Activity Feed (Spans 4 cols) */}
        <div className="col-span-4 row-span-2">
          <ActivityFeed />
        </div>

      </div>
    </div>
  )
}
