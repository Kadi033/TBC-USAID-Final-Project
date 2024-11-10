import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: { 500: "#98908B", 100: "#F8F4F0" },
        slate: { 600: "#666CA3" },
        grey: { 900: "#201F24", 500: "#696868", 300: "#B3B3B3", 100: "#F2F2F2" },
        green: "#277C78",
        yellow: "#F2CDAC",
        cyan: "#82C9D7",
        navy: "#626070",
        red: "#C94736",
        purple: "#826CB0",
        other: {
          purple: "#AF81BA",
          turquoise: "#597C7C",
          brown: "#93674F",
          magenta: "#934F6F",
          blue: "#3F82B2",
          navyGrey: "#97A0AC",
          armyGreen: "#7F9161",
          gold: "#CAB361",
          orange: "#BE6C49",
        },
        white: "#FFFFFF",
      },
      fontFamily: {
        sans: ['Public Sans Bold', 'sans-serif'],
        mono: ['Public Sans Regular', 'sans-serif'],
      },
      fontSize: {
        'preset-1': ['32px', '120%'],
        'preset-2': ['20px', '120%'],
        'preset-3': ['16px', '150%'],
        'preset-4': ['14px', '150%'],
        'preset-5': ['12px', '150%'],
      },
      spacing: {
        50: '4px', 100: '8px', 150: '12px', 200: '16px', 
        250: '20px', 300: '24px', 400: '32px', 500: '40px'
      },
    },
  },
  plugins: [],
};

export default config;