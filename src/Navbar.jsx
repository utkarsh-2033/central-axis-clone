import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between px-4 md:px-8 py-4 bg-black/70 backdrop-blur fixed top-0 left-0 z-50" aria-label="Main navigation">
      <div className="flex items-center gap-2">
        {/* Placeholder logo */}
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="32" rx="8" fill="#a78bfa" />
        </svg>
        <span className="text-2xl font-bold ml-2">CentralAxis</span>
      </div>
      <div className="hidden md:flex gap-8 text-base font-medium">
        <div className="relative group cursor-pointer">
          <span>Data Center Infrastructure Management</span>
          <span className="ml-1">▼</span>
          {/* Dropdown placeholder */}
        </div>
        <div className="relative group cursor-pointer">
          <span>Intelligence Solutions</span>
          <span className="ml-1">▼</span>
        </div>
        <div className="relative group cursor-pointer">
          <span>Data Center Compliance</span>
          <span className="ml-1">▼</span>
        </div>
        <a href="#" className="hover:underline">Sustainability Blog</a>
      </div>
      {/* Hamburger for mobile */}
      <button className="md:hidden flex items-center" onClick={() => setOpen(!open)} aria-label="Open menu">
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path stroke="#fff" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            className="fixed top-0 right-0 w-2/3 h-full bg-[#18181b] flex flex-col gap-6 p-8 z-50 md:hidden"
          >
            <button className="self-end" onClick={() => setOpen(false)} aria-label="Close menu">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path stroke="#fff" strokeWidth="2" d="M6 6l12 12M6 18L18 6"/></svg>
            </button>
            <a href="#" className="hover:underline">Data Center Infrastructure Management</a>
            <a href="#" className="hover:underline">Intelligence Solutions</a>
            <a href="#" className="hover:underline">Data Center Compliance</a>
            <a href="#" className="hover:underline">Sustainability Blog</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 