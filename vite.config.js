import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      /* pass your config */
      png: {
        quality: 80,
      },
      jpeg: {
        quality: 80,
      },
      jpg: {
        quality: 80,
      },
    }),
  ],
  base: './',
  server: {
    host: true,          // permite acesso externo (Docker). Equivalente a "vite --host 0.0.0.0" que da pra colocar no package.json
    port: 3001,          // a porta 5173 é a padrão do vite, porém eu coloquei a 3001 (tem que coincidir com a porta do docker)
    watch: {
      usePolling: true,  // observar as modificações em tempo real que faço no codigo e colocar elas na tela
    }
  }
})
