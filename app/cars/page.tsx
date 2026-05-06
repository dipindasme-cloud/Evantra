import Navbar from "@/components/layout/Navbar";
// app/cars/page.tsx
import Footer from "@/components/layout/Footer";
import LuxuryCarsSection from "@/components/cars/LuxuryCarsSection";
import Hero from "@/components/cars/Hero";

export default function Cars() {
  return (
  <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <LuxuryCarsSection />
      
      <Footer />
    </main>
  );
}