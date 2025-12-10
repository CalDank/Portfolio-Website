/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Lookism-inspired dark, gritty, urban palette
        lookism: {
          // Backgrounds
          'bg-dark': '#111111',
          'bg': '#18181B',
          'bg-light': '#1F2933',
          'bg-panel': '#27272A',
          
          // Text
          'text-main': '#F9FAFB',
          'text-muted': '#9CA3AF',
          'text-dim': '#6B7280',
          
          // Neon Accents
          'accent-blue': '#3F4E72',
          'accent-blue-light': '#5A6B8C',
          'accent-pink': '#FF3478',
          'accent-cyan': '#5CE1E6',
          'accent-yellow': '#FACC15',
          'accent-purple': '#A855F7',
          
          // Borders
          'border-strong': '#E5E7EB',
          'border-muted': '#4B5563',
          'border-dark': '#374151',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Bebas Neue', 'Impact', 'sans-serif'],
        heading: ['Oswald', 'sans-serif'],
      },
      boxShadow: {
        'lookism': '0 8px 16px -4px rgba(0, 0, 0, 0.8)',
        'lookism-strong': '0 12px 24px -6px rgba(0, 0, 0, 0.9)',
        'lookism-glow-pink': '0 0 20px rgba(255, 52, 120, 0.5)',
        'lookism-glow-cyan': '0 0 20px rgba(92, 225, 230, 0.5)',
        'lookism-glow-yellow': '0 0 20px rgba(250, 204, 21, 0.5)',
      },
      borderWidth: {
        '3': '3px',
        '6': '6px',
      },
      backgroundImage: {
        'lookism-gradient': 'linear-gradient(180deg, #111111 0%, #18181B 50%, #1F2933 100%)',
        'lookism-spotlight': 'radial-gradient(circle at 50% 0%, rgba(92, 225, 230, 0.1) 0%, transparent 50%)',
        'lookism-noir': 'linear-gradient(135deg, #18181B 0%, #1F2933 50%, #27272A 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 10px rgba(92, 225, 230, 0.5)' },
          '100%': { textShadow: '0 0 20px rgba(92, 225, 230, 0.8), 0 0 30px rgba(92, 225, 230, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}
