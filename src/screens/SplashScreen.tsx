import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { pageVariants } from '../utils/animations'

export default function SplashScreen() {
  const navigate = useNavigate()
  const [activeDot, setActiveDot] = useState(1)

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home')
    }, 2500)
    
    // Cycle dots just for visual activity
    const interval = setInterval(() => {
      setActiveDot(prev => (prev + 1) % 3)
    }, 600)
    
    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [navigate])

  return (
    <motion.div 
      variants={pageVariants} 
      initial="initial" 
      animate="animate" 
      exit="exit"
      className="absolute inset-0 flex flex-col items-center justify-center"
      style={{ background: 'var(--bg-page)' }}
    >
      {/* Background radial gradients */}
      <div 
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle at 0% 0%, rgba(37,99,235,0.18) 0%, transparent 70%)' }}
      />
      <div 
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle at 100% 100%, rgba(99,102,241,0.12) 0%, transparent 70%)' }}
      />

      <div className="flex flex-col items-center z-10">
        {/* Logo Animation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="relative w-[78px] h-[66px]"
        >
          {/* Left bubble */}
          <div 
            className="absolute left-0 top-0 w-[52px] h-[52px] rounded-[14px]"
            style={{ background: 'linear-gradient(135deg, #2563EB, #1D4ED8)' }}
          />
          {/* Right bubble */}
          <div 
            className="absolute w-[44px] h-[44px] rounded-[12px] opacity-75"
            style={{ 
              background: 'linear-gradient(135deg, #60A5FA, #3B82F6)',
              top: '14px',
              left: '34px' // -18px from right of left bubble = left 52-18 = 34
            }}
          />
        </motion.div>

        <h1 className="mt-[24px] text-[26px] font-[700] text-[var(--ink)] tracking-[0.28em] leading-none ml-[0.28em]">
          SAMVAD
        </h1>
        <p className="mt-[8px] text-[15px] font-[400] text-[var(--ink-muted)] tracking-[0.08em]">
          Language Practice
        </p>
      </div>

      {/* Pagination / Loading Dots */}
      <div className="absolute bottom-12 flex flex-row gap-[6px] items-center">
        {[0, 1, 2].map((idx) => {
          const isActive = activeDot === idx
          return (
            <motion.div
              key={idx}
              layout
              style={{
                height: 8,
                borderRadius: 4,
                background: isActive ? 'var(--cobalt)' : '#D1D5DB'
              }}
              animate={{ width: isActive ? 18 : 8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            />
          )
        })}
      </div>
    </motion.div>
  )
}
