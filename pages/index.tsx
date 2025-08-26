import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TeachingsSection from "@/components/TeachingsSection";
import TempleSection from "@/components/TempleSection";
import GallerySection from "@/components/GallerySection";
import VideosSection from "@/components/VideosSection";
import DivinePresenceSection from "@/components/DivinePresenceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-sacred-cream">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <TeachingsSection />
        <TempleSection />
        <GallerySection />
        <VideosSection />
        <DivinePresenceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
