import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  rollupOptions: {
    external: [
      './assets/images/projects/img1.png' // Add your specific file or pattern here
    ],
  },
})
