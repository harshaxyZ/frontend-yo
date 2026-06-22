import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
  hoverable?: boolean;
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ children, dark = false, className = "", hoverable = false, ...props }, ref) => {
    const baseClass = dark ? "glass-panel-dark text-white" : "glass-panel text-[#09090B]";
    const hoverClass = hoverable ? "hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 cursor-pointer" : "";
    
    return (
      <motion.div
        ref={ref}
        className={`${baseClass} rounded-[32px] p-6 lg:p-8 ${hoverClass} ${className}`}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

GlassCard.displayName = "GlassCard";

export default GlassCard;
