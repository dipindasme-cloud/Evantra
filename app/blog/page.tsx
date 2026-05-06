import Navbar from "@/components/layout/Navbar";
// app/blog/page.tsx
import Footer from "@/components/layout/Footer";

import Media from "@/components/blog/Media";

export default function Blog() {
  return (
  <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Media/>
      <Footer />
    </main>
  );
}