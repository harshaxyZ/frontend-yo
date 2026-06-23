import React from 'react'
import { motion } from 'framer-motion'
import { Compass, Target, Clock, User } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

interface BottomNavProps {
  active: 'discover' | 'practice' | 'history' | 'profile'
}

export default function BottomNav({ active }: BottomNavProps) {
  const navigate = useNavigate()

  const items = [
    { id: 'discover', icon: Compass, label: 'Discover', path: '/home' },
    { id: 'practice', icon: Target, label: 'Practice', path: '/personalize' }, // Routing practice to personalize for demo
    { id: 'history', icon: Clock, label: 'History', path: '/home' },
    { id: 'profile', icon: User, label: 'Profile', path: '/home' },
  ]

  return (
    <div 
      className="fixed bottom-0 w-full max-w-[430px] left-1/2 -translate-x-1/2 z-50 flex justify-around items-center"
      style={{ 
        background: 'rgba(255,255,255,0.92)', 
        backdropFilter: 'blur(16px)', 
        borderTop: '1px solid var(--border)',
        padding: '10px 0 22px'
      }}
    >
      {items.map((item) => {
        const isActive = active === item.id
        const Icon = item.icon
        
        return (
          <div 
            key={item.id}
            onClick={() => navigate(item.path)}
            className="flex flex-col items-center gap-[4px] cursor-pointer p-[4px_16px] rounded-[12px]"
          >
            <motion.div
              whileTap={{ scale: 1.25 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Icon 
                size={24} 
                color={isActive ? 'var(--cobalt)' : 'var(--ink-faint)'} 
                strokeWidth={isActive ? 2 : 1.5}
              />
            </motion.div>
            <span 
              className="text-[12px]"
              style={{ 
                color: isActive ? 'var(--cobalt)' : 'var(--ink-faint)',
                fontWeight: isActive ? 700 : 400
              }}
            >
              {item.label}
            </span>
            {isActive && (
              <motion.div 
                layoutId="navDot"
                className="w-[4px] h-[4px] rounded-full bg-[var(--cobalt)] mt-[2px]"
              />
            )}
          </div>
        )
      })}
    </div>
  )
}
