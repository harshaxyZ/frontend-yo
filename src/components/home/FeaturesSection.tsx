import React from 'react'
import { Brain, Mic, Activity, Globe2 } from 'lucide-react'

export default function FeaturesSection() {
  const features = [
    {
      icon: <Brain size={24} />,
      title: "Hyper-Realistic AI",
      description: "Our models are trained on real-world negotiations and conversations. They push back, ask tough questions, and adapt to your style."
    },
    {
      icon: <Mic size={24} />,
      title: "Real-Time Voice",
      description: "Speak naturally. SAMVAD understands context, tone, and hesitations, providing an immersive practice environment."
    },
    {
      icon: <Activity size={24} />,
      title: "Instant Analytics",
      description: "Get immediate feedback on your fluency, persuasion, and vocabulary right after the session ends."
    },
    {
      icon: <Globe2 size={24} />,
      title: "Endless Scenarios",
      description: "From asking for a raise to navigating a complex border control interview, practice exactly what you need."
    }
  ]

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-900 mb-4">
            Practice makes perfect. <br />
            <span className="text-indigo-600">Without the pressure.</span>
          </h2>
          <p className="text-slate-500 text-lg">
            Everything you need to master difficult conversations and build unstoppable confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-indigo-600 shadow-sm border border-slate-100 mb-6">
                {feature.icon}
              </div>
              <h3 className="font-bold text-slate-900 text-xl mb-3">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
