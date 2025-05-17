import { motion } from 'framer-motion';

const logos = [
  { src: '/assets/cisco.svg', alt: 'Cisco' },
  { src: '/assets/dell.svg', alt: 'Dell' },
  { src: '/assets/hp.svg', alt: 'HP' },
  { src: '/assets/intel.svg', alt: 'Intel' },
  { src: '/assets/lenovo.svg', alt: 'Lenovo' },
  { src: '/assets/schneider.svg', alt: 'Schneider Electric' },
  { src: '/assets/supermicro.svg', alt: 'Supermicro' },
  { src: '/assets/nvidia.svg', alt: 'Nvidia' },
];

export default function PartnersBar() {
  return (
    <section className="w-full bg-[#18181b] py-8 flex flex-col items-center">
      <div className="text-gray-400 text-center mb-6 text-base md:text-lg">
        Seamless integrations with any data center hardware
      </div>
      <div className="w-full flex flex-wrap justify-center items-center gap-x-12 gap-y-6 px-4">
        {logos.map((logo, i) => (
          <img
            key={i}
            src={logo.src}
            alt={logo.alt}
            className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition"
            style={{ minWidth: 80 }}
          />
        ))}
      </div>
    </section>
  );
} 