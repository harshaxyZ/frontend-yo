import React from 'react'
import { Flame, BrainCircuit, Timer } from 'lucide-react'

export default function StatsWidget() {
  const stats = [
    { label: 'Day Streak', value: '12', icon: Flame, color: 'text-orange-500', bg: 'bg-orange-50' },
    { label: 'Fluency Score', value: '84%', icon: BrainCircuit, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Minutes Spoken', value: '128', icon: Timer, color: 'text-violet-600', bg: 'bg-violet-50' },
  ]

  return (
    <div className="w-full h-full min-h-[360px] bg-white border border-slate-100 rounded-2xl p-6 bento-card shadow-sm flex flex-col justify-between">
      
      <div>
        <h4 className="text-sm font-semibold text-slate-500 mb-6 uppercase tracking-wider">Performance Metrics</h4>
        
        <div className="flex flex-col gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div key={idx} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${stat.bg}`}>
                    <Icon size={18} className={stat.color} />
                  </div>
                  <span className="text-sm font-medium text-slate-700">{stat.label}</span>
                </div>
                <span className="font-mono text-2xl font-bold text-slate-900">{stat.value}</span>
              </div>
            )
          })}
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-slate-100">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-slate-500 font-mono font-bold">Weekly Goal</span>
          <span className="text-xs text-blue-600 font-mono font-bold">75%</span>
        </div>
        <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full bg-blue-500 rounded-full w-[75%]" />
        </div>
      </div>

    </div>
  )
}
