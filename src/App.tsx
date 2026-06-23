import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import SplashScreen from './screens/SplashScreen'
import HomeScreen from './screens/HomeScreen'
import PersonalizeScreen from './screens/PersonalizeScreen'
import DesktopLayout from './screens/DesktopLayout'

export default function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  if (!isMobile) return <DesktopLayout />

  return (
    <div style={{ maxWidth: 430, margin: '0 auto', minHeight: '100dvh', background: 'var(--bg-page)', position: 'relative', overflow: 'hidden' }}>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/personalize" element={<PersonalizeScreen />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}
