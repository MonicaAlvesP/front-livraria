import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      '@': path.resolve(__dirname, 'src'),
      // eslint-disable-next-line no-undef
      'style': path.resolve(__dirname, 'src/styles'),
    },
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: false, // Use APIs modernas
        },
      },
    },
  }
});