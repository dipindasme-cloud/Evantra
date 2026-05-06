
// app/about/page.tsx
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import AboutSection from "@/components/about/AboutSection";
import AboutValuesSection from "@/components/about/AboutValuesSection";
import AboutJourneySection from "@/components/about/AboutJourneySection";

export default function About() {
  return (
  <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <AboutSection/>
      <AboutValuesSection />
      <AboutJourneySection />

      
      
      <Footer />
    </main>
  );
}