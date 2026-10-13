import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./content/**/*.{md,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: "#10182A",
        gold: "#C9A24B",
        cream: "#F6F3EC",
        petrol: "#10182A",
        mist: "#F6F3EC",
        ink: "#10182A",
        slate: "#5C6170",
        amber: "#C9A24B",
        line: "#D8D0C0",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      fontSize: {
        body: ["1.0625rem", { lineHeight: "1.75" }],
      },
      maxWidth: {
        measure: "38rem",
      },
    },
  },
  plugins: [],
};

export default config;
