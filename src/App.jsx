import Navbar from './Navbar';
import HeroSection from './HeroSection';
import PartnersBar from './PartnersBar';
import FeaturesSection from './FeaturesSection';
import DynamicResourceManagement from './DynamicResourceManagement';
import DemoBanner from './DemoBanner';
import FAQSection from './FAQSection';
import Footer from './Footer';

function App() {
  return (
    <div className="bg-[#18181b] text-white min-h-screen w-full font-sans scroll-smooth">
      <Navbar />
      <HeroSection />
      <PartnersBar />
      <FeaturesSection />
      <DynamicResourceManagement />
      <DemoBanner />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;
