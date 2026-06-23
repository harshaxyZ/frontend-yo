import React from 'react'
import { Menu, Moon } from 'lucide-react'

export default function Header() {
  return (
    <header 
      className="fixed top-0 left-0 right-0 h-[56px] flex items-center justify-between px-[20px] z-50"
      style={{
        background: 'rgba(250, 250, 248, 0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        paddingTop: 'env(safe-area-inset-top)',
        boxSizing: 'content-box'
      }}
    >
      <button className="flex items-center justify-center bg-transparent border-none outline-none cursor-pointer">
        <Menu size={24} strokeWidth={2} color="var(--text-primary)" />
      </button>
      
      <span style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)' }}>
        Discover
      </span>
      
      <button className="flex items-center justify-center bg-transparent border-none outline-none cursor-pointer">
        <Moon size={24} strokeWidth={2} color="var(--text-primary)" />
      </button>
    </header>
  )
}
