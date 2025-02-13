import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 5002,
    proxy: process.env.NODE_ENV === 'development' ? {
      '/api': {
        target: 'http://localhost:5001',
        changeOrigin: false,
        secure: false,
      },
      '/socket.io': {
        target: 'ws://localhost:5001',
        ws: true,
      },
    } : {},
    cors: true,
  },
});
