"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0 },
};

const contactDetails = [
  {
    label: "Email",
    value: "hello@evantra.com",
  },
  {
    label: "Phone",
    value: "+91 98765 43210",
  },
  {
    label: "Location",
    value: "Kochi, Kerala, India",
  },
];

const supportPoints = [
  "Response within 24 hours",
  "Private and premium assistance",
  "Tailored vehicle inquiries",
];

export default function ContactPageContent() {
  return (
    <section className="relative overflow-hidden bg-black pt-32 pb-20 text-white sm:pt-36 sm:pb-24 md:pt-40 md:pb-28 lg:pt-44 lg:pb-32">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-teal-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent_30%,transparent_70%,rgba(255,255,255,0.02))]" />
      </div>

      <Container className="relative z-10">
        <div className="mb-14 max-w-3xl text-center mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.24em] text-white/60 backdrop-blur-sm">
              Contact
            </span>

            <SectionHeading
              variant="h2"
              as="h3"
              className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl"
            >
              Let’s begin a refined conversation.
            </SectionHeading>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
              Whether you are exploring a premium vehicle, seeking more details,
              or looking for a tailored luxury experience, our team is here to
              assist you with clarity and care.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          {/* Left side */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6"
          >
            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 sm:p-7 backdrop-blur-md">
              <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                Contact information
              </h2>

              <div className="mt-6 space-y-5">
                {contactDetails.map((item) => (
                  <div
                    key={item.label}
                    className="border-b border-white/10 pb-4 last:border-none last:pb-0"
                  >
                    <p className="text-xs uppercase tracking-[0.22em] text-white/40">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm text-white/80 sm:text-base">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 sm:p-7 backdrop-blur-md">
              <h3 className="text-lg font-semibold tracking-tight text-white">
                Why contact Evantra
              </h3>

              <div className="mt-5 space-y-4">
                {supportPoints.map((point, index) => (
                  <div key={point} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-white/75">
                      0{index + 1}
                    </div>
                    <p className="pt-2 text-sm leading-6 text-white/65 sm:text-base">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right side */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-[30px] border border-white/10 bg-white/[0.05] p-6 sm:p-8 backdrop-blur-xl"
          >
            <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
              Send an inquiry
            </h2>

            <p className="mt-3 max-w-lg text-sm leading-6 text-white/60 sm:text-base">
              Share your interest and we’ll respond with a premium, personalized
              follow-up.
            </p>

            <form className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/75">
                    First name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter first name"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-white/25 focus:bg-white/[0.07]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-white/75">
                    Last name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter last name"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-white/25 focus:bg-white/[0.07]"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/75">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter email address"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-white/25 focus:bg-white/[0.07]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-white/75">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-white/25 focus:bg-white/[0.07]"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-white/75">
                  Interested model
                </label>
                <input
                  type="text"
                  placeholder="Mercedes S-Class, BMW 7 Series, Porsche..."
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-white/25 focus:bg-white/[0.07]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-white/75">
                  Message
                </label>
                <textarea
                  rows={6}
                  placeholder="Tell us about your requirement..."
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-white/25 focus:bg-white/[0.07]"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-neutral-200 sm:w-auto"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}