import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
        proxy: {
          // forward frontend requests to the backend server during development
          '/api': {
            target: 'http://localhost:5000',
            changeOrigin: true,
            secure: false,
          },
        },
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.API_BASE': JSON.stringify(env.API_BASE || ''),
        'process.env.SITE_URL': JSON.stringify(env.SITE_URL || ''),
        'process.env.VITE_SITE_URL': JSON.stringify(env.VITE_SITE_URL || env.SITE_URL || ''),
        'process.env.VITE_API_BASE': JSON.stringify(env.VITE_API_BASE || env.API_BASE || '/api')
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
