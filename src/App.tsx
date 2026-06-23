import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AppShell from './components/layout/AppShell'

// Screens
import Splash from './screens/Splash'
import Home from './screens/Home'
import Categories from './screens/Categories'
import Scenarios from './screens/Scenarios'
import ScenarioDetail from './screens/ScenarioDetail'
import Chat from './screens/Chat'
import Call from './screens/Call'
import Analysis from './screens/Analysis'
import History from './screens/History'
import Menu from './screens/Menu'

export default function App() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/home" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/scenarios" element={<Scenarios />} />
        <Route path="/scenario/:id" element={<ScenarioDetail />} />
        <Route path="/chat/:id" element={<Chat />} />
        <Route path="/call/:id" element={<Call />} />
        <Route path="/analysis/:id" element={<Analysis />} />
        <Route path="/history" element={<History />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </AppShell>
  )
}
