import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import DashboardLayout from './components/layout/DashboardLayout'

// Screens
import DashboardHome from './screens/DashboardHome'

export default function App() {
  return (
    <DashboardLayout>
      <Routes>
        {/* Redirect root to home */}
        <Route path="/" element={<Navigate to="/home" replace />} />
        
        <Route path="/home" element={<DashboardHome />} />
        
        {/* Empty Placeholders */}
        <Route path="/scenarios" element={<div className="text-zinc-500 font-mono text-sm">scenarios_module.init()</div>} />
        <Route path="/history" element={<div className="text-zinc-500 font-mono text-sm">history_module.init()</div>} />
        <Route path="/analysis" element={<div className="text-zinc-500 font-mono text-sm">analysis_module.init()</div>} />
        <Route path="/settings" element={<div className="text-zinc-500 font-mono text-sm">settings_module.init()</div>} />
      </Routes>
    </DashboardLayout>
  )
}
