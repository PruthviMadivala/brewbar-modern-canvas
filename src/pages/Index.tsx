
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedItems from "@/components/FeaturedItems";
import AboutSection from "@/components/AboutSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="font-sans bg-brewbar-bg min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedItems />
        <AboutSection />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
