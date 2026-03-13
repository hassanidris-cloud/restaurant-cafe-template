import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Hero } from "../components/sections/Hero";
import { AboutStory } from "../components/sections/AboutStory";
import { MenuPreview } from "../components/sections/MenuPreview";
import { SignatureDishes } from "../components/sections/SignatureDishes";
import { GallerySection } from "../components/sections/GallerySection";
import { ReservationSection } from "../components/sections/ReservationSection";
import { LocationHours } from "../components/sections/LocationHours";
import { CallToAction } from "../components/sections/CallToAction";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main className="pt-4">
        <Hero />
        <AboutStory />
        <MenuPreview />
        <SignatureDishes />
        <GallerySection />
        <ReservationSection />
        <LocationHours />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

