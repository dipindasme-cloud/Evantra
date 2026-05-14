"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import Image from "next/image";

const images = [
  "/Carousel/card1.jpg",
  "/Crousel/card2.jpg",
  "/Carousel/card3.jpg",
  "/Carousel/card4.jpg",
  "/Carousel/card5.jpg",
];

export default function Carousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const firstSetRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const speedRef = useRef(1);

  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const getBaseSpeed = () => {
    if (typeof window === "undefined") return 0.7;

    const width = window.innerWidth;

    if (width < 640) return 0.35;
    if (width < 1024) return 0.55;
    return 0.8;
  };

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReducedMotion(media.matches);

    update();
    media.addEventListener("change", update);

    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    const firstSet = firstSetRef.current;

    if (!track || !firstSet || prefersReducedMotion) return;

    let offset = 0;
    let baseSpeed = getBaseSpeed();

    const updateBaseSpeed = () => {
      baseSpeed = getBaseSpeed();
    };

    const animate = () => {
      if (isPaused) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      const resetPoint = firstSet.offsetWidth;
      offset += baseSpeed * speedRef.current;

      if (offset >= resetPoint) {
        offset -= resetPoint;
      }

      track.style.transform = `translate3d(-${offset}px, 0, 0)`;
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    updateBaseSpeed();
    animationFrameRef.current = requestAnimationFrame(animate);
    window.addEventListener("resize", updateBaseSpeed);

    return () => {
      window.removeEventListener("resize", updateBaseSpeed);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPaused, prefersReducedMotion]);

  const handleMouseEnter = () => {
    speedRef.current = 0.35;
  };

  const handleMouseLeave = () => {
    speedRef.current = 1;
  };

  return (
    <section className="overflow-hidden bg-black py-20 text-white sm:py-24 md:py-28">
      <Container>
        <div className="mb-10 px-4 text-center">
          <SectionHeading
            variant="h2"
            as="h2"
            className="mb-3 text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl"
          >
            Luxury, Engineered
          </SectionHeading>

          <p className="mx-auto mt-4 max-w-2xl text-body text-white/70">
            Iconic vehicles, elite events, and elevated experiences, united under one refined lifestyle platform.
          </p>

          
        </div>
      </Container>

      <div
        className="relative overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-label="Luxury vehicle showcase"
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-black via-black to-transparent sm:w-16 md:w-24 lg:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-black via-black to-transparent sm:w-16 md:w-24 lg:w-32" />

        <div className="px-4 sm:px-6 md:px-8 lg:px-10">
          <div
            ref={trackRef}
            className={`flex w-max will-change-transform ${
              prefersReducedMotion ? "gap-4 sm:gap-5 md:gap-6" : ""
            }`}
          >
            <div
              ref={firstSetRef}
              className="flex gap-4 pr-4 sm:gap-5 sm:pr-6 md:gap-6 md:pr-8 lg:pr-10"
            >
              {images.map((src, i) => (
                <div
                  key={i}
                  className="relative h-[300px] w-[280px] flex-shrink-0 overflow-hidden rounded-[var(--radius-md)] sm:h-[320px] sm:w-[300px] md:h-[360px] md:w-[340px] lg:h-[380px] lg:w-[360px]"
                >
                  <Image
                    src={src}
                    alt={`Luxury vehicle showcase ${i + 1}`}
                    fill
                    sizes="(max-width: 640px) 280px, (max-width: 768px) 300px, (max-width: 1024px) 340px, 360px"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
              ))}
            </div>

            {!prefersReducedMotion && (
              <div className="flex gap-4 pr-4 sm:gap-5 sm:pr-6 md:gap-6 md:pr-8 lg:pr-10" aria-hidden="true">
                {images.map((src, i) => (
                  <div
                    key={`dup-${i}`}
                    className="relative h-[300px] w-[280px] flex-shrink-0 overflow-hidden rounded-[var(--radius-md)] sm:h-[320px] sm:w-[300px] md:h-[360px] md:w-[340px] lg:h-[380px] lg:w-[360px]"
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 280px, (max-width: 768px) 300px, (max-width: 1024px) 340px, 360px"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}