import React from 'react'
import { ArrowRight, MessageCircle, Activity, Menu } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative pt-[72px] pb-[32px] w-full box-border">
      {/* Text Content */}
      <p style={{ fontSize: '15px', fontWeight: 500, color: 'var(--text-secondary)', marginLeft: '20px' }}>
        Good morning,
      </p>
      
      <h1 style={{ fontSize: '40px', fontWeight: 800, color: 'var(--text-primary)', marginLeft: '20px', lineHeight: 1.1 }}>
        Harsha
      </h1>
      
      <div 
        style={{ width: '60px', height: '4px', background: 'var(--coral)', borderRadius: '2px', marginLeft: '20px', marginTop: '8px' }} 
      />
      
      <h2 style={{ fontSize: '24px', fontWeight: 700, lineHeight: 1.3, margin: '16px 20px 0', color: 'var(--text-primary)' }}>
        <span>Become a better </span>
        <span style={{ color: 'var(--coral)' }}>communicator</span>
        <span>, one conversation at a time.</span>
      </h2>
      
      <p style={{ fontSize: '15px', fontWeight: 400, color: 'var(--text-secondary)', margin: '12px 20px 0', maxWidth: '280px' }}>
        Practice real conversations with AI roleplays designed to build your confidence.
      </p>
      
      <button 
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'var(--coral)',
          color: '#FFFFFF',
          fontSize: '15px',
          fontWeight: 700,
          padding: '14px 28px',
          borderRadius: 'var(--radius-pill)',
          margin: '24px 20px 0',
          boxShadow: '0 4px 20px rgba(255,107,107,0.3)',
          border: 'none',
          outline: 'none',
          cursor: 'pointer',
          transition: 'transform 0.15s ease-out'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
        onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
      >
        Start practicing
        <ArrowRight size={18} strokeWidth={2.5} />
      </button>

      {/* Decorative Elements */}
      <div 
        className="absolute right-[20px] top-[90px] flex flex-col items-center gap-[4px] pointer-events-none"
      >
        <div 
          style={{
            width: '44px',
            height: '44px',
            background: '#FFFFFF',
            borderRadius: '14px',
            boxShadow: 'var(--shadow-md)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'float 3s ease-in-out infinite'
          }}
        >
          <MessageCircle size={20} strokeWidth={2} color="var(--coral)" />
        </div>
        
        <div style={{ height: '24px', width: '2px', borderLeft: '2px dashed var(--coral)', animation: 'float 3s ease-in-out infinite 0.2s' }} />
        
        <div 
          style={{
            width: '44px',
            height: '44px',
            background: '#FFFFFF',
            borderRadius: '14px',
            boxShadow: 'var(--shadow-md)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'float 3s ease-in-out infinite 0.5s'
          }}
        >
          <Activity size={20} strokeWidth={2} color="var(--coral)" />
        </div>
        
        <div style={{ height: '24px', width: '2px', borderLeft: '2px dashed var(--coral)', animation: 'float 3s ease-in-out infinite 0.7s' }} />
        
        <div 
          style={{
            width: '44px',
            height: '44px',
            background: '#FFFFFF',
            borderRadius: '14px',
            boxShadow: 'var(--shadow-md)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'float 3s ease-in-out infinite 1s'
          }}
        >
          <Menu size={20} strokeWidth={2} color="var(--coral)" />
        </div>
      </div>
    </section>
  )
}
