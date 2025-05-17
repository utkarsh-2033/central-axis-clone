import { motion } from 'framer-motion';

const features = [
  {
    title: 'Advanced Monitoring',
    desc: 'Cutting-edge monitoring solutions for your data center, offering real-time insights and comprehensive analytics to optimize performance, reduce costs, and enhance reliability.',
    bullets: [
      'Real-time performance metrics and predictive analytics',
      'Automated alerts and intelligent incident response',
      'Comprehensive reporting and trend analysis',
    ],
  },
  {
    title: 'Network Management and Monitoring',
    desc: 'Comprehensive network monitoring and management that ensures optimal performance, security, and reliability across your entire data center infrastructure.',
    bullets: [
      'Real-time network performance monitoring and bandwidth optimization',
      'Automated network security and threat detection',
      'Advanced network diagnostics and troubleshooting tools',
    ],
  },
  {
    title: 'Asset Management',
    desc: 'Streamline your data center operations with our comprehensive asset management system. Track, maintain, and optimize your infrastructure with precision and ease.',
    bullets: [
      'Automated inventory tracking and lifecycle management',
      'Intelligent ticketing based on asset health and performance',
      'Efficient resource allocation and optimization',
    ],
  },
  {
    title: 'A Single Pane of Glass',
    desc: 'A unified view across all of your BMS and EPMS systems, tailored to your needs.',
    bullets: [
      'Comprehensive visibility across all of your colocation infrastructure',
      'Customizable interface tailored to your specific operational requirements and priorities.',
      'Unified dashboard integrating all BMS and EPMS systems for seamless monitoring and management.',
    ],
  },
  {
    title: 'Built-In Compliance',
    desc: 'CentralAxis provides compliance as a service for data centers.',
    bullets: [
      'Track data for EU, US, and global regulatory standards.',
      'We guarantee compliance and handle every step between monitoring and reporting.',
    ],
  },
  {
    title: 'Data Center Planning',
    desc: 'Support the latest and greatest architectures. Model new architectures and see detailed implications on power and cooling needs.',
    bullets: [
      'Model new architectures and see detailed implications on power and cooling needs.',
      'Design unique specifications for your data center.',
      'Continuous monitoring lowers costs while increasing reliability.',
    ],
  },
];

export default function FeaturesSection() {
  return (
    <section className="w-full bg-[#18181b] py-12 flex flex-col items-center">
      <div className="w-full max-w-6xl flex flex-col gap-10">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`flex flex-col md:flex-row md:items-center bg-[#232136] rounded-xl shadow-lg overflow-hidden`}
          >
            <div className="flex-1 p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">{feature.title}</h2>
              <p className="text-gray-400 mb-4">{feature.desc}</p>
              <ul className="list-none space-y-2">
                {feature.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-2 text-gray-300">
                    <span className="text-purple-400 mt-1">●</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 min-h-[220px] flex items-center justify-center bg-[#18181b]">
              {/* Placeholder for image/chart */}
              <div className="w-64 h-40 bg-gray-800 rounded-lg flex items-center justify-center text-gray-500 text-lg">
                Screenshot
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 