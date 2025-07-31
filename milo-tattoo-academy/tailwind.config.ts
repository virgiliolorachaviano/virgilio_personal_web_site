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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          pink: '#FF6B9D',
          purple: '#8B5CF6',
          blue: '#3B82F6',
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #FF6B9D 0%, #8B5CF6 50%, #3B82F6 100%)',
        'gradient-card': 'linear-gradient(135deg, rgba(255,107,157,0.1) 0%, rgba(139,92,246,0.1) 50%, rgba(59,130,246,0.1) 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
export default config;