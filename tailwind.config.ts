import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        expand: {
          '0%, 100%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(1.2)' },
          '75%': { transform: 'scale(.9)' },
          '100%': { transform: 'scale(1)' }
        }
      },
      animation: {
        "expand": "expand .5s ease-out"
      }
    },
  },
  plugins: [],
};
export default config;
