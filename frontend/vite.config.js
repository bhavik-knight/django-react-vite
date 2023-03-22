import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    manifest: true,
  },
  base: process.env.mode === "production" ? "/static/" : "/",
  root: "./src",
  server: {
    port: 3000,
    watch: {
      usePolling: true,
    },
  },
})
