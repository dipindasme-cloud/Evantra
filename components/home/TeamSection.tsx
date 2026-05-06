"use client";

import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { useEffect, useState } from "react";
import Container from "@/components/layout/Container";
import Image from "next/image";

const experiences = [
  {
    title: "Daniel Morgan",
    tag: "Founder & CEO",
    image: "/team/team1.jpg",
  },
  {
    title: "Jancy Joseph",
    tag: "Technical Director",
    image: "/team/team2.png",
  },
  {
    title: "Jacob John",
    tag: "Sales Director",
    image: "/team/team3.png",
  },
];

export default function Experiences() {
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setCanHover(media.matches);

    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return (
    <section className="relative overflow-hidden bg-black/80 py-20 text-white backdrop-blur-xl sm:py-24 md:py-28 lg:py-32">
      <Container>
        {/* Header */}
        <div className="mx-auto mb-14 max-w-2xl px-4 text-center sm:mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-4 text-sm uppercase tracking-[0.4em] text-white/40"
          >
            The Collective
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="mb-3 text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl"
          >
            Meet the Minds Behind Evantra
          </motion.h2>
        </div>

        {/* Mobile scroll / desktop grid */}
        <div
          className="
            flex snap-x snap-mandatory gap-5 overflow-x-auto overflow-y-hidden px-4 pb-3
            md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:snap-none md:px-0 md:pb-0
            [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
          "
          aria-label="Team members"
        >
          {experiences.map((item, i) => {
            const mouseX = useMotionValue(0);
            const mouseY = useMotionValue(0);

            return (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 1,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onMouseMove={(e) => {
                  if (!canHover) return;
                  const rect = e.currentTarget.getBoundingClientRect();
                  mouseX.set(e.clientX - rect.left);
                  mouseY.set(e.clientY - rect.top);
                }}
                className="group relative w-[82vw] shrink-0 snap-start rounded-2xl p-[1px] sm:w-[72vw] md:w-auto"
              >
                {/* Outer glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/15 via-transparent to-transparent opacity-0 transition-all duration-500 md:group-hover:opacity-100" />

                {/* Mouse follow glow */}
                <motion.div
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition duration-700 md:group-hover:opacity-100"
                  style={{
                    background: useMotionTemplate`
                      radial-gradient(
                        180px circle at ${mouseX}px ${mouseY}px,
                        rgba(255,255,255,0.10),
                        transparent 72%
                      )
                    `,
                  }}
                />

                {/* Card */}
                <div className="relative h-[280px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md transition-all duration-500 sm:h-[320px] md:h-[380px] md:group-hover:border-white/20 md:group-hover:shadow-[0_18px_50px_rgba(0,0,0,0.38)]">
                  {/* Image */}
                  <div className="absolute inset-0 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 82vw, (max-width: 768px) 72vw, 33vw"
                      className="object-cover object-top transition-transform duration-700 md:group-hover:scale-105"
                    />
                  </div>

                  {/* Main dark overlay */}
                  <div
                    aria-hidden="true"
                    className="
                      absolute inset-0
                      bg-gradient-to-t
                      from-black/95 via-black/70 via-[38%] to-transparent
                      transition-all duration-500
                      md:from-black/90 md:via-black/55 md:to-transparent
                    "
                  />

                  {/* Content area gradient */}
                  <div
                    aria-hidden="true"
                    className="
                      absolute inset-x-0 bottom-0 h-[58%]
                      bg-gradient-to-t from-black/70 via-black/30 to-transparent
                    "
                  />

                  {/* Content */}
                  <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-5 md:p-6">
                    <motion.div
                      initial={{ opacity: 0.7, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ duration: 0.8 }}
                      className="transition-all duration-500 md:group-hover:-translate-y-1"
                    >
                      <p className="mb-2 text-[11px] uppercase tracking-[0.28em] text-white/72 transition-colors duration-500 md:group-hover:text-white/85">
                        {item.tag}
                      </p>

                      <h3 className="text-lg font-medium text-white transition-colors duration-500 md:text-xl md:group-hover:text-white">
                        {item.title}
                      </h3>
                    </motion.div>

                    {/* Line */}
                    <div className="mt-4 h-[1px] w-16 overflow-hidden bg-white/20">
                      <span className="block h-full origin-center scale-x-0 bg-white transition-transform duration-700 ease-out group-hover:scale-x-100" />
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}