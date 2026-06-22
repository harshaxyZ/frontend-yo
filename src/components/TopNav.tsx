import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TopNav = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/10 h-20 px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-2xl font-[800] tracking-tighter uppercase text-[#09090B]">
            SAMVAD<span className="text-[#A1A1AA]">.</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className={`text-sm font-[600] uppercase tracking-widest ${location.pathname === '/' ? 'text-[#09090B]' : 'text-[#A1A1AA] hover:text-[#09090B] transition-colors'}`}>Dashboard</Link>
          <Link to="/categories" className={`text-sm font-[600] uppercase tracking-widest ${location.pathname === '/categories' ? 'text-[#09090B]' : 'text-[#A1A1AA] hover:text-[#09090B] transition-colors'}`}>Library</Link>
          <div className="h-4 w-px bg-[#E4E4E7]"></div>
          <button className="h-10 px-6 bg-[#09090B] text-white text-sm font-[600] uppercase tracking-widest rounded-full hover:bg-[#18181B] active:scale-95 transition-all shadow-xl shadow-black/10">
            Premium
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 -mr-2 text-[#09090B] active:scale-95 transition-transform" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X strokeWidth={2.5} size={24} /> : <Menu strokeWidth={2.5} size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#FAFAFA] pt-24 px-6 md:hidden flex flex-col gap-6"
          >
            <Link to="/" className="text-3xl font-[800] tracking-tighter text-[#09090B]">Dashboard</Link>
            <Link to="/categories" className="text-3xl font-[800] tracking-tighter text-[#09090B]">Practice Library</Link>
            <Link to="/history" className="text-3xl font-[800] tracking-tighter text-[#09090B]">History</Link>
            <div className="mt-auto mb-12">
              <button className="w-full h-14 bg-[#09090B] text-white text-sm font-[600] uppercase tracking-widest rounded-full shadow-2xl shadow-black/20">
                Upgrade to Premium
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TopNav;
