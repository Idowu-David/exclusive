// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        exclusive: {
          red: "#DB4444", // The primary brand action color
          hoverRed: "#E07575", // A slightly lighter red for hover states
          black: "#000000", // Pure black for primary headings
          gray: "#F5F5F5", // Light gray for product card backgrounds
          textGray: "#7D8184", // Medium gray for secondary text
        },
      },
    },
  },
  plugins: [],
};
export default config;
