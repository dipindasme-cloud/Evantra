"use client";

import { motion } from "framer-motion";

export default function GlassCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative rounded-2xl p-[1px]"
    >
      {/* border glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 via-transparent to-transparent md:group-hover:from-white/50 transition-all duration-500" />

      {/* content */}
      <div className="relative rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 p-6">
        {children}
      </div>
    </motion.div>
  );
}