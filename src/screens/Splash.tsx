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
    <div className="relative w-full h-[100dvh] flex flex-col items-center justify-center overflow-hidden z-10">
      {/* Background orbs */}
      <div 
        className="absolute top-[-50px] left-[-50px] w-[200px] h-[200px] rounded-full z-0"
        style={{ background: '#C4B5E0', filter: 'blur(80px)', opacity: 0.25, animation: 'float 6s ease-in-out infinite 0s' }}
      />
      <div 
        className="absolute bottom-[-40px] right-[-40px] w-[180px] h-[180px] rounded-full z-0"
        style={{ background: '#A7C7E7', filter: 'blur(80px)', opacity: 0.2, animation: 'float 6s ease-in-out infinite 2s' }}
      />
      <div 
        className="absolute bottom-[20%] left-[-30px] w-[150px] h-[150px] rounded-full z-0"
        style={{ background: '#E8B4B8', filter: 'blur(60px)', opacity: 0.2, animation: 'float 6s ease-in-out infinite 4s' }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 w-full">
        {/* Logo */}
        <div 
          className="relative w-[100px] h-[100px] flex items-center justify-center"
          style={{ animation: 'scaleIn 0.6s ease-out' }}
        >
          <div 
            className="absolute top-[5px] left-[5px] w-[80px] h-[70px]"
            style={{ background: '#C4B5E0', borderRadius: '24px 24px 24px 8px' }}
          />
          <div 
            className="absolute bottom-[5px] right-[5px] w-[70px] h-[60px]"
            style={{ background: '#A7C7E7', borderRadius: '24px 24px 8px 24px' }}
          />
        </div>

        <div style={{ animation: 'fadeUp 0.6s ease-out 0.2s both' }} className="flex flex-col items-center mt-[32px]">
          <h1 
            style={{ 
              fontSize: '28px', 
              fontWeight: 800, 
              letterSpacing: '8px', 
              color: 'var(--text-primary)',
              marginRight: '-8px' // offset for letter spacing centering
            }}
          >
            SAMVAD
          </h1>
          <p 
            style={{ 
              fontSize: '14px', 
              fontWeight: 400, 
              letterSpacing: '4px', 
              color: 'var(--text-secondary)',
              textTransform: 'uppercase',
              marginTop: '12px',
              marginRight: '-4px'
            }}
          >
            Language Practice
          </p>
        </div>
      </div>

      {/* Progress Footer */}
      <div className="absolute bottom-[48px] w-full px-[48px] flex flex-col items-center z-10">
        <div className="w-[120px] h-[4px] bg-[#E5E5E5] rounded-[2px] overflow-hidden">
          <div 
            className="h-full rounded-[2px]"
            style={{ 
              background: 'linear-gradient(90deg, #C4B5E0, #A7C7E7)',
              animation: 'fillProgress 2s ease-out 0.5s both'
            }}
          />
        </div>
        
        <div className="flex flex-row gap-[6px] mt-[24px]">
          <span className="w-[24px] h-[8px] rounded-[4px] bg-[var(--coral)]" />
          <span className="w-[8px] h-[8px] rounded-full bg-[#E5E5E5]" />
          <span className="w-[8px] h-[8px] rounded-full bg-[#E5E5E5]" />
        </div>
      </div>
    </div>
  )
}
