import { motion } from 'framer-motion';
import dell from './assets/dell.png';
import hp from './assets/hp.png';
import intel from './assets/intel.png';
import lenovo from './assets/lenovo.png';
import amd from './assets/amd.png';
import nvidia from './assets/nvidia.png';
import cisco from './assets/cisco.png';
import hpe from './assets/hp.png';
// import schneider from './assets/schneider.png';
// import supermicro from './assets/supermicro.png';

const logos = [
  { src: hpe, alt: 'Hewlett Packard Enterprise' },
  { src: intel, alt: 'Intel' },
  { src: lenovo, alt: 'Lenovo' },
  { src: hp, alt: 'hp ' },
  { src: dell, alt: 'dell' },
  { src: nvidia, alt: 'Nvidia' },
  { src: amd, alt: 'AMD' },
  { src: cisco, alt: 'Cisco' },
];

export default function PartnersBar() {
  return (
    <section className="w-full bg-black py-12 flex flex-col items-center">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="text-gray-400 text-center mb-10 text-lg md:text-xl font-normal">
          Seamless integrations with any data center hardware
        </div>
        <div className="relative w-full overflow-x-hidden">
        <motion.div
          className="flex gap-x-12 items-center"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 18,
            ease: 'linear',
          }}
          style={{ width: 'max-content' }}
        >
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="h-12 w-32 flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-16 w-28 object-contain filter grayscale brightness-0 invert opacity-70"
                // You can tweak opacity for lighter/darker grey
              />
            </div>
          ))}
        </motion.div>
      </div>
        <div className="flex flex-col items-center mt-14">
          <span className="px-4 py-1 rounded-full bg-[#232228] text-gray-400 text-xs font-semibold mb-4">Built for AI</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-3">Modernizing the Digital Backbone</h2>
          <div className="text-gray-400 text-lg text-center max-w-2xl">
            Data center software (DCIM, BMS and EPMS) has stagnated. We've built a better way.
          </div>
        </div>
      </div>
    </section>
  );
} 