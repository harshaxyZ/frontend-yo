import React, { useEffect, useState } from 'react';
import { useAppStore } from '../store';
import { motion } from 'framer-motion';

export const Splash: React.FC = () => {
  const { setScreen } = useAppStore();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 25;
      });
    }, 450);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {
        setScreen('Onboarding');
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [progress, setScreen]);

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-between py-16 overflow-hidden bg-[#FAFAF8] text-[#0F1E36] transition-colors duration-500">
      
      {/* Background Soft Pastel Orbs */}
      <div className="absolute top-[10%] left-[-20%] w-[120%] h-[40%] rounded-full bg-[#EAE5F3]/60 blur-3xl pointer-events-none animate-float" />
      <div className="absolute bottom-[10%] right-[-20%] w-[120%] h-[40%] rounded-full bg-[#DCE8F7]/70 blur-3xl pointer-events-none animate-float-delayed" />

      {/* Grain Overlay */}
      <div className="grain-overlay" />

      {/* Center Branding Area */}
      <div className="flex-grow flex flex-col items-center justify-center z-10 select-none">
        
        {/* Overlapping Speech Bubbles Logo matching loader.png */}
        <div className="relative w-40 h-32 mb-10 flex items-center justify-center">
          {/* Lavender Speech Bubble */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, x: -20 }}
            animate={{ scale: 1, opacity: 1, x: -10 }}
            transition={{ type: 'spring', damping: 14 }}
            className="absolute left-6 top-2 w-20 h-20 bg-[#C4B5E0] rounded-3xl rounded-bl-none flex items-center justify-center shadow-[0_12px_30px_-5px_rgba(196,181,224,0.4)]"
          >
            {/* Minimal speech bubble pointer hook */}
            <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-0 h-0 border-[10px] border-t-[#C4B5E0] border-r-[#C4B5E0] border-b-transparent border-l-transparent" />
          </motion.div>

          {/* Sky Blue Speech Bubble Overlap */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, x: 20 }}
            animate={{ scale: 1, opacity: 0.95, x: 10 }}
            transition={{ type: 'spring', damping: 14, delay: 0.15 }}
            className="absolute right-6 bottom-2 w-20 h-20 bg-[#A7C7E7] rounded-3xl rounded-tr-none flex items-center justify-center shadow-[0_12px_30px_-5px_rgba(167,199,231,0.4)] mix-blend-multiply"
          >
            {/* Minimal speech bubble pointer hook */}
            <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-0 h-0 border-[10px] border-b-[#A7C7E7] border-l-[#A7C7E7] border-t-transparent border-r-transparent" />
          </motion.div>
        </div>

        {/* Text Title */}
        <motion.h1
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="text-4xl font-extrabold tracking-[0.3em] text-[#0F1E36] mb-2 font-sans pl-[0.3em] text-center"
        >
          SAMVAD
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 0.6 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-xs tracking-widest font-black text-gray-500 uppercase text-center"
        >
          Language Practice
        </motion.p>
      </div>

      {/* Footer Area with Dots & Loading Bar */}
      <div className="w-full max-w-xs z-10 px-6 flex flex-col items-center">
        
        {/* Pagination Dots (gray, lavender, gray) */}
        <div className="flex space-x-2.5 mb-6">
          <div className="w-2 h-2 rounded-full bg-gray-200" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#C4B5E0]" />
          <div className="w-2 h-2 rounded-full bg-gray-200" />
        </div>

        {/* Thin Gradient Progress Bar */}
        <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#C4B5E0] to-[#A7C7E7] rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

