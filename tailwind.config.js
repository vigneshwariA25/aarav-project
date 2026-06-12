/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Dark emerald-black palette
        'deep-black': '#0D0F0E',
        'emerald-black': '#111714',
        'emerald-dark': '#0E1410',
        // Gold palette
        'gold': '#D8B46B',
        'gold-rich': '#CDA45E',
        'gold-light': '#E8C97A',
        'gold-pale': '#E8D4A0',
        // Text
        'ivory': '#F5F1E8',
        'ivory-muted': '#D8D0C4',
        'ivory-dim': '#A8A49C',
        // Legacy (keep for compatibility)
        olive: '#0D0F0E',
        'olive-light': '#111714',
        sage: '#4A6B5A',
        forest: '#1A2E28',
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'serif'],
        outfit: ['Outfit', 'sans-serif'],
        playball: ['Playball', 'cursive'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D8B46B, #CDA45E, #D8B46B)',
        'hero-gradient': 'linear-gradient(135deg, #0D0F0E 0%, #111714 50%, #0E1410 100%)',
      },
      animation: {
        'float': 'floatUp 8s linear infinite',
        'pulse-slow': 'ambientPulse 4s ease-in-out infinite',
        'shimmer': 'goldShimmer 3s ease infinite',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
