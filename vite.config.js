import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  extend: {
  animation: {
    borderPulse: 'borderPulse 5s ease-in-out infinite',
  },
  keyframes: {
    borderPulse: {
      '0%, 100%': { backgroundPosition: '0% 50%' },
      '50%': { backgroundPosition: '100% 50%' },
    },
  },
},
  plugins: [react(),tailwindcss()],
})
