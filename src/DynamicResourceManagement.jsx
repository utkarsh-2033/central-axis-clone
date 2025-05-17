const features = [
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="8" fill="#232228"/><path d="M7 12h10M12 7v10" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    title: 'Resource Management',
    desc: 'See all of your resources in one place, update issues, and dynamically plan your resources.',
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="8" fill="#232228"/><path d="M12 7v10M7 12h10" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    title: 'Deployment Automation',
    desc: 'From design, sourcing, supply, manufacturing, and deployment - our system automates the entire process.',
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="8" fill="#232228"/><path d="M4 12h16" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    title: 'Networking',
    desc: 'Ensure that your networking infrastructure is always in place and ready to scale with your deployments.',
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="8" fill="#232228"/><path d="M12 4v16" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    title: 'Firmware Versioning',
    desc: 'Ensure that your firmware is always up to date and secure with our automated versioning system.',
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="8" fill="#232228"/><path d="M7 17l5-5 5 5" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    title: 'Digital Twins',
    desc: 'Plan capacity intelligently with our digital twin technology.',
  },
];

export default function DynamicResourceManagement() {
  return (
    <section className="w-full bg-black pb-20">
      <div className="w-full max-w-7xl mx-auto px-4">
        {/* Purple header bar */}
        <div className="bg-[#2d174c] py-8 px-3 rounded-lg flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">We've Built the Future of Data Centers</h2>
            <div className="text-gray-300 text-lg">Contact our team for a demo</div>
          </div>
          <div className="flex gap-3 mt-6 md:mt-0">
            <button className="bg-[#7c3aed] text-white font-semibold px-6 py-2 rounded-lg text-base shadow transition">Set Up a Time</button>
            <button className="bg-white hover:bg-gray-200 text-[#2d174c] font-semibold px-6 py-2 rounded-lg text-base shadow transition">Learn More</button>
          </div>
        </div>
        {/* Main content */}
        <div className="w-full flex flex-col md:flex-row gap-12 mt-16">
          {/* Left column */}
          <div className="flex-1 flex flex-col justify-start">
            <span className="px-4 py-1 rounded-full bg-[#232228] text-gray-400 text-xs font-semibold mb-4 w-fit">Built for Scale</span>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Dynamic Resource Management</h3>
            <div className="text-gray-400 text-base md:text-lg max-w-md">Seamlessly expand from racks to data centers. Our system grows with you, automatically managing resources across your entire infrastructure.</div>
          </div>
          {/* Right column: feature cards */}
          <div className="flex-1 flex flex-col gap-6">
            {features.map((f, i) => (
              <div key={f.title} className="flex items-start gap-4 bg-[#232228] rounded-xl px-6 py-5 shadow border border-[#232136]">
                <div className="flex-shrink-0 mt-1">{f.icon}</div>
                <div>
                  <div className="font-semibold text-white text-base md:text-lg mb-1">{f.title}</div>
                  <div className="text-gray-400 text-sm md:text-base leading-relaxed">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 