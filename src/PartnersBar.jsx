import { motion } from 'framer-motion';
import dell from './assets/dell.png';
import hp from './assets/hp.png';
import intel from './assets/intel.png';
import lenovo from './assets/lenovo.png';
import amd from './assets/amd.png';
import nvidia from './assets/nvidia.png';
import cisco from './assets/cisco.png';

const logos = [
  { src: cisco, alt: 'Cisco' },
  { src: dell, alt: 'Dell' },
  { src: hp, alt: 'HP' },
  { src: intel, alt: 'Intel' },
  { src: lenovo, alt: 'Lenovo' },
  { src: amd, alt: 'AMD' },
  { src: nvidia, alt: 'Nvidia' },
];

export default function PartnersBar() {
  return (
    <section className="w-full bg-[#18181b] py-8 flex flex-col items-center overflow-x-hidden">
      <div className="text-gray-400 text-center mb-6 text-base md:text-lg">
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
                className="h-10 w-24 object-contain filter grayscale brightness-0 invert opacity-70"
                // You can tweak opacity for lighter/darker grey
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 