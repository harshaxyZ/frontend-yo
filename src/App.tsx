import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Loader from './components/ui/Loader'
import Home from './screens/Home'
import Dashboard from './screens/Dashboard'

export default function App() {
  return (
    <>
      <Loader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}
