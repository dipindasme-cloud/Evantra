"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";

export default function Footer() {
  return (
    <footer className="relative bg-black/80 backdrop-blur-xl text-white pt-16 pb-10 md:pt-20 md:pb-12 overflow-hidden">
      <Container className="px-4 md:px-6 lg:px-8">
        {/* TOP SECTION */}
        <div className="grid md:grid-cols-3 gap-10 md:gap-12 mb-12 md:mb-16">
          {/* BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-xl font-semibold tracking-tight mb-4">
              Evantra
            </h3>
            <p className="text-white/40 max-w-xs text-base">
              A world of curated luxury experiences, elite machines, and unforgettable moments designed for those who expect more.
            </p>
          </motion.div>

          {/* NAVIGATION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            <h4 className="text-md uppercase tracking-widest text-white/40 mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {["Home", "Experiences", "Membership", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white/50 hover:text-white transition duration-300 text-base"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CTA / CONTACT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h4 className="text-md uppercase tracking-widest text-white/40 mb-4">
              Stay Connected
            </h4>
            <p className="text-white/40 mb-6 text-base">
              Get updates on exclusive events and new experiences.
            </p>

            {/* INPUT + BUTTON */}
            <div className="flex items-center gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="
                  flex-1 px-4 py-3 rounded-full
                  bg-white/[0.05] border border-white/10
                  text-base text-white placeholder:text-white/30
                  focus:outline-none focus:border-white/30
                "
              />

              <button
                className="
                  px-4 py-2.5 md:px-5 md:py-3 rounded-full
                  bg-white text-black text-md font-medium
                  hover:scale-105 transition duration-300
                "
              >
                Join
              </button>
            </div>
          </motion.div>
        </div>

        {/* DIVIDER */}
        <div className="h-px bg-white/10 mb-8" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40 px-4 md:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Evantra. All rights reserved.</p>

          <div className="flex gap-5 md:gap-6">
            {["Privacy", "Terms", "Instagram", "Twitter"].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-white transition duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}