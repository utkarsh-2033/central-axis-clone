import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] pt-32 pb-16 px-4 md:px-0 bg-gradient-to-b from-[#232136] to-[#18181b] text-center">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto text-5xl md:text-6xl font-bold mb-4 text-gray-100"
      >
        Data Center Management Software
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-2"
      >
        Increase uptime, reduce costs, automate operations, and stay compliant.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="max-w-2xl mx-auto text-base md:text-lg text-gray-400 mb-8"
      >
        Built for colocations, data centers, and cloud providers.
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className="bg-gradient-to-r from-purple-400 to-purple-700 text-white px-12 py-4 rounded-lg font-semibold text-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
        tabIndex={0}
      >
        Request Demo
      </motion.button>
    </section>
  );
} 