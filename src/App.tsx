import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout'

// Screens
import DashboardHome from './screens/DashboardHome'

export default function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<DashboardHome />} />
        <Route path="/practice" element={<div className="text-zinc-400 font-mono text-xs">practice_module.init()</div>} />
        <Route path="/history" element={<div className="text-zinc-400 font-mono text-xs">history_module.init()</div>} />
        <Route path="/settings" element={<div className="text-zinc-400 font-mono text-xs">settings_module.init()</div>} />
      </Routes>
    </AppLayout>
  )
}
