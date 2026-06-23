import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Bell, Menu } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { pageVariants, containerVariants, itemVariants } from '../utils/animations'
import { useAppStore } from '../store/useAppStore'
import FloatingIconCluster from '../components/FloatingIconCluster'
import StreakWidget from '../components/StreakWidget'
import ScenarioCard, { Scenario } from '../components/ScenarioCard'
import BottomNav from '../components/BottomNav'
import { useAutoScroll } from '../hooks/useAutoScroll'

export default function HomeScreen() {
  const navigate = useNavigate()
  const { userName, activeNavItem, setActiveNav } = useAppStore()
  
  const scenarios: Scenario[] = [
    {
      id: '1',
      gradient: 'linear-gradient(145deg, #1e3a8a 0%, #2563EB 50%, #3B82F6 100%)',
      badge: '✦ POPULAR',
      title: 'Order Coffee\nin Bengaluru',
      level: 'Intermediate',
      duration: '7 min',
      type: 'Voice',
      emoji: '☕'
    },
    {
      id: '2',
      gradient: 'linear-gradient(145deg, #064E3B 0%, #065F46 50%, #059669 100%)',
      badge: '✦ TRENDING',
      title: 'Auto Ride\nin Indiranagar',
      level: 'Beginner',
      duration: '5 min',
      type: 'Voice',
      emoji: '🛺'
    },
    {
      id: '3',
      gradient: 'linear-gradient(145deg, #1C1917 0%, #292524 50%, #44403C 100%)',
      badge: '✦ FEATURED',
      title: 'Job Interview\nat a Startup',
      level: 'Advanced',
      duration: '12 min',
      type: 'Text + Voice',
      emoji: '💼'
    },
    {
      id: '4',
      gradient: 'linear-gradient(145deg, #7C2D12 0%, #C2410C 50%, #EA580C 100%)',
      badge: '✦ NEW',
      title: 'Ask for\nDirections',
      level: 'Beginner',
      duration: '4 min',
      type: 'Text',
      emoji: '🗺️'
    },
    {
      id: '5',
      gradient: 'linear-gradient(145deg, #312E81 0%, #4338CA 50%, #6366F1 100%)',
      badge: '✦ POPULAR',
      title: 'Doctor\nAppointment',
      level: 'Intermediate',
      duration: '8 min',
      type: 'Voice',
      emoji: '🏥'
    }
  ]

  const scrollRef = useAutoScroll(scenarios.length, 300, 14) // 300px width + 14px gap
  const [activeIndex, setActiveIndex] = useState(0)

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollLeft = e.currentTarget.scrollLeft
    const index = Math.round(scrollLeft / 314)
    if (index !== activeIndex && index >= 0 && index < scenarios.length) {
      setActiveIndex(index)
    }
  }

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="flex flex-col h-full relative">
      
      {/* TopBar */}
      <div 
        className="sticky top-0 z-50 flex items-center justify-between p-[14px_20px]"
        style={{ background: 'rgba(248,249,255,0.85)', backdropFilter: 'blur(12px)' }}
      >
        <Menu size={24} color="var(--ink)" />
        <div className="relative">
          <Bell size={24} color="var(--ink)" />
          <div className="absolute top-[-2px] right-[-2px] w-[8px] h-[8px] rounded-full bg-[#EF4444]" />
        </div>
      </div>

      {/* Scroll View */}
      <div className="overflow-y-auto pb-[100px] flex flex-col gap-[32px]">
        
        {/* Hero Section */}
        <div className="p-[8px_20px_24px] flex flex-row">
          <div className="flex-1 flex flex-col">
            <p className="text-[15px] font-[400] text-[var(--ink-muted)]">Good morning,</p>
            <h1 className="text-[42px] font-[800] text-[var(--ink)] leading-[1] mt-[2px]">{userName}</h1>
            <div className="w-[36px] h-[3px] bg-[var(--cobalt)] rounded-[2px] mt-[8px] mb-[18px]" />
            
            <motion.div variants={containerVariants} initial="initial" animate="animate">
              <motion.div variants={itemVariants} className="text-[22px] font-[700] text-[var(--ink)] leading-[1.25]">Become a better</motion.div>
              <motion.div variants={itemVariants} className="text-[22px] font-[700] text-[var(--cobalt)]">communicator,</motion.div>
              <motion.div variants={itemVariants} className="text-[22px] font-[700] text-[var(--ink)]">one conversation</motion.div>
              <motion.div variants={itemVariants} className="text-[22px] font-[700] text-[var(--ink)]">at a time.</motion.div>
            </motion.div>

            <p className="text-[15px] font-[400] text-[var(--ink-muted)] mt-[10px] leading-[1.55] max-w-[280px]">
              Practice real conversations with AI roleplays designed to build your confidence.
            </p>

            <motion.button
              whileHover={{ scale: 1.03, boxShadow: '0 6px 24px rgba(37,99,235,0.45)' }}
              whileTap={{ scale: 0.96 }}
              onClick={() => {
                setActiveNav('practice')
                navigate('/personalize')
              }}
              className="mt-[20px] self-start bg-[var(--cobalt)] text-white text-[15px] font-[600] p-[14px_24px] rounded-[100px] shadow-[var(--shadow-btn)]"
            >
              Start practicing →
            </motion.button>
          </div>

          <FloatingIconCluster />
        </div>

        {/* Popular Scenarios */}
        <div className="pl-[20px]">
          <div className="flex items-center justify-between pr-[20px] mb-[12px]">
            <h2 className="text-[18px] font-[700] text-[var(--ink)]">Popular scenarios</h2>
            <span className="text-[14px] font-[600] text-[var(--cobalt)] cursor-pointer">See all ›</span>
          </div>

          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="scenario-scroll flex flex-row gap-[14px] overflow-x-auto pb-[12px] pr-[20px] snap-x snap-mandatory"
          >
            {scenarios.map((sc) => (
              <ScenarioCard key={sc.id} scenario={sc} />
            ))}
          </div>

          {/* Pagination dots */}
          <div className="mt-[14px] pr-[20px] flex flex-row gap-[6px]">
            {scenarios.map((_, idx) => (
              <React.Fragment key={idx}>
                {idx === activeIndex ? (
                  <motion.div 
                    layoutId="scenarioDot"
                    className="w-[20px] h-[6px] rounded-[3px] bg-[var(--cobalt)]"
                  />
                ) : (
                  <div className="w-[6px] h-[6px] rounded-full bg-[#D1D5DB]" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Streak Widget */}
        <StreakWidget />

      </div>

      <BottomNav active={activeNavItem as any} />

    </motion.div>
  )
}
