"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import Section from "@/components/layout/Section";

type Car = {
  id: number;
  name: string;
  specs: string;
  video: string;
  poster?: string;
  image: string;
  href: string;
};

const heroCars: Car[] = [
  {
    id: 1,
    name: "Mercedes S-Class",
    specs: "2023 • 12,000 km • 4.0L V8 • Automatic • Petrol",
    video: "/Herowallpaper/Herovideo.mp4",
    poster: "/Hero.png",
    image: "Hero.png",
    href: "/Hero",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function LuxuryHeroSection() {
  const car = heroCars[0];

  return (
    <div className="relative overflow-hidden bg-black/80 text-white backdrop-blur-xl">
      {/* Text section only */}
      <Section className="bg-transparent !py-0">
        <Container className="pt-16 pb-6 sm:pt-20 sm:pb-8 md:pt-24 md:pb-8 lg:pt-28 lg:pb-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="px-4 sm:px-0">
              <SectionHeading
                variant="h1"
                as="h2"
                className="mb-3 text-center text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl"
              >
                Explore Our Luxury Cars
              </SectionHeading>

              <p className="mx-auto mt-3 max-w-2xl text-center text-body text-white/70">
                Browse our curated selection of premium vehicles and stay informed
                with insights on performance, design, and innovation behind every
                model we offer.
              </p>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Full-bleed media */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden bg-neutral-950 min-h-[42dvh] sm:min-h-[50dvh] md:min-h-[58dvh] lg:min-h-[72dvh] xl:min-h-[80dvh]"
      >
        {/* Mobile / Tablet image */}
        <img
          src={car.image}
          alt={car.name}
          className="absolute inset-0 block h-full w-full object-cover lg:hidden"
        />

        {/* Desktop video */}
        <video
          className="absolute inset-0 hidden h-full w-full object-cover lg:block"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={car.poster || car.image}
        >
          <source src={car.video} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black via-black/50 to-teal-950/35" />

        {/* Content over media */}
        <Container className="relative z-10 h-full">
          <div className="flex min-h-[42dvh] items-center justify-center sm:min-h-[50dvh] md:min-h-[58dvh] lg:min-h-[72dvh] xl:min-h-[80dvh]">
            <div className="mx-auto max-w-2xl text-center">
              <h3 className="mb-3 text-h2 font-semibold tracking-tight sm:mb-4">
                {car.name}
              </h3>

              <p className="mb-6 text-body leading-6 text-white/80 sm:mb-8 sm:leading-7">
                {car.specs}
              </p>

              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                <Link
                  href={car.href}
                  className="inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200 sm:px-6 sm:py-3.5"
                >
                  Learn more
                </Link>

                <Link
                  href="/cars"
                  className="inline-flex items-center rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:px-6 sm:py-3.5"
                >
                  View all
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </motion.div>
    </div>
  );
}