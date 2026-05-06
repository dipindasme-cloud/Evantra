"use client";

import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { useEffect, useState } from "react";
import Container from "@/components/layout/Container";
import Image from "next/image";

const experiences = [
  {
    title: "Exclusivity Beyond the Road",
    tag: "Article",
    image: "/blog/1.jpg",
  },
  {
    title: "Inside the World of Modern Grand Touring",
    tag: "Insight",
    image: "/blog/2.jpg",
  },
  {
    title: "Innovation on the Wheels Awaits",
    tag: "Article",
    image: "/blog/3.jpg",
  },
  {
    title: "Crafting Luxury Through Every Detail",
    tag: "Feature",
    image: "/blog/4.jpg",
  },
  {
    title: "Performance That Speaks with Elegance",
    tag: "Review",
    image: "/blog/5.jpg",
  },
  {
    title: "The Design Language of Prestige Cars",
    tag: "Insight",
    image: "/blog/6.jpg",
  },
  {
    title: "Where Comfort Meets Engineering",
    tag: "Article",
    image: "/blog/7.jpg",
  },
  {
    title: "A Closer Look at Timeless Automotive Icons",
    tag: "Feature",
    image: "/blog/8.jpg",
  },
  {
    title: "Redefining the Future of Luxury Mobility",
    tag: "Editorial",
    image: "/blog/9.jpg",
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
    <section className="relative overflow-hidden bg-black/80 py-14 text-white backdrop-blur-xl sm:py-16 md:py-20 lg:py-24">
      <Container>
        {/* Header */}
        <div className="mx-auto mb-10 max-w-3xl px-4 text-center sm:mb-12 md:mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-4 text-sm uppercase tracking-[0.4em] text-white/40"
          >
            Press & Media
          </motion.p>
          

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            Stories, insights, and moments from the world of luxury motoring
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="mx-auto mt-4 max-w-2xl text-base font-medium text-white/80 sm:text-lg"
          >
            A curated journal exploring design, performance, innovation, and
            the lifestyle behind every remarkable drive.
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base"
          >
            Discover editorials, featured reviews, and refined automotive
            perspectives crafted for readers who appreciate engineering,
            elegance, and the emotion of premium mobility.
          </motion.p>
        </div>

        {/* Cards */}
        <div
          className="
            flex snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden pb-2
            sm:gap-5
            md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:snap-none
            xl:grid-cols-3 xl:gap-7
            [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
          "
        >
          {experiences.map((item, i) => {
            const mouseX = useMotionValue(0);
            const mouseY = useMotionValue(0);

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 1,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onMouseMove={(e) => {
                  if (!canHover) return;
                  const rect = e.currentTarget.getBoundingClientRect();
                  mouseX.set(e.clientX - rect.left);
                  mouseY.set(e.clientY - rect.top);
                }}
                className="group relative w-[84vw] shrink-0 snap-start rounded-[var(--radius-lg)] p-[1px] sm:w-[72vw] md:w-auto"
              >
                <div className="absolute inset-0 rounded-[var(--radius-lg)] bg-gradient-to-br from-white/15 via-transparent to-transparent opacity-0 transition-all duration-500 md:group-hover:opacity-100" />

                <motion.div
                  className="pointer-events-none absolute inset-0 rounded-[var(--radius-lg)] opacity-0 transition duration-700 md:group-hover:opacity-100"
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

                <div className="relative h-[280px] overflow-hidden rounded-[var(--radius-lg)] border border-white/10 bg-white/[0.03] backdrop-blur-md transition-all duration-500 sm:h-[320px] md:h-[360px] lg:h-[380px] md:group-hover:border-white/20 md:group-hover:shadow-[0_18px_50px_rgba(0,0,0,0.38)]">
                  <div className="absolute inset-0 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover object-top transition-transform duration-700 md:group-hover:scale-105"
                    />
                  </div>

                  <div
                    aria-hidden="true"
                    className="
                      absolute inset-0 bg-gradient-to-t
                      from-black/95 via-black/70 via-[38%] to-transparent
                      transition-all duration-500
                      md:from-black/90 md:via-black/55 md:to-transparent
                    "
                  />

                  <div
                    aria-hidden="true"
                    className="
                      absolute inset-x-0 bottom-0 h-[58%]
                      bg-gradient-to-t from-black/70 via-black/30 to-transparent
                    "
                  />

                 <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-5 md:p-6">
  <motion.div
    initial={{ opacity: 0.7, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ amount: 0.6 }}
    transition={{ duration: 0.8 }}
    className="transition-all duration-500 md:group-hover:-translate-y-1"
  >
    <p className="mb-1.5 text-xs uppercase tracking-[0.28em] text-white/72 transition-colors duration-500 md:group-hover:text-white/85">
      {item.tag}
    </p>

    <h3 className="text-lg font-medium text-white transition-colors duration-500 md:text-xl md:group-hover:text-white">
      {item.title}
    </h3>
  </motion.div>

  <div className="mt-4 flex w-full">
    <div className="max-w-xs">
      <button className="group/btn inline-flex flex-col items-start text-sm text-white/80 transition hover:text-white">
        <span className="inline-flex items-center gap-2">
          <span>Read the full review</span>
          <span className="text-sm transition-transform duration-300 ease-out group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5">
            ↗
          </span>
        </span>

        <span className="relative mt-1 block h-[1px] w-full overflow-hidden bg-white/20">
          <span className="absolute inset-0 origin-center scale-x-0 bg-white transition-transform duration-500 ease-out group-hover/btn:scale-x-100" />
        </span>
      </button>
    </div>
  </div>
</div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}