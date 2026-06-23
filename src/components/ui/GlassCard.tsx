import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  dark?: boolean; // Kept for API compatibility, but everything is dark now
  className?: string;
  hoverable?: boolean;
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ children, className = "", hoverable = false, ...props }, ref) => {
    // We removed heavy blurs and use pure CSS gradients + borders for performance
    const hoverClass = hoverable 
      ? "hover:-translate-y-1 hover:border-white/20 transition-all duration-300 cursor-pointer group" 
      : "";
    
    return (
      <motion.div
        ref={ref}
        className={`metal-panel rounded-[28px] p-6 lg:p-8 ${hoverClass} ${className}`}
        {...props}
      >
        {/* Subtle hover glow effect using simple radial gradient, GPU friendly */}
        {hoverable && (
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent z-0"></div>
        )}
        <div className="relative z-10 w-full h-full flex flex-col">
          {children}
        </div>
      </motion.div>
    );
  }
);

GlassCard.displayName = "GlassCard";

export default GlassCard;
