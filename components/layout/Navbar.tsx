"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Container from "@/components/layout/Container";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Cars", href: "/cars" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const overflowValue = open ? "hidden" : "";
    document.body.style.overflow = overflowValue;
    document.documentElement.style.overflow = overflowValue;

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
  scrolled
    ? "bg-black/55 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.18)]"
    : "bg-transparent"
}`}
      >
        <Container className="px-4 md:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link
              href="/"
              className="text-xl font-semibold tracking-tight text-white"
            >
              Evantra
            </Link>

            <nav className="hidden items-center gap-6 md:flex">
              {NAV_LINKS.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group relative text-md transition duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-white/60 hover:text-white"
                    }`}
                    aria-label={item.label}
                  >
                    {item.label}
                    <span
                      className={`absolute bottom-0 left-0 h-px bg-white transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="hidden rounded-full bg-white px-5 py-2 text-md font-medium text-black transition md:block"
            >
              Join
            </motion.button>

            <button
              onClick={() => setOpen(!open)}
              className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 backdrop-blur-sm md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <span
                className={`absolute h-px w-5 bg-white transition-all duration-300 ${
                  open ? "rotate-45" : "-translate-y-1.5"
                }`}
              />
              <span
                className={`absolute h-px w-5 bg-white transition-all duration-300 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute h-px w-5 bg-white transition-all duration-300 ${
                  open ? "-rotate-45" : "translate-y-1.5"
                }`}
              />
            </button>
          </div>
        </Container>
      </motion.header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/50 md:hidden"
              onClick={() => setOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="fixed left-0 top-[70px] z-50 w-full md:hidden"
            >
              <Container className="px-4">
                <div className="rounded-2xl border border-white/10 bg-black/80 p-6 py-5 backdrop-blur-xl">
                  <nav className="flex flex-col gap-6 text-center">
                    {NAV_LINKS.map((item) => {
                      const isActive =
                        item.href === "/"
                          ? pathname === "/"
                          : pathname.startsWith(item.href);

                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className={`text-lg transition ${
                            isActive
                              ? "text-white"
                              : "text-white/70 hover:text-white"
                          }`}
                        >
                          {item.label}
                        </Link>
                      );
                    })}
                  </nav>

                  <button
                    onClick={() => setOpen(false)}
                    className="mt-4 w-full rounded-full bg-white py-3 font-medium text-black transition"
                  >
                    Join
                  </button>
                </div>
              </Container>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}