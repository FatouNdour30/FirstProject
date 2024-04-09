import { defineConfig } from 'vite';
import postcss from './postcss.config.cjs';
import react from '@vitejs/plugin-react';

export default defineConfig({
  define: {
    'process.env': process.env,
  },
  css: {
    postcss,
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: [
      {
        find: /^~.+/,
        replacement: (val) => {
          return val.replace(/^~/, "");
        },
      },
    ],
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    chunkSizeWarningLimit: 1000, // Ajustez la limite de taille des chunks ici (en ko)
    rollupOptions: {
      output: {
        manualChunks: {
          // Définissez vos chunks manuels ici
          // Par exemple :
          // 'chunk-name': ['module1', 'module2'],
        },
      },
    },
  },
});
