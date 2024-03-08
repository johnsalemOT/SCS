import { Outfit } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'footer': "url('/images/footer.png')"
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        outfit: ['var(--font-outfit)', 'sans-serif']
      },
      boxShadow: {
        'card': '0px 0px 4.3px 0px rgba(39, 67, 116, 0.11)',
        'contact': '0px 5px 62.5px 0px rgba(37, 180, 248, 0.2)',
        'custom': '0px 5px 50px 0px #00000014'
      },
      width: {
        '2screen': '200vw',
      },
    },
  },
  plugins: [],
};
export default config;
