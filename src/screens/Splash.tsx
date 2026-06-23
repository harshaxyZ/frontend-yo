import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Splash() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home')
    }, 2500)
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="relative w-full h-[100dvh] bg-slate-900 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 w-full animate-fade-in-up">
        {/* Logo */}
        <div className="w-20 h-20 bg-indigo-600 rounded-[1.5rem] flex items-center justify-center shadow-[0_0_60px_rgba(79,70,229,0.4)] mb-8">
          <span className="font-display font-black text-5xl text-white">S</span>
        </div>

        <h1 className="font-display font-bold text-4xl tracking-tight text-white mb-3">
          SAMVAD
        </h1>
        <p className="text-indigo-200/80 font-medium tracking-widest uppercase text-sm">
          Language Practice
        </p>
      </div>

      {/* Progress Line */}
      <div className="absolute bottom-16 w-full max-w-[240px] px-8 z-10">
        <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-indigo-500 rounded-full w-0 animate-progress" />
        </div>
      </div>
    </div>
  )
}
