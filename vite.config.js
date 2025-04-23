import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['framer-motion', 'react-icons', 'react-slick']
        }
      }
    },
    assetsDir: 'assets',
    sourcemap: true,
    chunkSizeWarningLimit: 1000
  },
  server: {
    hmr: true,
    host: true,
    port: 3000
  },
  base: '/'
})
