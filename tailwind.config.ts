/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      /* =========================
         COLORS (DESIGN TOKENS)
      ========================= */
      colors: {
        evantra: {
          bg: "#050505",
          card: "rgba(255,255,255,0.03)",
          border: "rgba(255,255,255,0.1)",
          borderHover: "rgba(255,255,255,0.2)",

          textPrimary: "rgba(255,255,255,0.9)",
          textSecondary: "rgba(255,255,255,0.6)",
          textMuted: "rgba(255,255,255,0.35)",
        },
      },

      /* =========================
         TYPOGRAPHY SCALE
      ========================= */
      fontSize: {
        xs: ["10px", { lineHeight: "1.4" }],
        sm: ["12px", { lineHeight: "1.5" }],
        base: ["14px", { lineHeight: "1.6" }],
        md: ["16px", { lineHeight: "1.6" }],
        lg: ["18px", { lineHeight: "1.6" }],
        xl: ["22px", { lineHeight: "1.4" }],
        "2xl": ["28px", { lineHeight: "1.3" }],
        "3xl": ["36px", { lineHeight: "1.2" }],
        "4xl": ["48px", { lineHeight: "1.1" }],
        "5xl": ["64px", { lineHeight: "1.05" }],
      },

      /* =========================
         LETTER SPACING
      ========================= */
      letterSpacing: {
        tight: "-0.02em",
        wide: "0.1em",
        ultra: "0.4em",
      },

      /* =========================
         SPACING SYSTEM
      ========================= */
      spacing: {
        section: "6rem", // 96px
        "section-lg": "8rem", // 128px
      },

      /* =========================
         RADIUS SYSTEM
      ========================= */
      borderRadius: {
        xl2: "1rem",
        xl3: "1.5rem",
      },

      /* =========================
         SHADOW (PREMIUM)
      ========================= */
      boxShadow: {
        glow: "0 20px 60px rgba(0,0,0,0.6)",
      },

      /* =========================
         BACKDROP BLUR
      ========================= */
      backdropBlur: {
        xl: "20px",
      },
    },
  },

  plugins: [],
};

export default config;