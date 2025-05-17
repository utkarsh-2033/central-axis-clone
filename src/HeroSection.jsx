import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[70vh] pt-32 pb-16 px-4 md:px-0 w-full overflow-hidden">
      {/* Radial gradient background */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% 40%, #232136 60%, #18181b 100%)',
      }} />
      {/* Faint grid lines */}
      <svg className="absolute inset-0 w-full h-full z-0 opacity-20" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="400" height="200" patternUnits="userSpaceOnUse">
            <path d="M 400 0 L 0 0 0 200" fill="none" stroke="#222228" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto text-6xl md:text-7xl font-bold mb-4 text-gray-200 tracking-tight text-center"
        >
          Data Center Management Software
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="max-w-2xl mx-auto text-xl md:text-2xl text-gray-400 mb-2 text-center"
        >
          Increase uptime, reduce costs, automate operations, and stay compliant.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-gray-500 mb-10 text-center"
        >
          Built for colocations, data centers, and cloud providers.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="bg-gradient-to-r from-[#a78bfa] to-[#7c3aed] text-white px-16 py-4 rounded-lg font-semibold text-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition border-b-4 border-[#6d28d9]"
        >
          Request Demo
        </motion.button>
      </div>
    </section>
  );
} 