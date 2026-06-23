import React from 'react'
import { Sparkles, ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="pt-16 pb-12 px-6 lg:pt-24 lg:px-12 w-full max-w-4xl animate-fade-in-up">
      <div className="flex items-center gap-2 mb-6 text-indigo-600 bg-indigo-50 w-fit px-3 py-1.5 rounded-full border border-indigo-100/50">
        <Sparkles size={16} strokeWidth={2.5} />
        <span className="text-xs font-bold tracking-wide uppercase">Daily Practice</span>
      </div>

      <h1 className="font-display font-bold text-[2.75rem] leading-[1.1] tracking-tight text-slate-900 mb-6 lg:text-6xl lg:leading-[1.05]">
        Master the art of <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-500">
          conversation.
        </span>
      </h1>

      <p className="text-slate-500 text-lg md:text-xl leading-relaxed max-w-2xl mb-10 font-normal">
        Practice real-world scenarios with AI-powered roleplays designed to build your confidence and fluency, one interaction at a time.
      </p>

      <button className="group relative inline-flex items-center gap-3 bg-slate-900 text-white font-medium text-base px-8 py-4 rounded-full overflow-hidden transition-all duration-300 hover:bg-indigo-600 hover:shadow-[0_8px_32px_-8px_rgba(79,70,229,0.5)] hover:-translate-y-0.5 cursor-pointer border-none outline-none">
        <span className="relative z-10 font-semibold tracking-wide">Start your session</span>
        <ArrowRight size={18} strokeWidth={2.5} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </section>
  )
}
