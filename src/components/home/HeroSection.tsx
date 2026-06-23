import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Play, ArrowRight } from 'lucide-react'
import Button from '../ui/Button'

export default function HeroSection() {
  const navigate = useNavigate()

  return (
    <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Text Content */}
          <div className="flex-1 max-w-2xl animate-slide-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 font-semibold text-sm mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              SAMVAD AI is live
            </div>
            
            <h1 className="font-display font-extrabold text-5xl lg:text-7xl text-slate-900 leading-[1.1] tracking-tight mb-8">
              Master the art of <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">conversation.</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-slate-500 leading-relaxed mb-10 max-w-xl">
              Step into hyper-realistic AI roleplays. Practice high-stakes negotiations, casual chats, and everything in between—without the anxiety of real-world consequences.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button size="lg" className="w-full sm:w-auto gap-2 group" onClick={() => navigate('/dashboard')}>
                Start Practicing Free
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2" onClick={() => {
                const features = document.getElementById('features')
                features?.scrollIntoView({ behavior: 'smooth' })
              }}>
                <Play size={18} />
                See how it works
              </Button>
            </div>
            
            <p className="mt-6 text-sm text-slate-400 font-medium">No credit card required. Start in seconds.</p>
          </div>

          {/* Right Visual Content */}
          <div className="flex-1 relative w-full max-w-lg lg:max-w-none animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {/* Decorative Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-3xl -z-10" />
            
            {/* Main Floating UI Card Placeholder */}
            <div className="relative bg-white border border-slate-200 rounded-[2rem] shadow-2xl p-8 animate-float">
              {/* Header */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center">
                    <span className="font-display font-bold text-indigo-600 text-lg">AI</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Salary Negotiation</h3>
                    <p className="text-sm text-slate-500">Expert Level</p>
                  </div>
                </div>
                <div className="w-3 h-3 bg-emerald-500 rounded-full" />
              </div>

              {/* Chat lines mock */}
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 shrink-0" />
                  <div className="bg-slate-50 p-4 rounded-2xl rounded-tl-sm w-full">
                    <div className="h-2 w-3/4 bg-slate-200 rounded mb-2" />
                    <div className="h-2 w-1/2 bg-slate-200 rounded" />
                  </div>
                </div>
                
                <div className="flex gap-4 flex-row-reverse">
                  <div className="w-8 h-8 rounded-full bg-slate-200 shrink-0" />
                  <div className="bg-indigo-600 p-4 rounded-2xl rounded-tr-sm w-full">
                    <div className="h-2 w-full bg-indigo-400 rounded mb-2" />
                    <div className="h-2 w-2/3 bg-indigo-400 rounded" />
                  </div>
                </div>
              </div>

              {/* Floating Element */}
              <div className="absolute -bottom-6 -left-6 bg-white border border-slate-200 p-4 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="text-emerald-500 bg-emerald-50 p-2 rounded-lg font-bold">98%</div>
                <div className="text-sm font-semibold text-slate-700">Fluency Score</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
