import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  root: './dev',
  publicDir: path.resolve(__dirname, 'public'),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'react-style-props': path.resolve(__dirname, './src/index.ts'),
    },
  },
  server: {
    port: 3030,
    open: true,
  },
  build: {
    outDir: '../dev-dist',
    emptyOutDir: true,
  },
});
