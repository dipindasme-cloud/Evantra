import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Highlights from "@/components/home/Highlights";
import FeaturedEvents from "@/components/home/Eventsneed";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import FinalCTA from "@/components/home/FinalCTA";
import Carousel from "@/components/home/Carousel";
import TeamSection from "@/components/home/TeamSection";
import Hero2 from "@/components/home/Hero2";



export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero2 />
      <Highlights />
      <FeaturedEvents/>
      <TeamSection />
      <Testimonials />
      <Carousel />
      <FAQ />
      
      <FinalCTA />
      <Footer />
    </main>
  );
}
