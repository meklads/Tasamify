import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./content/**/*.{md,mdx}"],
  theme: {
    extend: {
      colors: {
        petrol: "#0F3D3E",
        mist: "#EDF1F2",
        ink: "#16212B",
        slate: "#5B6B76",
        amber: "#E39A2D",
        line: "#CBD5DA",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
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
