"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import { ArrowUpRight } from "lucide-react";
import Section from "@/components/layout/Section";

const events = [
  {
    title: "Midnight Supercar Drive",
    location: "Dubai",
    date: "Aug 24, 2026",
    image: "/events/1.jpg",
  },
  {
    title: "Luxury Yacht Experience",
    location: "Monaco",
    date: "Sep 12, 2026",
    image: "/events/2.jpg",
  },
  {
    title: "Private Track Day",
    location: "Italy",
    date: "Oct 05, 2026",
    image: "/events/3.jpg",
  },
];

export default function FeaturedEvents() {
  return (
    <section className="relative overflow-hidden bg-black/80 py-20 text-white backdrop-blur-xl sm:py-24 md:py-28 lg:py-32">
      <Container>
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/50">
            Experiences
          </p>
          <h2 className="mb-3 text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
            Curated For The Exceptional
          </h2>
        </div>

        {/* 3 cards in one horizontal row on md+ */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              viewport={{ once: true, amount: 0.2 }}
              className="group relative overflow-hidden rounded-[var(--radius-lg)] bg-neutral-950"
            >
              <div className="relative min-h-[320px] w-full sm:min-h-[360px] lg:min-h-[420px]">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 33vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              <div className="absolute bottom-0 left-0 p-5 sm:p-6">
                <p className="mb-2 text-sm uppercase tracking-widest text-white/60">
                  {event.location} • {event.date}
                </p>

                <h3 className="text-lg font-medium text-white transition-colors duration-500 md:text-xl md:group-hover:text-white">
                  {event.title}
                </h3>

                <button className="group/btn mt-3 inline-flex flex-col items-start text-sm text-white/80 transition hover:text-white">
                  <span className="inline-flex items-center gap-2">
                    <span>Read the full review</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                  </span>
                  <span className="relative mt-1 block h-[1px] w-full overflow-hidden bg-white/20">
                    <span className="absolute inset-0 origin-center scale-x-0 bg-white transition-transform duration-500 ease-out group-hover/btn:scale-x-100" />
                  </span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>

      {/* CTA button */}
      <div className="mt-12 text-center">
        <button className="rounded-full border border-white/20 px-6 py-3 text-sm transition hover:bg-white/10">
          View All Experiences
        </button>
      </div>
    </section>
  );
}