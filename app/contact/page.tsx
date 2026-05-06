import Navbar from "@/components/layout/Navbar";
// app/contact/page.tsx
import Footer from "@/components/layout/Footer";
import Contacts from "@/components/contacts/Contact"
export default function Contact() {
  return (
  <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Contacts/>
      <Footer />
    </main>
  );
}