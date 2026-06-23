import React from 'react'
import { Flame, BrainCircuit, Timer } from 'lucide-react'

export default function StatsWidget() {
  const stats = [
    { label: 'Day Streak', value: '12', icon: Flame, color: 'text-orange-400', bg: 'bg-orange-400/10' },
    { label: 'Fluency Score', value: '84%', icon: BrainCircuit, color: 'text-cyan-400', bg: 'bg-cyan-400/10' },
    { label: 'Minutes Spoken', value: '128', icon: Timer, color: 'text-purple-400', bg: 'bg-purple-400/10' },
  ]

  return (
    <div className="w-full h-full min-h-[360px] bg-zinc-900 border border-zinc-800 rounded-2xl p-6 bento-card flex flex-col justify-between">
      
      <div>
        <h4 className="text-sm font-medium text-zinc-400 mb-6">Performance Metrics</h4>
        
        <div className="flex flex-col gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div key={idx} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${stat.bg}`}>
                    <Icon size={18} className={stat.color} />
                  </div>
                  <span className="text-sm font-medium text-zinc-300">{stat.label}</span>
                </div>
                <span className="font-mono text-2xl font-bold text-zinc-100">{stat.value}</span>
              </div>
            )
          })}
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-zinc-800/50">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-zinc-500 font-mono">Weekly Goal</span>
          <span className="text-xs text-zinc-300 font-mono">75%</span>
        </div>
        <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
          <div className="h-full bg-zinc-100 rounded-full w-[75%]" />
        </div>
      </div>

    </div>
  )
}
