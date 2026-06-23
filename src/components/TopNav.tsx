import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutGrid, Library, History, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

const TopNav = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: <LayoutGrid strokeWidth={1.5} size={20} />, label: 'Home' },
    { path: '/categories', icon: <Library strokeWidth={1.5} size={20} />, label: 'Library' },
    { path: '/history', icon: <History strokeWidth={1.5} size={20} />, label: 'History' },
  ];

  return (
    <>
      {/* Desktop Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0C]/80 backdrop-blur-md border-b border-white/5 h-16 px-6 lg:px-12 hidden md:flex items-center justify-between">
        <Link to="/" className="text-xl font-[800] tracking-tighter uppercase text-white">
          SAMVAD<span className="text-zinc-500">.</span>
        </Link>

        <div className="flex items-center gap-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link 
                key={item.path} 
                to={item.path}
                className={`px-4 py-2 rounded-full text-sm font-[600] tracking-widest uppercase transition-all ${
                  isActive ? 'bg-white/10 text-white' : 'text-zinc-500 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <button className="h-9 px-5 btn-metal rounded-full text-xs font-[800] uppercase tracking-widest">
          Premium
        </button>
      </nav>

      {/* Mobile Floating Dock */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm">
        <div className="bg-[#121214]/90 backdrop-blur-xl border border-white/10 rounded-[32px] p-2 flex items-center justify-between shadow-[0_20px_40px_rgba(0,0,0,0.8)]">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link 
                key={item.path} 
                to={item.path}
                className={`relative flex flex-col items-center justify-center w-16 h-14 rounded-[24px] transition-all ${
                  isActive ? 'text-white' : 'text-zinc-500'
                }`}
              >
                {isActive && (
                  <motion.div 
                    layoutId="mobile-nav-pill"
                    className="absolute inset-0 bg-white/10 rounded-[20px]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.icon}</span>
                {isActive && <span className="absolute bottom-1 w-1 h-1 bg-white rounded-full"></span>}
              </Link>
            );
          })}
          
          <div className="w-px h-8 bg-white/10 mx-1"></div>
          
          <button className="w-14 h-14 rounded-[20px] flex items-center justify-center text-zinc-400 hover:text-white transition-colors">
            <Settings strokeWidth={1.5} size={20} />
          </button>
        </div>
      </div>
    </>
  );
};

export default TopNav;
