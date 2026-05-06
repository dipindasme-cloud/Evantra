"use client";

import Link from "next/link";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { useEffect, useState } from "react";
import Container from "@/components/layout/Container";

export default function FinalCTASection() {
  const [canHover, setCanHover] = useState(false);

  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setCanHover(media.matches);

    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return (
    <section className="relative overflow-hidden bg-black text-white py-20 sm:py-24 md:py-28 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_45%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] via-transparent to-transparent" />
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          onMouseMove={(e) => {
            if (!canHover) return;
            const rect = e.currentTarget.getBoundingClientRect();
            mouseX.set(e.clientX - rect.left);
            mouseY.set(e.clientY - rect.top);
          }}
          onMouseLeave={() => {
            mouseX.set(-200);
            mouseY.set(-200);
          }}
          className="relative mx-auto max-w-5xl overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-xl"
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />

          <motion.div
            className="pointer-events-none absolute inset-0 hidden transition duration-500 md:block"
            style={{
              background: useMotionTemplate`
                radial-gradient(
                  240px circle at ${mouseX}px ${mouseY}px,
                  rgba(255,255,255,0.16),
                  transparent 70%
                )
              `,
            }}
          />

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-black/35 to-transparent" />

          <div className="relative px-6 py-14 text-center sm:px-10 sm:py-16 md:px-16 md:py-20">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-5 text-[11px] uppercase tracking-[0.42em] text-white/40"
            >
              Private Access
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.05 }}
              className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl"
            >
              Your Next Extraordinary Moment Starts Here
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.12 }}
              className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/68 sm:text-base md:text-lg"
            >
              Apply for access to a world of curated events, iconic supercars,
              and elevated experiences reserved for a discerning few.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.18 }}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Link
                href="/apply"
                className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-medium tracking-wide text-black transition hover:bg-white/90"
              >
                Request an Invitation
              </Link>

              <Link
                href="/membership"
                className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-8 py-4 text-sm font-medium tracking-wide text-white transition hover:bg-white/10"
              >
                Explore Membership
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.24 }}
              className="mt-8 text-[11px] uppercase tracking-[0.28em] text-white/38 sm:text-xs"
            >
              Private access • Global experiences • Curated for members
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}