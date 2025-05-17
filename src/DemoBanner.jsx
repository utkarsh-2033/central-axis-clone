import { motion } from 'framer-motion';

export default function DemoBanner() {
  return (
    <section className="w-full py-12 flex justify-center items-center relative bg-[#232136]">
      <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80)' }} />
      <div className="relative z-10 flex flex-col items-center w-full max-w-3xl px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white text-center">Book a Demo</h2>
        <p className="text-gray-200 mb-6 text-center">See how CentralAxis can revolutionize your data center operations.</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="bg-gradient-to-r from-purple-400 to-purple-700 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
        >
          Schedule Now
        </motion.button>
      </div>
    </section>
  );
} 