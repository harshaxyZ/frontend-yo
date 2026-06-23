import React from 'react'

interface AppShellProps {
  children: React.ReactNode
}

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className="app-container">
      {children}
    </div>
  )
}
