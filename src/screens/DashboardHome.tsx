import React from 'react'
import InteractiveOrb from '../components/home/InteractiveOrb'
import MinimalScenarioList from '../components/home/MinimalScenarioList'

export default function DashboardHome() {
  return (
    <div className="w-full h-full flex flex-col pt-8 lg:pt-16 pb-12">
      <InteractiveOrb />
      <MinimalScenarioList />
    </div>
  )
}
