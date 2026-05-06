"use client";

import { motion } from "framer-motion";

export default function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      
      {/* MAIN SOFT LIGHT */}
      <motion.div
        initial={{ opacity: 0.3 }}
        animate={{
          x: [0, 40, -40, 0],
          y: [0, -30, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute top-[-10%] left-[20%]
          w-[600px] h-[600px]
          bg-white/10
          rounded-full
          blur-[120px]
        "
      />

      {/* SECONDARY LIGHT */}
      <motion.div
        initial={{ opacity: 0.2 }}
        animate={{
          x: [0, -30, 30, 0],
          y: [0, 40, -40, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute bottom-[-10%] right-[15%]
          w-[500px] h-[500px]
          bg-white/5
          rounded-full
          blur-[140px]
        "
      />

      {/* SUBTLE CENTER GLOW */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_70%)]
        "
      />
    </div>
  );
}