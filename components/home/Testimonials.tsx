"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Image from "next/image";

const testimonials = [
  {
    name: "Arjun Jackob",
    role: "Entrepreneur",
    image: "/testimonials/1.jpg",
    quote:
      "An unforgettable experience. From the cars to the event execution, everything felt world-class and incredibly exclusive.",
  },
  {
    name: "Ancia Philip",
    role: "Creative Director",
    image: "/testimonials/2.jpg",
    quote:
      "This platform redefines luxury. The attention to detail and curated experiences are unlike anything I’ve seen before.",
  },
  {
    name: "Bravis Alex",
    role: "Investor",
    image: "/testimonials/3.jpg",
    quote:
      "From private track days to elite networking, every moment feels premium. Highly recommended for those who expect more.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-black text-white py-24">
      <Container>
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-white/50 mb-4">
            Testimonials
          </p>
          <h2 className="mb-3 text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
            Trusted by Those Who Expect More
          </h2>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-500 hover:bg-white/10 hover:border-white/30"
            >
              {/* Quote */}
              <p className="text-md text-white/70 leading-relaxed mb-6">
                “{item.quote}”
              </p>

              {/* User */}
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <p className="text-base font-semibold">{item.name}</p>
                  <p className="text-sm text-white/50">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}