import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PartnersBar from './components/PartnersBar';
import FeaturesSection from './components/FeaturesSection';
import DynamicResourceManagement from './components/DynamicResourceManagement';
import DemoBanner from './components/DemoBanner';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

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
