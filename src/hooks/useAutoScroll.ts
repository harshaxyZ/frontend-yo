import { useEffect, useRef } from 'react'

export function useAutoScroll(itemCount: number, cardWidth: number, gap: number) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const currentIndex = useRef(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (!scrollRef.current) return
      currentIndex.current = (currentIndex.current + 1) % itemCount
      scrollRef.current.scrollTo({
        left: currentIndex.current * (cardWidth + gap),
        behavior: 'smooth'
      })
    }, 4000)

    return () => clearInterval(interval)
  }, [itemCount, cardWidth, gap])

  return scrollRef
}
