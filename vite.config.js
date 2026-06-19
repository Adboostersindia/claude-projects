import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        thankYou: resolve(__dirname, 'thank-you.html'),
        v2: resolve(__dirname, 'v2.html'),
      },
    },
  },
})
