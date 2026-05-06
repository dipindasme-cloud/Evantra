"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

const faqs = [
  {
    question: "What is Evantra?",
    answer:
      "Evantra is a premium lifestyle platform offering curated access to elite events, iconic supercars, and exclusive member experiences across select global destinations.",
  },
  {
    question: "Do I need a membership to access experiences?",
    answer:
      "Some experiences are open for direct inquiry, while member-only access is reserved for select events, priority bookings, and limited private invitations.",
  },
  {
    question: "How does the club membership work?",
    answer:
      "Membership provides access to a more personalized experience, including priority access, private invitations, tailored recommendations, and exclusive lifestyle benefits.",
  },
  {
    question: "Are the experiences available globally?",
    answer:
      "Yes. Evantra is designed around a global luxury lifestyle network, with experiences, events, and partnerships across selected international destinations.",
  },
  {
    question: "How do I request a booking or invitation?",
    answer:
      "You can explore available experiences and submit an inquiry through the platform. Our team reviews each request and follows up with availability, access details, and next steps.",
  },
  {
    question: "Are all experiences limited access?",
    answer:
      "Yes. Many of our experiences are intentionally limited to preserve exclusivity, quality, and a more personalized atmosphere for every guest.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section background="surface" spacing="md" className="relative bg-black/80 text-white overflow-hidden">
      <Container>
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-white/35">
            FAQ
          </p>
          <h2 className="text-h2 font-semibold tracking-tight text-white">
            Everything You Need to Know
          </h2>
        </div>

        <div className="mx-auto max-w-4xl overflow-hidden rounded-[var(--radius-lg)] border border-white/10 bg-white/[0.03] backdrop-blur-md divide-y divide-white/10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const buttonId = `faq-button-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <div key={index} className="group">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition hover:bg-white/[0.03] md:px-8 md:py-6"
                  >
                    <span className="text-base font-medium text-white/90 md:text-lg">
                      {faq.question}
                    </span>
                    <span className="text-xl text-white/50" aria-hidden="true">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="max-w-3xl px-6 pb-6 text-sm leading-7 text-white/65 md:px-8 md:text-md">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}