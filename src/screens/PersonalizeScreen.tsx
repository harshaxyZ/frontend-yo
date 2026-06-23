import React from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, X, Target, MessageSquare, Briefcase, Plane, Building2, BarChart2, Clock, CheckCircle2, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { pageVariants } from '../utils/animations'
import { useAppStore } from '../store/useAppStore'

export default function PersonalizeScreen() {
  const navigate = useNavigate()
  const { selectedGoal, setGoal, level, setLevel, dailyTime, setDailyTime } = useAppStore()

  const goalOptions = [
    { id: 'Speak confidently in daily conversations', icon: MessageSquare },
    { id: 'Prepare for job interviews', icon: Briefcase },
    { id: 'Communicate better while traveling', icon: Plane },
    { id: 'Improve at work / business communication', icon: Building2 },
  ]

  const levelOptions = ['Beginner', 'Elementary', 'Intermediate', 'Advanced']
  const timeOptions = ['5 min', '10 min', '15 min', '20+ min']

  return (
    <motion.div 
      variants={pageVariants} 
      initial="initial" 
      animate="animate" 
      exit="exit"
      style={{ minHeight: '100dvh', background: 'var(--bg-page)', paddingBottom: 100 }}
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between p-[14px_20px] sticky top-0 bg-[var(--bg-page)] z-50">
        <ChevronLeft size={24} color="var(--ink)" onClick={() => navigate(-1)} className="cursor-pointer" />
        
        {/* Stepper */}
        <div className="flex items-center gap-[6px]">
          <div className="w-[32px] h-[5px] bg-[var(--cobalt)] rounded-[3px]" />
          <div className="w-[24px] h-[5px] bg-[#D1D5DB] rounded-[3px]" />
          <div className="w-[24px] h-[5px] bg-[#D1D5DB] rounded-[3px]" />
          <div className="w-[24px] h-[5px] bg-[#D1D5DB] rounded-[3px]" />
        </div>

        <X size={24} color="var(--ink-muted)" onClick={() => navigate('/home')} className="cursor-pointer" />
      </div>

      {/* Heading */}
      <div className="p-[24px_20px_0]">
        <h1 className="text-[28px] font-[800] text-[var(--ink)] leading-[1.15]">
          Let's personalize your experience
        </h1>
        <p className="text-[15px] text-[var(--ink-muted)] mt-[8px] leading-[1.5]">
          This helps us suggest the most relevant scenarios for you.
        </p>
      </div>

      {/* Questions Card */}
      <div className="m-[20px] bg-white rounded-[24px] border border-[var(--border)] p-[20px] shadow-[var(--shadow-card)]">
        
        {/* Question 1 */}
        <div>
          <div className="flex flex-row items-center gap-[12px] mb-[16px]">
            <div className="w-[38px] h-[38px] rounded-full bg-[var(--cobalt-light)] flex items-center justify-center shrink-0">
              <Target size={18} color="var(--cobalt)" />
            </div>
            <h2 className="text-[16px] font-[700] text-[var(--ink)]">What's your main goal?</h2>
          </div>

          <div className="flex flex-col gap-[10px]">
            {goalOptions.map(opt => {
              const isSelected = selectedGoal === opt.id
              const Icon = opt.icon
              return (
                <div 
                  key={opt.id}
                  onClick={() => setGoal(opt.id)}
                  className="flex flex-row items-center gap-[12px] p-[14px_16px] rounded-[14px] border-[1.5px] cursor-pointer transition-all duration-150"
                  style={{
                    borderColor: isSelected ? 'var(--cobalt)' : 'var(--border)',
                    background: isSelected ? '#F0F7FF' : 'white'
                  }}
                >
                  <div 
                    className="w-[34px] h-[34px] rounded-full flex items-center justify-center shrink-0"
                    style={{ background: isSelected ? 'var(--cobalt-light)' : '#F9FAFB' }}
                  >
                    <Icon size={16} color={isSelected ? 'var(--cobalt)' : 'var(--ink-muted)'} />
                  </div>
                  <span className="flex-1 text-[15px] font-[500] text-[var(--ink)]">
                    {opt.id}
                  </span>
                  {isSelected ? (
                    <CheckCircle2 size={20} color="var(--cobalt)" fill="var(--cobalt-light)" />
                  ) : (
                    <div className="w-[20px] h-[20px] rounded-full border-[1.5px] border-[#D1D5DB]" />
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Question 2 */}
        <div className="mt-[24px]">
          <div className="flex flex-row items-center gap-[12px] mb-[12px]">
            <div className="w-[38px] h-[38px] rounded-full bg-[var(--cobalt-light)] flex items-center justify-center shrink-0">
              <BarChart2 size={18} color="var(--cobalt)" />
            </div>
            <h2 className="text-[16px] font-[700] text-[var(--ink)]">What's your current level?</h2>
          </div>

          <div className="flex flex-row flex-wrap gap-[8px]">
            {levelOptions.map(opt => {
              const isSelected = level === opt
              return (
                <div
                  key={opt}
                  onClick={() => setLevel(opt)}
                  className="text-[14px] p-[10px_18px] rounded-[100px] border-[1.5px] cursor-pointer transition-all duration-150"
                  style={{
                    borderColor: isSelected ? 'var(--cobalt)' : 'var(--border)',
                    background: isSelected ? 'var(--cobalt-light)' : 'white',
                    color: isSelected ? 'var(--cobalt-text)' : 'var(--ink-muted)',
                    fontWeight: isSelected ? 700 : 500
                  }}
                >
                  {opt}
                </div>
              )
            })}
          </div>
        </div>

        {/* Question 3 */}
        <div className="mt-[24px]">
          <div className="flex flex-row items-center gap-[12px] mb-[12px]">
            <div className="w-[38px] h-[38px] rounded-full bg-[var(--cobalt-light)] flex items-center justify-center shrink-0">
              <Clock size={18} color="var(--cobalt)" />
            </div>
            <h2 className="text-[16px] font-[700] text-[var(--ink)]">How much time can you practice daily?</h2>
          </div>

          <div className="flex flex-row flex-wrap gap-[8px]">
            {timeOptions.map(opt => {
              const isSelected = dailyTime === opt
              return (
                <div
                  key={opt}
                  onClick={() => setDailyTime(opt)}
                  className="text-[14px] p-[10px_18px] rounded-[100px] border-[1.5px] cursor-pointer transition-all duration-150"
                  style={{
                    borderColor: isSelected ? 'var(--cobalt)' : 'var(--border)',
                    background: isSelected ? 'var(--cobalt-light)' : 'white',
                    color: isSelected ? 'var(--cobalt-text)' : 'var(--ink-muted)',
                    fontWeight: isSelected ? 700 : 500
                  }}
                >
                  {opt}
                </div>
              )
            })}
          </div>
        </div>

      </div>

      {/* Fixed Continue Button */}
      <div 
        className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[calc(100%-40px)] max-w-[390px] pb-[32px] bg-transparent"
      >
        <motion.button
          onClick={() => navigate('/home')}
          whileTap={{ scale: 0.97 }}
          whileHover={{ boxShadow: '0 6px 28px rgba(37,99,235,0.5)' }}
          className="w-full bg-[var(--cobalt)] text-white text-[17px] font-[700] p-[18px_24px] rounded-[100px] shadow-[var(--shadow-btn)] flex items-center justify-between"
        >
          Continue
          <ArrowRight size={20} />
        </motion.button>
      </div>

    </motion.div>
  )
}
