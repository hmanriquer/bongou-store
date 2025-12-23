import { Header } from '@/components/header';
import HeroSection from '@/components/hero-section';
import InfoSection from '@/components/info-section';
import LikeHomeSection from '@/components/like-home-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';

export default function Main() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <HeroSection />
      <InfoSection />
      <LikeHomeSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
