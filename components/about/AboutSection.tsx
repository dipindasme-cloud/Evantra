"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/shared/SectionHeading";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const highlights = [
  {
    title: "Curated Collection",
    text: "A handpicked portfolio of distinguished vehicles chosen for design, prestige, and performance.",
  },
  {
    title: "Verified Quality",
    text: "Every model is presented with a strong focus on craftsmanship, condition, and trusted standards.",
  },
  {
    title: "Tailored Experience",
    text: "From first discovery to final selection, every touchpoint is designed to feel personal and premium.",
  },
];

export default function AboutSection() {
  return (
    <Section className="relative overflow-hidden bg-black text-white py-20 sm:py-24 md:py-28 lg:py-32">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-teal-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent_25%,transparent_75%,rgba(255,255,255,0.02))]" />
      </div>

      <Container className="relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16"
        >
          {/* Left content */}
          <motion.div variants={fadeUp} className="max-w-2xl">
            <span className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.24em] text-white/60 backdrop-blur-sm">
              About Evantra
            </span>

            <SectionHeading
              variant="h1"
              as="h2"
              className="max-w-xl text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl"
            >
              A modern destination for extraordinary automotive experiences.
            </SectionHeading>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-base leading-7 text-white/70 sm:text-lg"
            >
              We present luxury vehicles through a refined digital experience that
              brings together performance, design, and trust. Every model in our
              collection is selected to reflect timeless craftsmanship, elevated
              engineering, and a standard of excellence that defines premium mobility.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-xl text-base leading-7 text-white/55"
            >
              From first impressions to detailed exploration, our platform is built
              for those who appreciate precision, elegance, and a more considered
              way to discover exceptional cars.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/cars"
                className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200"
              >
                Explore Collection
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            variants={fadeUp}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-md">
              <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black via-black/10 to-transparent" />

              <Image
                src="/about/1.jpg"
                alt="Luxury performance car"
                width={1200}
                height={1400}
                className="h-[420px] w-full object-cover sm:h-[320px] lg:h-[520px]"
              />

              <div className="absolute bottom-0 left-0 z-[2] w-full p-5 sm:p-6">
                <div className="max-w-sm rounded-2xl border border-white/10 bg-black/45 p-4 backdrop-blur-xl">
                  <p className="text-xs uppercase tracking-[0.22em] text-white/50">
                    Refined mobility
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/80">
                    Crafted for those who seek a balance of presence, innovation,
                    and uncompromising performance.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom highlight cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid gap-4 md:grid-cols-3"
        >
          {highlights.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md transition duration-300 hover:bg-white/[0.06]"
            >
              <h3 className="text-lg font-semibold tracking-tight text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/65">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}