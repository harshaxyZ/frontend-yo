import React from 'react'
import { Compass, Target, Clock, User } from 'lucide-react'

export default function BottomNav() {
  return (
    <nav 
      className="fixed bottom-0 left-0 right-0 bg-[var(--bg-card)] flex flex-row items-center justify-around z-50"
      style={{
        height: 'calc(64px + env(safe-area-inset-bottom))',
        paddingBottom: 'env(safe-area-inset-bottom)',
        borderTop: '1px solid var(--border)'
      }}
    >
      <a className="flex flex-col items-center gap-[4px] cursor-pointer" style={{ color: 'var(--coral)' }}>
        <Compass size={24} strokeWidth={2} />
        <span style={{ fontSize: '12px', fontWeight: 600 }}>Discover</span>
        <span className="w-[4px] h-[4px] rounded-full bg-[var(--coral)] mt-[2px]" />
      </a>
      
      <a className="flex flex-col items-center gap-[4px] cursor-pointer" style={{ color: 'var(--text-muted)' }}>
        <Target size={24} strokeWidth={2} />
        <span style={{ fontSize: '12px', fontWeight: 500 }}>Practice</span>
      </a>
      
      <a className="flex flex-col items-center gap-[4px] cursor-pointer" style={{ color: 'var(--text-muted)' }}>
        <Clock size={24} strokeWidth={2} />
        <span style={{ fontSize: '12px', fontWeight: 500 }}>History</span>
      </a>
      
      <a className="flex flex-col items-center gap-[4px] cursor-pointer" style={{ color: 'var(--text-muted)' }}>
        <User size={24} strokeWidth={2} />
        <span style={{ fontSize: '12px', fontWeight: 500 }}>Profile</span>
      </a>
    </nav>
  )
}
