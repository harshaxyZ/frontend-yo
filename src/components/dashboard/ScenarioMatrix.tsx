import React from 'react'
import { Coffee, Car, Briefcase, ArrowUpRight } from 'lucide-react'

export default function ScenarioMatrix() {
  const scenarios = [
    {
      id: 1,
      title: "Order Coffee in Bengaluru",
      level: "Intermediate",
      time: "7m",
      icon: Coffee,
      color: "text-cyan-400",
      bg: "bg-cyan-400/5",
      border: "hover:border-cyan-500/50"
    },
    {
      id: 2,
      title: "Auto Ride in Indiranagar",
      level: "Beginner",
      time: "5m",
      icon: Car,
      color: "text-purple-400",
      bg: "bg-purple-400/5",
      border: "hover:border-purple-500/50"
    },
    {
      id: 3,
      title: "Job Interview at a Startup",
      level: "Advanced",
      time: "15m",
      icon: Briefcase,
      color: "text-orange-400",
      bg: "bg-orange-400/5",
      border: "hover:border-orange-500/50"
    }
  ]

  return (
    <div className="w-full h-full min-h-[300px] bg-zinc-900 border border-zinc-800 rounded-2xl p-6 bento-card">
      
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-sm font-medium text-zinc-400">Mission Matrix</h4>
        <button className="text-xs font-mono text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer bg-transparent border-none">
          VIEW_ALL
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[calc(100%-44px)]">
        {scenarios.map((scenario) => {
          const Icon = scenario.icon
          return (
            <div 
              key={scenario.id}
              className={`group relative flex flex-col justify-between p-5 rounded-xl border border-zinc-800/80 bg-zinc-950/50 transition-all duration-300 ${scenario.border} cursor-pointer hover:bg-zinc-800/30 overflow-hidden`}
            >
              {/* Top Row */}
              <div className="flex items-start justify-between z-10">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${scenario.bg}`}>
                  <Icon size={20} className={scenario.color} />
                </div>
                <ArrowUpRight size={16} className="text-zinc-600 group-hover:text-zinc-300 transition-colors" />
              </div>

              {/* Bottom Row */}
              <div className="z-10 mt-8">
                <h5 className="font-bold text-zinc-100 text-lg leading-tight mb-3">
                  {scenario.title}
                </h5>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">{scenario.level}</span>
                  <span className="w-1 h-1 rounded-full bg-zinc-700" />
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">{scenario.time}</span>
                </div>
              </div>

              {/* Subtle gradient glow on hover */}
              <div className={`absolute -bottom-10 -right-10 w-32 h-32 rounded-full blur-[50px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${scenario.bg.replace('/5', '')}`} />
            </div>
          )
        })}
      </div>

    </div>
  )
}
