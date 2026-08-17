import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    // Raise inline asset limit — icons under 8KB get inlined as base64
    assetsInlineLimit: 8192,

    // Enable CSS code splitting
    cssCodeSplit: true,

    // Rollup manual chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Framework core — changes rarely, long cache TTL
          'vendor-react': ['react', 'react-dom'],
          // Animation library — large, separate chunk
          'vendor-framer': ['framer-motion'],
          // Icon library — tree-shakeable but still benefits from isolation
          'vendor-lucide': ['lucide-react'],
          // SEO utility
          'vendor-helmet': ['react-helmet'],
        },
      },
    },
  },

  // Optimize deps pre-bundling
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'lucide-react'],
  },
})
