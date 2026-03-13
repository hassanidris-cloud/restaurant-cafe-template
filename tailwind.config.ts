import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        espresso: "#3B2F2F",
        cream: "#F5E6D3",
        caramel: "#C2410C",
        golden: "#FACC15",
        olive: "#6B7A47",
        clay: "#B5654A"
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-lora)", "serif"]
      },
      boxShadow: {
        "soft-elevated": "0 18px 45px rgba(15, 23, 42, 0.25)"
      },
      backgroundImage: {
        "paper-texture":
          "radial-gradient(circle at 0 0, rgba(255,255,255,0.9), transparent 55%), radial-gradient(circle at 100% 100%, rgba(248,250,252,0.9), transparent 55%), url('/textures/subtle-noise.png')"
      }
    }
  },
  plugins: []
};

export default config;

