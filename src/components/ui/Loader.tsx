import React, { useEffect, useState } from 'react'

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true)
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    // Simulate initial app load
    const timer = setTimeout(() => {
      setOpacity(0)
      setTimeout(() => setIsVisible(false), 500) // wait for fade out transition
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div 
      className="fixed inset-0 z-[100] bg-slate-50 flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out"
      style={{ opacity }}
    >
      <div className="w-16 h-16 border-4 border-indigo-100 border-t-indigo-600 rounded-full animate-spin mb-6" />
      <h2 className="font-display font-bold text-2xl text-slate-900 tracking-tight">SAMVAD</h2>
      <p className="text-slate-500 text-sm font-medium mt-2">Initializing AI Models...</p>
    </div>
  )
}
