import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-transparent fixed top-0 left-0 z-50">
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
    </nav>
  );
} 