import { motion } from 'framer-motion';
import video2 from '../assets/networking-b.mp4';
import video1 from '../assets/hb-monitoring.mp4';
import video3 from '../assets/asset-management-b.mp4';
import video4 from '../assets/SinglePane-b.mp4';
import video5 from '../assets/compliance.mp4';
import video6 from '../assets/dc-planning.mp4';

const features = [
  {
    title: 'Advanced Monitoring',
    desc: 'CentralAxis provides cutting-edge monitoring solutions for your data center, offering real-time insights and comprehensive analytics to optimize performance, reduce costs, and enhance reliability.',
    bullets: [
      'Real-time performance metrics and predictive analytics',
      'Automated alerts and intelligent incident response',
      'Comprehensive reporting and trend analysis',
    ],
    video: video1,
  },
  {
    title: 'Network Management and Monitoring',
    desc: 'Comprehensive network monitoring and management that ensures optimal performance, security, and reliability across your entire data center infrastructure.',
    bullets: [
      'Real-time network performance monitoring and bandwidth optimization',
      'Automated network security and threat detection',
      'Advanced network diagnostics and troubleshooting tools',
    ],
    video: video2,
  },
  {
    title: 'Asset Management',
    desc: 'Streamline your data center operations with our comprehensive asset management system. Track, maintain, and optimize your infrastructure with precision and ease.',
    bullets: [
      'Automated inventory tracking and lifecycle management',
      'Intelligent ticketing based on asset health and performance',
      'Efficient resource allocation and optimization',
    ],
    video: video3,
  },
  {
    title: 'A Single Pane of Glass',
    desc: 'A unified view across all of your BMS and EPMS systems, tailored to your needs.',
    bullets: [
      'Comprehensive visibility across all of your colocation infrastructure',
      'Customizable interface tailored to your specific operational requirements and priorities.',
      'Unified dashboard integrating all BMS and EPMS systems for seamless monitoring and management.',
    ],
    video: video4,
  },
  {
    title: 'Built-In Compliance',
    desc: 'CentralAxis provides compliance as a service for data centers.',
    bullets: [
      'Track data for EU, US, and global regulatory standards.',
      'We guarantee compliance and handle every step between monitoring and reporting.',
    ],
    video: video5,
  },
  {
    title: 'Data Center Planning',
    desc: 'Support the latest and greatest architectures. Model new architectures and see detailed implications on power and cooling needs.',
    bullets: [
      'Model new architectures and see detailed implications on power and cooling needs.',
      'Design unique specifications for your data center.',
      'Continuous monitoring lowers costs while increasing reliability.',
    ],
    video: video6,
  },
];

export default function FeaturesSection() {
  return (
    <section className="w-full bg-black py-12 flex flex-col items-center ">
      <div className="w-full max-w-7xl mx-auto px-4 flex flex-col gap-8 md:gap-10">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="flex flex-col md:flex-row md:items-center bg-[#232228] rounded-2xl border border-[#232136] shadow-lg overflow-hidden p-0 md:p-2"
          >
            {/* On mobile, video first; on desktop, video left/right alternates */}
            <div className={`w-full md:w-1/2 flex items-center justify-center ${i % 2 === 1 ? 'md:order-2' : ''}`}>
              <video
                src={feature.video}
                className="w-full h-40 md:h-76 rounded-lg object-cover border border-[#232136] bg-black"
                autoPlay
                loop
                muted
                playsInline
                controls={false}
              />
            </div>
            <div className={`w-full md:w-1/2 flex flex-col justify-center py-8 px-4 md:p-8 ${i % 2 === 1 ? 'md:order-1' : ''}`}>
              <h2 className="text-xl md:text-3xl font-bold mb-2 text-white leading-snug">{feature.title}</h2>
              <p className="text-gray-400 mb-4 text-sm md:text-lg leading-relaxed">{feature.desc}</p>
              <ul className="list-none space-y-4">
                {feature.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-3 text-gray-200 text-sm md:text-lg">
                    <span className="mt-2 text-gray-600">
                      {/* <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-text-tertiary dark:text-dark-text-tertiary">...</svg> */}
                      <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#232136"/><path d="M7 13l3 3 7-7" stroke="#808080" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 