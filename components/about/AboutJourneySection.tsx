"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/shared/SectionHeading";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0 },
};

const steps = [
  {
    title: "Discover",
    text: "Browse an exclusive collection designed to highlight elegance, performance, and innovation.",
  },
  {
    title: "Evaluate",
    text: "Explore vehicle details through a clear, immersive, and confidence-building experience.",
  },
  {
    title: "Connect",
    text: "Take the next step through a premium inquiry flow tailored for serious buyers and enthusiasts.",
  },
];

export default function AboutJourneySection() {
  return (
    <Section className="relative overflow-hidden bg-black py-20 text-white sm:py-24 md:py-28 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(20,184,166,0.12),transparent_24%)]" />

      <Container className="relative z-10">
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="max-w-xl"
          >
            <span className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.24em] text-white/60 backdrop-blur-sm">
              The Experience
            </span>

            <SectionHeading
              variant="h2"
              as="h3"
              className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl"
            >
              A more thoughtful journey into luxury mobility.
            </SectionHeading>

            <p className="mt-6 text-base leading-7 text-white/70 sm:text-lg">
              We design every step to feel calm, premium, and intentional. From
              first exploration to deeper discovery, our platform reflects the
              same sophistication found in the vehicles we present.
            </p>

            <Link
              href="/cars"
              className="mt-8 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              View Our Cars
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-4"
          >
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5 sm:p-6 backdrop-blur-md"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-white/80">
                    0{index + 1}
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-white/65 sm:text-base">
                      {step.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}