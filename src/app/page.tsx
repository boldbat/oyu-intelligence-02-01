import SmoothScroll from '@/components/SmoothScroll';
import CustomCursor from '@/components/CustomCursor';
import NoiseOverlay from '@/components/NoiseOverlay';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

import HeroSection from '@/components/sections/HeroSection';
import MarqueeSection from '@/components/sections/MarqueeSection';
import MetricsSection from '@/components/sections/MetricsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import CapabilitiesSection from '@/components/sections/CapabilitiesSection';
import ManifestoSection from '@/components/sections/ManifestoSection';
import ProcessSection from '@/components/sections/ProcessSection';
import WorkSection from '@/components/sections/WorkSection';
import TerminalSection from '@/components/sections/TerminalSection';
import ReferencesSection from '@/components/sections/ReferencesSection';
import ZoomMaskSection from '@/components/sections/ZoomMaskSection';

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <NoiseOverlay />
      <Navigation />
      
      <main className="bg-[#030303] text-white min-h-screen">
        <HeroSection />
        <MarqueeSection />
        <MetricsSection />
        <ServicesSection />
        <CapabilitiesSection />
        <ManifestoSection />
        <ProcessSection />
        <WorkSection />
        <TerminalSection />
        <ReferencesSection />
        <ZoomMaskSection />
      </main>
      
      <Footer />
    </SmoothScroll>
  );
}
