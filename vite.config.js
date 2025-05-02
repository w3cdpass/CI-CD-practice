import { defineConfig } from 'vite'

export default defineConfig({
    base: '/CI-CD-practice/', // Match your repo name
    build: {
        outDir: 'dist',
        emptyOutDir: true
    }
})