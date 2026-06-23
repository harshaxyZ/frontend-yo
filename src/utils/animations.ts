export const pageVariants = {
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: 1, y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }
  },
  exit: { opacity: 0, y: -12, transition: { duration: 0.25 } }
}

export const containerVariants = {
  animate: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } }
}

export const itemVariants = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } }
}
