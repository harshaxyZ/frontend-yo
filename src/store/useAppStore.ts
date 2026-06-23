import { create } from 'zustand'

interface AppState {
  userName: string
  selectedGoal: string
  level: string
  dailyTime: string
  activeNavItem: string
  currentScenarioIndex: number
  setGoal: (goal: string) => void
  setLevel: (level: string) => void
  setDailyTime: (time: string) => void
  setActiveNav: (item: string) => void
  setScenarioIndex: (index: number) => void
}

export const useAppStore = create<AppState>((set) => ({
  userName: 'Harsha',
  selectedGoal: 'Speak confidently in daily conversations',
  level: 'Intermediate',
  dailyTime: '10 min',
  activeNavItem: 'discover',
  currentScenarioIndex: 0,
  setGoal: (goal) => set({ selectedGoal: goal }),
  setLevel: (level) => set({ level }),
  setDailyTime: (time) => set({ dailyTime: time }),
  setActiveNav: (item) => set({ activeNavItem: item }),
  setScenarioIndex: (index) => set({ currentScenarioIndex: index }),
}))
