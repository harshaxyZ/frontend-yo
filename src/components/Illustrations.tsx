import React from 'react';

// Illustration 1: Coffee Tumbler + Vidhana Soudha Temple background silhouette
export const CoffeeIllustration: React.FC = () => (
  <div className="w-full h-full relative bg-gradient-to-br from-[#E2B7A8] via-[#D39994] to-[#7B5E7B] flex items-center justify-center overflow-hidden">
    {/* Sun / Soft Glow */}
    <div className="absolute w-32 h-32 rounded-full bg-orange-100/40 blur-xl top-4 right-8" />
    
    {/* Temple Silhouette (Simple vector paths representing Vidhana Soudha dome) */}
    <svg className="absolute bottom-0 right-0 w-32 h-20 text-[#604260]/40" viewBox="0 0 100 60" fill="currentColor">
      <rect x="10" y="40" width="80" height="20" />
      <rect x="25" y="25" width="50" height="15" />
      <path d="M50 5 L35 25 L65 25 Z" />
      <line x1="50" y1="2" x2="50" y2="5" stroke="currentColor" strokeWidth="2" />
    </svg>

    {/* Coffee Tumbler Drawing */}
    <div className="relative flex flex-col items-center">
      {/* Coffee foam bubbles */}
      <div className="absolute -top-6 w-12 h-4 bg-orange-100/80 rounded-full blur-xs animate-pulse" />
      
      {/* Tumbler Top (Rim) */}
      <div className="w-14 h-4 bg-[#D1C7BD] border-b-2 border-[#A89F95] rounded-full shadow-sm z-20 flex items-center justify-center">
        <div className="w-12 h-2.5 bg-[#8E5E4E] rounded-full" /> {/* Coffee surface */}
      </div>

      {/* Tumbler Cup Body */}
      <div className="w-13 h-20 bg-gradient-to-b from-[#E7E2DD] to-[#BFB6AE] border-x border-[#C7BEB6] rounded-b-2xl shadow-md z-10 relative flex flex-col items-center justify-center">
        {/* Coffee Brand Badge */}
        <div className="w-8 h-8 rounded-full bg-[#8E5E4E] flex items-center justify-center shadow-inner">
          <span className="text-[10px] font-black text-white">S</span>
        </div>
        
        {/* Sleeve/Texture lines */}
        <div className="w-full h-1 bg-[#BFB6AE]/40 mt-3" />
        <div className="w-full h-1 bg-[#BFB6AE]/40 mt-1" />
      </div>

      {/* Dabara (Bottom plate cup) */}
      <div className="w-20 h-6 bg-gradient-to-b from-[#E7E2DD] to-[#BFB6AE] border border-[#C7BEB6] rounded-b-xl -mt-1 shadow-md z-0" />
    </div>
  </div>
);

// Illustration 2: Auto Rickshaw bengaluru scene
export const AutoIllustration: React.FC = () => (
  <div className="w-full h-full relative bg-gradient-to-br from-[#97D4C5] via-[#E8F3EE] to-[#E3C7A3] flex items-center justify-center overflow-hidden">
    <div className="absolute w-40 h-40 rounded-full bg-white/30 blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
    
    {/* Auto rickshaw vector style */}
    <div className="relative w-28 h-20 flex flex-col items-center justify-center">
      <svg className="w-full h-full text-[#2B3530]" viewBox="0 0 100 60" fill="currentColor">
        {/* Auto rickshaw body (Yellow/Green standard Indian auto) */}
        <path d="M20 45 L80 45 L78 25 L50 15 L22 25 Z" fill="#F4B400" />
        <path d="M20 45 L80 45 L78 35 L22 35 Z" fill="#0F9D58" /> {/* Bottom green block */}
        
        {/* Windshield / Cab */}
        <path d="M25 27 L48 18 L48 33 L25 33 Z" fill="#E8F0FE" opacity="0.8" />
        <path d="M52 18 L75 27 L75 33 L52 33 Z" fill="#E8F0FE" opacity="0.8" />
        
        {/* Wheels */}
        <circle cx="35" cy="46" r="8" fill="#1A1A1A" />
        <circle cx="35" cy="46" r="3" fill="#D1D5DB" />
        <circle cx="65" cy="46" r="8" fill="#1A1A1A" />
        <circle cx="65" cy="46" r="3" fill="#D1D5DB" />
        
        {/* Soft headlights */}
        <polygon points="12,32 22,30 22,35" fill="#FFE082" />
        <circle cx="22" cy="32.5" r="2.5" fill="#FFB300" />
      </svg>
      {/* Dotted path trail */}
      <div className="absolute bottom-2 left-0 right-0 h-0.5 border-t border-dashed border-gray-400" />
    </div>
  </div>
);

// Illustration 3: Tech Manager Job Interview layout
export const TechIllustration: React.FC = () => (
  <div className="w-full h-full relative bg-gradient-to-br from-[#DBCDF0] via-[#C6DEF1] to-[#F2C6DE] flex items-center justify-center overflow-hidden">
    <div className="absolute w-28 h-28 rounded-full bg-samvad-brand-lavender/35 blur-xl top-4 left-4" />
    
    <div className="relative flex flex-col items-center">
      {/* Laptop screen card */}
      <div className="w-28 h-18 bg-zinc-900 border-2 border-zinc-800 rounded-t-lg shadow-lg flex flex-col p-1.5 justify-between">
        {/* Mock code tags or avatar */}
        <div className="flex space-x-1">
          <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
          <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
          <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
        </div>
        
        {/* Tech manager layout */}
        <div className="flex-grow flex items-center justify-center space-x-2 mt-1">
          <div className="w-8 h-8 rounded-full bg-samvad-primary/20 flex items-center justify-center text-samvad-primary">
            <span className="text-xs font-bold font-mono">&lt;/&gt;</span>
          </div>
          <div className="flex flex-col space-y-1">
            <div className="w-10 h-1 bg-zinc-700 rounded-full" />
            <div className="w-8 h-1 bg-zinc-700 rounded-full" />
          </div>
        </div>
      </div>
      {/* Keyboard deck base */}
      <div className="w-32 h-2.5 bg-zinc-800 border-t border-zinc-700 rounded-b-lg shadow-md -mt-0.5" />
    </div>
  </div>
);

// Illustration 4: Vidyarthi Bhavan Dosa Plate
export const DosaIllustration: React.FC = () => (
  <div className="w-full h-full relative bg-gradient-to-br from-[#FAEDCD] via-[#CCD5AE] to-[#E9D8A6] flex items-center justify-center overflow-hidden">
    {/* Large Steel Plate */}
    <div className="w-36 h-36 rounded-full bg-[#E5E9E8] border border-[#CBD2D1] flex items-center justify-center shadow-md relative">
      {/* Outer steel border reflection */}
      <div className="absolute inset-2 rounded-full border border-white/50" />

      {/* Crispy Masala Dosa (SVG crescent curved) */}
      <svg className="absolute w-40 h-20 -rotate-12 z-20 drop-shadow-md" viewBox="0 0 100 50">
        {/* Golden crispy dosa body */}
        <path d="M5 25 Q50 5 95 25 Q50 35 5 25" fill="#D4A373" />
        {/* Brown roasted spots */}
        <ellipse cx="25" cy="20" rx="8" ry="3" fill="#A86E41" opacity="0.6" />
        <ellipse cx="50" cy="23" rx="14" ry="4" fill="#905A2F" opacity="0.7" />
        <ellipse cx="75" cy="21" rx="6" ry="2.5" fill="#A86E41" opacity="0.5" />
      </svg>

      {/* Two Small Chutney Bowls */}
      {/* Coconut Chutney */}
      <div className="absolute top-4 left-6 w-8 h-8 rounded-full bg-[#E5E9E8] border border-[#CBD2D1] shadow-inner flex items-center justify-center z-10">
        <div className="w-6 h-6 rounded-full bg-[#F4F1DE]" /> {/* white chutney */}
      </div>

      {/* Sambar Bowl */}
      <div className="absolute top-4 right-6 w-8 h-8 rounded-full bg-[#E5E9E8] border border-[#CBD2D1] shadow-inner flex items-center justify-center z-10">
        <div className="w-6 h-6 rounded-full bg-[#E76F51]" /> {/* orange sambar */}
      </div>
    </div>
  </div>
);
