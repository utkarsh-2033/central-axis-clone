export default function PartnersBar() {
  return (
    <section className="w-full bg-[#18181b] py-8 flex flex-col items-center">
      <div className="text-gray-400 text-center mb-6 text-base md:text-lg">
        Seamless integrations with any data center hardware
      </div>
      <div className="flex flex-wrap justify-center gap-8 md:gap-12 items-center w-full max-w-5xl">
        {/* Partner logos as SVG placeholders */}
        <span className="text-gray-300 text-2xl">Cisco</span>
        <span className="text-gray-300 text-2xl">Dell</span>
        <span className="text-gray-300 text-2xl">HP</span>
        <span className="text-gray-300 text-2xl">Intel</span>
        <span className="text-gray-300 text-2xl">Lenovo</span>
        <span className="text-gray-300 text-2xl">Schneider</span>
        <span className="text-gray-300 text-2xl">Supermicro</span>
        <span className="text-gray-300 text-2xl">Nvidia</span>
      </div>
    </section>
  );
} 