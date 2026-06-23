import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Play } from 'lucide-react'
import Button from '../components/ui/Button'

export default function Dashboard() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6">
      
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 animate-slide-up">
        
        <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-100">
          <div>
            <h1 className="font-display font-bold text-2xl text-slate-900">Your Missions</h1>
            <p className="text-slate-500 text-sm mt-1">Select a scenario to begin practice.</p>
          </div>
          <Button variant="ghost" size="sm" onClick={() => navigate('/')} className="gap-2">
            <ArrowLeft size={16} />
            Back to Home
          </Button>
        </div>

        <div className="space-y-4">
          {[
            { title: "Salary Negotiation", difficulty: "Advanced", desc: "Negotiate a 15% raise with a tough AI manager." },
            { title: "Border Control", difficulty: "Intermediate", desc: "Answer questions smoothly at a foreign customs desk." },
            { title: "Startup Pitch", difficulty: "Expert", desc: "Pitch your product to highly critical AI investors." }
          ].map((mission, i) => (
            <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50/50 transition-colors group">
              <div className="mb-4 sm:mb-0">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-bold text-slate-900 group-hover:text-indigo-900">{mission.title}</h3>
                  <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">{mission.difficulty}</span>
                </div>
                <p className="text-sm text-slate-500">{mission.desc}</p>
              </div>
              
              <Button size="sm" className="w-full sm:w-auto shrink-0 gap-2">
                <Play size={14} className="fill-current" />
                Start
              </Button>
            </div>
          ))}
        </div>

      </div>

    </div>
  )
}
