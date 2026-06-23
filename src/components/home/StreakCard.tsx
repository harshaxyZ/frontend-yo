import React from 'react'
import { Flame, ChevronRight } from 'lucide-react'

export default function StreakCard() {
  return (
    <div 
      style={{
        background: 'var(--bg-card)',
        borderRadius: 'var(--radius-md)',
        boxShadow: 'var(--shadow-md)',
        padding: '16px',
        margin: '32px 20px 0',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '12px'
      }}
    >
      <div 
        style={{
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}
      >
        <Flame size={24} strokeWidth={2.5} color="var(--gold)" />
      </div>

      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
          <span style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-primary)' }}>12</span>
          <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text-secondary)' }}>Day streak</span>
        </div>
        
        <div 
          style={{
            width: '100%',
            height: '6px',
            background: 'var(--border)',
            borderRadius: '3px',
            marginTop: '8px',
            overflow: 'hidden'
          }}
        >
          <div 
            style={{
              width: '75%',
              height: '100%',
              background: 'linear-gradient(90deg, var(--coral) 0%, var(--gold) 100%)',
              borderRadius: '3px',
              animation: 'fillProgress 1.5s ease-out forwards'
            }}
          />
        </div>
      </div>

      <ChevronRight size={20} color="var(--text-muted)" style={{ flexShrink: 0 }} />
    </div>
  )
}
