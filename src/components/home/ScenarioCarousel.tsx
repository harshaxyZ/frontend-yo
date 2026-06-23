import React from 'react'
import { ArrowRight, Coffee, Car, Briefcase, ChevronRight, BarChart2, Clock } from 'lucide-react'

export default function ScenarioCarousel() {
  const scenarios = [
    {
      id: 1,
      title: "Order Coffee in Bengaluru",
      level: "Intermediate",
      time: "7 min",
      gradient: "from-indigo-600 to-violet-600",
      lightGradient: "from-indigo-50 to-violet-50",
      icon: Coffee,
      badge: "FEATURED"
    },
    {
      id: 2,
      title: "Auto Ride in Indiranagar",
      level: "Beginner",
      time: "5 min",
      gradient: "from-emerald-500 to-teal-500",
      lightGradient: "from-emerald-50 to-teal-50",
      icon: Car,
      badge: "POPULAR"
    },
    {
      id: 3,
      title: "Job Interview at a Startup",
      level: "Advanced",
      time: "15 min",
      gradient: "from-rose-500 to-orange-500",
      lightGradient: "from-rose-50 to-orange-50",
      icon: Briefcase,
      badge: "NEW"
    }
  ]

  return (
    <section className="mt-8 px-6 lg:px-12 w-full animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-display font-bold text-2xl text-slate-900 tracking-tight">
          Trending Scenarios
        </h2>
        <button className="flex items-center gap-1 text-indigo-600 font-medium text-sm hover:text-indigo-700 transition-colors cursor-pointer bg-transparent border-none">
          View all <ChevronRight size={16} />
        </button>
      </div>

      {/* CSS Scroll Snap Container */}
      <div className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-6 pb-8 -mx-6 px-6 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible">
        {scenarios.map((scenario) => {
          const Icon = scenario.icon
          return (
            <div 
              key={scenario.id}
              className={`group relative flex-none w-[85%] sm:w-[320px] lg:w-auto h-[320px] rounded-[2rem] overflow-hidden snap-start cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl bg-gradient-to-br ${scenario.gradient}`}
            >
              {/* Background oversized graphic */}
              <div className="absolute -bottom-10 -right-10 opacity-20 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 pointer-events-none">
                <Icon size={240} color="white" strokeWidth={1} />
              </div>

              {/* Inner Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                    <span className="text-white text-[10px] font-bold tracking-wider uppercase">
                      {scenario.badge}
                    </span>
                  </div>
                  
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20 transition-transform duration-300 group-hover:scale-110">
                    <ArrowRight size={18} color="white" />
                  </div>
                </div>

                <div>
                  <h3 className="font-display font-bold text-3xl leading-[1.15] text-white mb-6">
                    {scenario.title}
                  </h3>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5 text-white/90">
                      <BarChart2 size={16} />
                      <span className="text-xs font-semibold uppercase tracking-wide">{scenario.level}</span>
                    </div>
                    <div className="w-1 h-1 rounded-full bg-white/50" />
                    <div className="flex items-center gap-1.5 text-white/90">
                      <Clock size={16} />
                      <span className="text-xs font-semibold uppercase tracking-wide">{scenario.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
