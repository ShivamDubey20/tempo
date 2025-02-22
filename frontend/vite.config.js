import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: { port: 5173 },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    include: ['react-router-dom'],
  },
  build: {
    rollupOptions: {
      external: ['react-router-dom', 'react-toastify', 'axios' , 'lucide-react'],
    },
  },
});
