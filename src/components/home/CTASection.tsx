import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../ui/Button'

export default function CTASection() {
  const navigate = useNavigate()

  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-slate-900 rounded-[2.5rem] p-12 lg:p-20 text-center relative overflow-hidden">
          
          {/* Decorative background glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-2xl bg-indigo-500/20 blur-[100px] pointer-events-none rounded-full" />

          <div className="relative z-10">
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-white mb-6 tracking-tight">
              Ready to find your voice?
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
              Join thousands of professionals who use SAMVAD to prepare for their most important conversations.
            </p>
            
            <Button size="lg" variant="primary" className="shadow-xl shadow-indigo-500/20" onClick={() => navigate('/dashboard')}>
              Start your first mission
            </Button>
            <p className="mt-6 text-sm text-slate-500">Free forever for basic scenarios.</p>
          </div>
          
        </div>
      </div>
    </section>
  )
}
