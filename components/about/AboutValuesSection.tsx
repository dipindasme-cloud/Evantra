"use client";

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

const values = [
  {
    number: "01",
    title: "Curated Excellence",
    text: "We hand-select premium vehicles that represent strong design language, engineering confidence, and refined road presence.",
  },
  {
    number: "02",
    title: "Trusted Quality",
    text: "Each model is presented with a commitment to clarity, authenticity, and a premium standard of review.",
  },
  {
    number: "03",
    title: "Elevated Service",
    text: "We shape every interaction to feel smooth, intentional, and personal from discovery to decision.",
  },
];

export default function AboutValuesSection() {
  return (
    <Section className="relative overflow-hidden bg-neutral-950 py-20 text-white sm:py-24 md:py-28 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/4 h-60 w-60 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-teal-400/10 blur-3xl" />
      </div>

      <Container className="relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            variants={fadeUp}
            className="mx-auto mb-12 max-w-3xl text-center md:mb-16"
          >
            <span className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.24em] text-white/60 backdrop-blur-sm">
              Our Values
            </span>

            <SectionHeading
              variant="h1"
              as="h2"
              className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
            >
              Built on trust, precision, and premium experience.
            </SectionHeading>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
              Our philosophy goes beyond showcasing luxury vehicles. We create a
              refined environment where design, credibility, and customer
              experience work together seamlessly.
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-3">
            {values.map((item) => (
              <motion.div
                key={item.number}
                variants={fadeUp}
                className="group rounded-[26px] border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:bg-white/[0.05] hover:border-white/15 backdrop-blur-md"
              >
                <div className="mb-6 text-sm font-medium tracking-[0.22em] text-white/35">
                  {item.number}
                </div>

                <h3 className="text-xl font-semibold tracking-tight text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/65 sm:text-base">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}