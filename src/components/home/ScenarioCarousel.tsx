import React from 'react'
import { ChevronRight, BarChart3, Clock, Mic, ArrowRight, Coffee, Car, Briefcase } from 'lucide-react'

export default function ScenarioCarousel() {
  const cards = [
    {
      id: 1,
      title: "Order Coffee\nin Bengaluru",
      badge: "POPULAR",
      level: "Intermediate",
      time: "7 min",
      type: "Voice",
      gradient: "linear-gradient(135deg, #C4B5E0 0%, #E8B4B8 100%)",
      icon: Coffee
    },
    {
      id: 2,
      title: "Auto Ride\nin Indiranagar",
      badge: "TRENDING",
      level: "Beginner",
      time: "5 min",
      type: "Voice",
      gradient: "linear-gradient(135deg, #A7C7E7 0%, #C4B5E0 100%)",
      icon: Car
    },
    {
      id: 3,
      title: "Job Interview\nat a Startup",
      badge: "FEATURED",
      level: "Advanced",
      time: "12 min",
      type: "Text + Voice",
      gradient: "linear-gradient(135deg, #E8B4B8 0%, #F59E0B 100%)",
      icon: Briefcase
    }
  ]

  return (
    <section className="mt-[32px] w-full box-border">
      {/* Header */}
      <div className="flex items-center justify-between px-[20px] mb-[16px]">
        <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-primary)' }}>
          Popular scenarios
        </h3>
        <a style={{ fontSize: '14px', fontWeight: 600, color: 'var(--coral)', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
          See all <ChevronRight size={16} style={{ marginLeft: '2px' }} />
        </a>
      </div>

      {/* Carousel */}
      <div 
        className="no-scrollbar flex flex-row overflow-x-auto px-[20px] pb-[16px] gap-[16px]"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {cards.map((card, index) => {
          const Icon = card.icon
          return (
            <div 
              key={card.id}
              className="relative shrink-0 flex flex-col justify-between overflow-hidden"
              style={{
                scrollSnapAlign: 'start',
                flex: '0 0 85%',
                height: '280px',
                borderRadius: 'var(--radius-lg)',
                background: card.gradient,
                boxShadow: 'var(--shadow-md)',
                padding: '24px'
              }}
            >
              {/* Top Row: Badge & Background Icon */}
              <div className="flex justify-between items-start z-10 relative">
                <span 
                  style={{
                    background: 'rgba(255,255,255,0.2)',
                    backdropFilter: 'blur(8px)',
                    color: '#FFFFFF',
                    fontSize: '11px',
                    fontWeight: 600,
                    padding: '4px 10px',
                    borderRadius: 'var(--radius-pill)',
                    letterSpacing: '0.05em'
                  }}
                >
                  {card.badge}
                </span>
              </div>
              
              {/* Giant Background Icon */}
              <div className="absolute bottom-[20px] right-[-20px] opacity-30 pointer-events-none">
                <Icon size={160} color="#FFFFFF" strokeWidth={1.5} />
              </div>

              {/* Bottom Content */}
              <div className="z-10 relative">
                <h4 style={{ fontSize: '26px', fontWeight: 800, color: '#FFFFFF', whiteSpace: 'pre-wrap', lineHeight: 1.15 }}>
                  {card.title}
                </h4>
                
                <div className="flex flex-row items-center gap-[12px] mt-[16px] mb-[20px]">
                  <span style={{ fontSize: '12px', fontWeight: 600, color: '#FFFFFF', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <BarChart3 size={14} /> {card.level}
                  </span>
                  <span style={{ fontSize: '12px', fontWeight: 600, color: '#FFFFFF', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={14} /> {card.time}
                  </span>
                  <span style={{ fontSize: '12px', fontWeight: 600, color: '#FFFFFF', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Mic size={14} /> {card.type}
                  </span>
                </div>

                <button 
                  className="flex items-center gap-[6px] border-none cursor-pointer transition-transform"
                  style={{
                    background: '#FFFFFF',
                    color: 'var(--coral)',
                    fontSize: '13px',
                    fontWeight: 600,
                    padding: '8px 16px',
                    borderRadius: 'var(--radius-pill)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
                  onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                >
                  Let's practice <ArrowRight size={14} />
                </button>
              </div>
            </div>
          )
        })}
      </div>

      {/* Dots */}
      <div className="flex flex-row gap-[8px] px-[20px] mt-[4px]">
        <span style={{ width: '24px', height: '8px', borderRadius: '4px', background: 'var(--coral)' }} />
        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#E5E5E5' }} />
        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#E5E5E5' }} />
      </div>
    </section>
  )
}
