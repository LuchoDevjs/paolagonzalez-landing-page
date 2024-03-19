import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#f4f5f0",
        secondary: "#ff63c6",
      },
      maxWidth: {
        "8xl": "1200px",
      },
      backgroundImage: {
        image:
          "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)) ,url('/assets/bg-paolagonzalez.jpeg')",
      },
    },
  },
};

export default config;
