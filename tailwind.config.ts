import type { Config } from "tailwindcss";

const customColors = {
  primary: "#050709",
  secondary: "#140c1c",
  gray: "#dddddd",
  light_gray_25: "rgba(221, 221, 221, 0.25)",
  accent: "#8750f7",
  accent_dark: "#3d0263",
};

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Include all files in src folder
  ],
  theme: {
    extend: {
      colors: customColors,
      height: {},
      screens: {
        "3xl": "2048px",
      },
    },
  },
  plugins: [],
};
export default config;
