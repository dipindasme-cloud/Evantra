// You already shared this exact file; keep it as‑is in
// components/sections/Highlights.tsx

"use client";

import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { ShieldCheck, Car, Gem, LucideIcon } from "lucide-react";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

interface HighlightItem {
  title: string;
  desc: string;
  icon: LucideIcon;
}

const highlights: HighlightItem[] = [
  {
    title: "Exclusive Access",
    desc: "Step into invite-only events and curated experiences designed for a select few.",
    icon: ShieldCheck,
  },
  {
    title: "Iconic Machines",
    desc: "Get behind the wheel of the world’s most prestigious and high-performance cars.",
    icon: Car,
  },
  {
    title: "Elite Lifestyle",
    desc: "Join a community where luxury, status, and unforgettable moments define your journey.",
    icon: Gem,
  },
];

export default function Highlights() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  return (
    <Section background="surface" spacing="md" className="bg-black text-white overflow-hidden">
      <Container>
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-xs uppercase tracking-[0.4em] text-white/40"
          >
            The Experience
          </motion.p>

          <h2 className="mb-3 text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
            What Defines Luxury
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {highlights.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial="initial"
                whileInView="animate"
                whileHover="hover"
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, delay: i * 0.1 },
                  },
                }}
                onMouseMove={(e) => {
                  if (window.innerWidth > 768) {
                    const rect = e.currentTarget.getBoundingClientRect();
                    mouseX.set(e.clientX - rect.left);
                    mouseY.set(e.clientY - rect.top);
                  }
                }}
                className="group relative h-full overflow-hidden rounded-[var(--radius-lg)] p-[1px]"
              >
                <motion.div
                  className="pointer-events-none absolute inset-0 hidden rounded-[var(--radius-lg)] opacity-0 transition duration-500 md:block md:group-hover:opacity-100"
                  style={{
                    background: useMotionTemplate`
                      radial-gradient(300px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.12), transparent 80%)
                    `,
                  }}
                />

                <div className="relative h-full rounded-[calc(var(--radius-lg)-1px)] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md transition-all duration-500 md:group-hover:border-white/20">
                  <div className="mb-6 inline-flex rounded-xl border border-white/10 bg-white/5 p-3 text-white/50 transition md:group-hover:text-white">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>

                  <h3 className="text-lg font-medium text-white transition-colors duration-500 md:text-xl md:group-hover:text-white">
                    {item.title}
                  </h3>

                  <p className="text-md leading-relaxed text-white/40 transition md:group-hover:text-white/70">
                    {item.desc}
                  </p>

                  <div className="mt-8">
                    <div className="w-full overflow-hidden">
                      <motion.div
                        className="h-[1px] w-full origin-center bg-white/40"
                        variants={{
                          initial: { scaleX: 0 },
                          animate: {
                            scaleX: 0.4,
                            transition: {
                              duration: 1,
                              delay: 0.5 + i * 0.1,
                              ease: "easeOut",
                            },
                          },
                          hover: {
                            scaleX: 1,
                            backgroundColor: "rgba(255,255,255,1)",
                            transition: {
                              duration: 0.4,
                              ease: "easeOut",
                            },
                          },
                        }}
                        style={{ transformOrigin: "center" }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}