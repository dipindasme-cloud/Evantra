"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0 },
};

export default function CarsHeroSection() {
  return (
    <section className="relative h-[92dvh] w-full overflow-hidden bg-black text-white sm:h-screen">
      {/* Full-bleed background image */}
      <img
        src="/1.jpg"
        alt="Luxury car background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark overlays for readability */}
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_38%)]" />

      {/* Centered text only (no extra padding on the hero level) */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl px-4 text-center"
        >
          <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.24em] text-white/65 backdrop-blur-sm">
            Luxury Collection
          </span>

          <SectionHeading
            variant="h1"
            as="h1"
            className="mx-auto mt-6 max-w-4xl text-3xl font-semibold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl"
          >
            A new expression of luxury on every road.
          </SectionHeading>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
            Discover premium vehicles shaped by elegance, performance, and
            precision—curated for drivers who value presence as much as power.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-neutral-200"
            >
              Book an Inquiry
            </Link>

            <Link
              href="#collection"
              className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explore Collection
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/55">
            <span>Refined performance</span>
            <span>Iconic design</span>
            <span>Private assistance</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}