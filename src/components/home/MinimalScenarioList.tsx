import React from 'react'
import { ArrowRight } from 'lucide-react'

export default function MinimalScenarioList() {
  const scenarios = [
    { title: "Software Licensing Negotiation", level: "Advanced", time: "25m" },
    { title: "Startup Pitch to VCs", level: "Expert", time: "45m" },
    { title: "Performance Review", level: "Intermediate", time: "20m" }
  ]

  return (
    <div className="w-full max-w-xl mx-auto mt-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
      <div className="flex items-center justify-between mb-6 px-4 border-b border-zinc-100 pb-4">
        <h3 className="text-sm font-semibold text-zinc-900">Featured Missions</h3>
        <button className="text-[13px] font-medium text-zinc-500 hover:text-zinc-900 transition-colors bg-transparent border-none cursor-pointer">
          See all
        </button>
      </div>

      <div className="flex flex-col">
        {scenarios.map((scenario, idx) => (
          <div 
            key={idx}
            className="group flex items-center justify-between py-4 px-4 rounded-2xl hover:bg-zinc-50 cursor-pointer transition-colors"
          >
            <div>
              <h4 className="text-[15px] font-semibold text-zinc-900 group-hover:text-zinc-700 transition-colors">
                {scenario.title}
              </h4>
              <div className="flex items-center gap-3 mt-1.5">
                <span className="text-xs font-medium text-zinc-500">{scenario.level}</span>
                <span className="w-1 h-1 rounded-full bg-zinc-200" />
                <span className="text-xs font-medium text-zinc-500">{scenario.time}</span>
              </div>
            </div>
            
            <div className="w-8 h-8 flex items-center justify-center rounded-full text-zinc-300 group-hover:text-zinc-900 group-hover:bg-white group-hover:shadow-sm transition-all duration-300 -translate-x-2 group-hover:translate-x-0 opacity-0 group-hover:opacity-100">
              <ArrowRight size={16} strokeWidth={2} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
