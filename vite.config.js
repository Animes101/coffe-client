import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // চাইলে অন্য port দিতে পারো
  },
  resolve: {
    alias: {
      '@': '/src', // import shortcut, optional
    },
  },
})
