import React from 'react'
import HeroSection from '../components/home/HeroSection'
import ScenarioCarousel from '../components/home/ScenarioCarousel'
import StreakCard from '../components/home/StreakCard'

export default function Home() {
  return (
    <div className="w-full flex flex-col pt-8 lg:pt-16 pb-12">
      <HeroSection />
      <ScenarioCarousel />
      <StreakCard />
    </div>
  )
}
