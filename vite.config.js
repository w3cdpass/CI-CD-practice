import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/CI-CD-practice/',
  build: {
    outDir: 'dist',          // Explicit output directory
    emptyOutDir: true        // Cleans dist folder before build
  },
  plugins: [react()],
})
