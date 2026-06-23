import React from 'react'
import { FileText, Presentation, Users, ArrowUpRight } from 'lucide-react'

export default function ScenarioMatrix() {
  const scenarios = [
    {
      id: 1,
      title: "Software Licensing Negotiation",
      level: "Advanced",
      time: "25m",
      icon: FileText,
      color: "text-blue-600",
      bg: "bg-blue-50",
      hoverBorder: "hover:border-blue-400"
    },
    {
      id: 2,
      title: "Startup Pitch to VCs",
      level: "Expert",
      time: "45m",
      icon: Presentation,
      color: "text-violet-600",
      bg: "bg-violet-50",
      hoverBorder: "hover:border-violet-400"
    },
    {
      id: 3,
      title: "Performance Review",
      level: "Intermediate",
      time: "20m",
      icon: Users,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      hoverBorder: "hover:border-emerald-400"
    }
  ]

  return (
    <div className="w-full h-full min-h-[300px] bg-white border border-slate-100 rounded-2xl p-6 shadow-sm bento-card">
      
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Mission Matrix</h4>
        <button className="text-xs font-mono font-bold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer bg-transparent border-none">
          VIEW_ALL
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[calc(100%-44px)]">
        {scenarios.map((scenario) => {
          const Icon = scenario.icon
          return (
            <div 
              key={scenario.id}
              className={`group relative flex flex-col justify-between p-5 rounded-xl border border-slate-200 bg-slate-50 transition-all duration-300 ${scenario.hoverBorder} cursor-pointer hover:bg-white hover:shadow-lg hover:-translate-y-1 overflow-hidden`}
            >
              {/* Top Row */}
              <div className="flex items-start justify-between z-10">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${scenario.bg}`}>
                  <Icon size={20} className={scenario.color} />
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                  <ArrowUpRight size={16} className="text-slate-400 group-hover:text-blue-600" />
                </div>
              </div>

              {/* Bottom Row */}
              <div className="z-10 mt-8">
                <h5 className="font-bold text-slate-900 text-lg leading-tight mb-3">
                  {scenario.title}
                </h5>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">{scenario.level}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300" />
                  <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">{scenario.time}</span>
                </div>
              </div>

              {/* Decorative accent block */}
              <div className={`absolute bottom-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${scenario.bg.replace('50', '500')}`} />
            </div>
          )
        })}
      </div>

    </div>
  )
}
