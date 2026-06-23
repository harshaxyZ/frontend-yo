import React from 'react'
import Header from '../components/layout/Header'
import HeroSection from '../components/home/HeroSection'
import ScenarioCarousel from '../components/home/ScenarioCarousel'
import StreakCard from '../components/home/StreakCard'
import BottomNav from '../components/layout/BottomNav'

export default function Home() {
  return (
    <div 
      className="relative min-h-[100dvh] w-full"
      style={{
        background: 'var(--bg-primary)',
        paddingBottom: '120px' // Space for bottom nav
      }}
    >
      <Header />
      
      <div 
        style={{ animation: 'fadeUp 0.4s ease-out both' }}
      >
        <HeroSection />
        <ScenarioCarousel />
        <StreakCard />
      </div>

      <BottomNav />
    </div>
  )
}
