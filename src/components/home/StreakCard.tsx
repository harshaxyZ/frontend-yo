import React from 'react'
import { Flame, ChevronRight } from 'lucide-react'

export default function StreakCard() {
  return (
    <div className="px-6 lg:px-12 w-full max-w-3xl mt-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
      <div className="bg-white rounded-[1.5rem] p-6 shadow-sm border border-slate-100 flex items-center justify-between cursor-pointer group transition-all duration-300 hover:shadow-md hover:border-slate-200">
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Flame size={28} strokeWidth={2.5} className="text-indigo-600" />
          </div>
          
          <div>
            <div className="flex items-baseline gap-2 mb-1.5">
              <span className="font-display font-bold text-3xl text-slate-900">12</span>
              <span className="text-slate-500 font-medium text-sm uppercase tracking-wide">Day Streak</span>
            </div>
            
            <div className="w-48 h-2 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-indigo-600 rounded-full w-[75%] animate-progress" />
            </div>
          </div>
        </div>
        
        <div className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-slate-50 group-hover:text-indigo-600 group-hover:border-indigo-100 transition-all duration-300">
          <ChevronRight size={20} />
        </div>
      </div>
    </div>
  )
}
